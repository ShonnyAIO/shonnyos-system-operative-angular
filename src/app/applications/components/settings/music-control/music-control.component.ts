import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-control',
  templateUrl: './music-control.component.html',
  styleUrls: ['./music-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicControlComponent {

  music = "assets/music/track-13.mp3";
  audio = new Audio(this.music);
  listen: boolean = false;

  ngOnInit() { }


  playMusic() {
    if (this.listen) {
      this.audio.pause();
      this.listen = false;
    } else {
      this.audio.load();
      this.audio.play();
      this.listen = true;
    }
  }

}
