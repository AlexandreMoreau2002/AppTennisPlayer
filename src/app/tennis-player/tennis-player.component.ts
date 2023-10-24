import { Component } from '@angular/core';
import { TennisPlayer } from '../Model/tennis-player';

@Component({
  selector: 'app-tennis-player',
  templateUrl: './tennis-player.component.html',
  styleUrls: ['./tennis-player.component.sass']
})
export class TennisPlayerComponent {
  public player = new TennisPlayer
}
