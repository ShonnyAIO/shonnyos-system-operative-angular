import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { mergeMap, Subject, takeUntil, filter, tap } from 'rxjs';
import { Store } from 'src/app/shared/store/store';
import { windowService } from 'src/app/services/window.service';
import { SPOTLIGHT, DESKTOP } from 'src/app/shared/config/applications';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit, OnDestroy {

  launchpadOpened: boolean = false;
  trashOpened: boolean = false;
  folders$ = this.store.desktopFolders$;
  onDestroy$ = new Subject();

  constructor(private store: Store, private window: windowService) { }

  ngOnInit(): void {
    this.store.activeApplication$.pipe(
      tap(app => console.log(app)),
      takeUntil(this.onDestroy$),
      filter(app => app !== DESKTOP),
      mergeMap(app => this.window.open(app)))
      .subscribe(app => this.store.setActiveApplication(app));
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  unselectFolders() {
    this.store.unselecAllFolders();
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {

    if (event.ctrlKey && event.code == 'Space') {
      return this.openSpotLight();
    }


    if (event.ctrlKey && event.code == 'Backspace') {
      this.store.deletedSelectedFolder();
    }
  }

  openSpotLight() {
    return this.store.setActiveApplication(SPOTLIGHT);
  }

}
