import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarGroup } from 'src/app/shared/models/sidebar-group';

@Component({
  selector: 'app-finder-sidebar',
  templateUrl: './finder-sidebar.component.html',
  styleUrls: ['./finder-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinderSidebarComponent {

  sidebarGroup: SidebarGroup[] = [
    {
      category: 'Favorites',
      items: [
        {
          label: 'Airdrop',
          image: 'airdrop.png'
        },
        {
          label: 'Recents',
          image: 'recents.png'
        },
        {
          label: 'Applications',
          image: 'applications.png'
        },
        {
          label: 'Desktop',
          image: 'desktop.png'
        },
        {
          label: 'Documents',
          image: 'documents.png'
        },
        {
          label: 'Downloads',
          image: 'downloads.png'
        }
      ]
    },
    {
      category: 'ICloud',
      items: [
        {
          label: 'ICloud Drive',
          image: 'icloud.png'
        },
        {
          label: 'Shared',
          image: 'network.png'
        }
      ]
    },
    {
      category: 'Tags',
      items: [
        {
          label: 'red',
          icon: 'pi pi-circle-fill'
        },
        {
          label: 'orange',
          icon: 'pi pi-circle-fill'
        },
        {
          label: 'yellow',
          icon: 'pi pi-circle-fill'
        },
        {
          label: 'green',
          icon: 'pi pi-circle-fill'
        },
        {
          label: 'blue',
          icon: 'pi pi-circle-fill'
        },
        {
          label: 'purple',
          icon: 'pi pi-circle-fill'
        },
        {
          label: 'grey',
          icon: 'pi pi-circle-fill'
        }
      ]
    }
  ]
}
