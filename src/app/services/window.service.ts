import { Injectable } from "@angular/core";
import { DialogService, DynamicDialogConfig } from "primeng/dynamicdialog";
import { Observable, throwError } from "rxjs";
import * as apps from './../shared/config/applications';
/* Components de Windos */
import { TerminalComponent } from "../applications/containers/terminal/terminal.component";
import { FinderComponent } from "../applications/containers/finder/finder.component";
import { TrashComponent } from "../applications/containers/trash/trash.component";
import { SpotlightComponent } from "../applications/containers/spotlight/spotlight.component";



@Injectable({ providedIn: 'root' })
export class windowService {

    constructor(private dialogService: DialogService) { }

    open(activeApplication: string): Observable<any> {
        const component = this.findComponentByApplicationId(activeApplication);
        if (component) {
            const dialogConfig: DynamicDialogConfig = {
                showHeader: false,
                width: '50%',
                styleClass: activeApplication

            };
            return this.dialogService.open(component, dialogConfig).onClose;
        }

        return throwError(() => 'Component not found');

    }

    private findComponentByApplicationId(applicationId: string) {
        switch (applicationId) {
            case apps.TERMINAL: return TerminalComponent;
            case apps.FINDER: return FinderComponent;
            case apps.TRASH: return TrashComponent;
            case apps.SPOTLIGHT: return SpotlightComponent;

            default: return null;
        }
    }

}