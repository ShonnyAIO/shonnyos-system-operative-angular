import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TooltipOptions } from 'primeng/tooltip';
import { Subject, takeUntil } from 'rxjs';
import { dockItems } from 'src/app/shared/config/dock-items';
import { Store } from 'src/app/shared/store/store';

@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DockComponent implements OnInit, OnDestroy {

  onDestroy$ = new Subject();

  @Output() launchpadOpened = new EventEmitter();
  @Output() trashOpened = new EventEmitter();

  constructor(private changeDetection: ChangeDetectorRef, private store: Store) { }

  dockItems: MenuItem[] = [];

  defaultTooltipOptions: TooltipOptions = {
    tooltipPosition: 'top',
    positionTop: -15,
    positionLeft: 15,
    showDelay: 1000
  }

  ngOnInit(): void {
    this.dockItems = this.getDockItems();
    this.store.trashItemsCount$.pipe(takeUntil(this.onDestroy$))
      .subscribe((count) => {
        this.updateTrashIcon(count);
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  getDockItems() {
    return dockItems.map(dockItem => {
      return {
        label: dockItem,
        icon: dockItem,
        tooltipOptions: {
          tooltipLabel: dockItem,
          ...this.defaultTooltipOptions
        },
        command: () => {
          if (dockItem.toLocaleUpperCase() === 'LAUNCHPAD') {
            return this.launchpadOpened.emit();
          }
          if (dockItem.toLocaleUpperCase() === 'TRASH') {
            return this.trashOpened.emit();
          }
          this.store.setActiveApplication(dockItem);
        }
      };
    });
  }

  updateTrashIcon(trahsItemsCount: number) {
    this.dockItems = this.dockItems.map(dockItem => {
      const icon = trahsItemsCount > 0 && dockItem.label == 'trash' ? 'trash-full' : dockItem.icon
      return {
        ...dockItem,
        icon
      };
    });
    this.changeDetection.markForCheck();
  }
}
