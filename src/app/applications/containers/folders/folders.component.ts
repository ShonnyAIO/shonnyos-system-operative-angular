import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Folder } from 'src/app/shared/models/folder';
import { Store } from 'src/app/shared/store/store';
import { FolderSelection } from 'src/app/shared/models/folde-selection';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoldersComponent {

  @Input() folders: Folder[] = [];

  @Input() isFinderOpened = false;

  constructor(private store: Store) { }

  onFolderSelected(folderSelection: FolderSelection) {
    this.store.toggleFolder(folderSelection);

  }

}
