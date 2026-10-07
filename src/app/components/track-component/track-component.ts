import { Component, input } from '@angular/core';
import { Track } from '../../interfaces/track-interface';

@Component({
  imports: [],
  selector: 'app-track-component',
  styleUrl: './track-component.scss',
  templateUrl: './track-component.html',
})
export class TrackComponent {
  track = input.required<Track>();


}
