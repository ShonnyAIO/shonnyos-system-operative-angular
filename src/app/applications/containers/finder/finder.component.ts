import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from 'src/app/shared/store/store';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinderComponent implements OnInit {

  folders$ = this.store.tutorialFolders$;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
