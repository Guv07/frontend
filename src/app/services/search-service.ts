import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Track } from '../interfaces/track-interface';

interface SearchResponse {
    tracks: Track[]
}

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    private http = inject(HttpClient)
    pesquisar(query: any): Observable<any> {
        return this.http.get(`http://localhost:3000/track/search`, {
            params: { q: query }
        });
    }
}
