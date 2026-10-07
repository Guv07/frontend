import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from '../../services/search-service';
import { TrackComponent } from '../track-component/track-component';
import { catchError, debounceTime, distinctUntilChanged, map, of, startWith, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Track } from '../../interfaces/track-interface';

type Status = 'idle' | 'success' | 'loading' | 'empty' | 'error'

type SearchState = {
  tracks: Track[],
  loading: boolean,
  error: boolean
}

@Component({
  imports: [FormsModule, ReactiveFormsModule, AsyncPipe, TrackComponent],
  selector: 'app-search-bar-component',
  standalone: true,
  styleUrl: './search-bar-component.scss',
  templateUrl: './search-bar-component.html',
})
export class SearchBarComponent {
  pesquisa: string = ""
  tracks: any = []
  status: Status = 'idle'
  

  private searchService = inject(SearchService)

  searchControl = new FormControl('', { nonNullable: true });

  searchState$ = this.searchControl.valueChanges.pipe(
    map(query => query.trim()),
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(query => {
      if (query.length < 2) {
        return of<SearchState>({
          tracks: [],
          loading: false,
          error: false
        })
      }

      return this.searchService.pesquisar(query).pipe(
        map(response => ({
          tracks: response.tracks,
          loading: false,
          error: false
        })),
        startWith({
          tracks: [],
          loading: true,
          error: false
        } satisfies SearchState),
        catchError(() => of<SearchState>({
          tracks: [],
          loading: false,
          error: true
        }))
      )
    }),
    startWith({
      tracks: [],
      loading: false,
      error: false
    } satisfies SearchState)
  )

  // pesquisar() {
  //   this.status = 'loading';
  //   this.searchService.pesquisar(this.pesquisa).subscribe({
  //     next: (response) => {
  //       if (response.length < 1) {
  //         this.status = 'empty'
  //         return;
  //       };
  //       this.tracks = response;
  //       this.status = 'success';
  //     },
  //     error: (e) => {
  //       console.error(e)
  //     }
  //   })
  // }

  // get showList(): boolean {
  //   return this.pesquisa.length > 0 && this.status !== 'idle'
  // }
}
