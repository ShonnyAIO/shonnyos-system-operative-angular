import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { dockItems } from 'src/app/shared/config/dock-items';

@Component({
  selector: 'app-spotlight',
  templateUrl: './spotlight.component.html',
  styleUrls: ['./spotlight.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpotlightComponent {

  results: string[] = [];

  constructor(private dialogRef: DynamicDialogRef) { }

  onSearch(search: any) {
    console.log(search);
    setTimeout(() => {
      this.results = dockItems.filter(
        di => di.toLocaleLowerCase().startsWith(search.query.toLocaleLowerCase())
      );
    }, 100);
  }

  onAppSelected(app: string) {
    this.dialogRef.close(app);
  }

}
