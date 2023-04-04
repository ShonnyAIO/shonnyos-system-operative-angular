import { Injectable } from "@angular/core";
import { BaseStore } from "./base-store";
import { State } from "./state";
import { DESKTOP } from "../config/applications";
import { Observable, map } from "rxjs";
import { FolderSelection } from "../models/folde-selection";
import { Folder } from "../models/folder";

const initialState: State = {
    activeApplication: DESKTOP,
    selectedFolderIds: [],
    deletedFolderIds: [],
    folders: [
        {
            id: 0,
            title: 'desktop'
        },
        {
            id: 1,
            title: 'untitled',
            parentFolderId: 0
        },
        {
            id: 2,
            title: 'tutorials',
            parentFolderId: 0
        },
        {
            id: 3,
            title: 'assets',
            parentFolderId: 2
        },
    ]
};

@Injectable({ providedIn: 'root' })
export class Store extends BaseStore {

    trashItemsCount$: Observable<number> = this.select((state) => {
        return state.deletedFolderIds.length;
    })

    desktopFolders$: Observable<Folder[]> = this.select((state) => {
        return state.folders
            .filter((folder) => folder.parentFolderId === 0 && !state.deletedFolderIds.includes(folder.id))
            .map((f: any) => {
                return {
                    ...f,
                    selected: state.selectedFolderIds.includes(f.id)
                }
            });
    });

    tutorialFolders$: Observable<Folder[]> = this.select((state) => {
        return state.folders
            .filter((folder) => folder.parentFolderId === 2 && !state.deletedFolderIds.includes(folder.id))
            .map((f: any) => {
                return {
                    ...f,
                    selected: state.selectedFolderIds.includes(f.id)
                }
            });
    });

    trashFolders$: Observable<Folder[]> = this.select((state) => {
        return state.folders
            .filter((folder) => state.deletedFolderIds.includes(folder.id))
            .map((f: any) => {
                return {
                    ...f,
                    selected: state.selectedFolderIds.includes(f.id)
                }
            });
    });

    activeApplication$: Observable<string> = this.select((state) => {
        return state.activeApplication;
    });

    constructor() {
        super(initialState);
    }

    setActiveApplication(activateAppId = DESKTOP) {
        this.setState({
            activeApplication: activateAppId
        })
    }

    toggleFolder(folderSelection: FolderSelection) {
        if (folderSelection.selectedMultiple) {
            this.setState({
                selectedFolderIds: [
                    ...this.state.selectedFolderIds,
                    folderSelection.id
                ]
            });
        } else {
            this.setState({
                selectedFolderIds: [
                    folderSelection.id
                ]
            })
        }
    }

    unselecAllFolders() {
        this.setState({
            selectedFolderIds: []
        });
    }

    deletedSelectedFolder() {
        this.setState({
            deletedFolderIds: [
                ...this.state.deletedFolderIds,
                ...this.state.selectedFolderIds
            ]
        });
    }

    addNewFolder() {
        const miliseconds = new Date().getTime();
        const newFolder: Folder = {
            id: miliseconds,
            title: `${miliseconds}`,
            parentFolderId: 0
        };
        this.setState({
            folders: [
                ...this.state.folders,
                newFolder
            ]
        });
    }
}