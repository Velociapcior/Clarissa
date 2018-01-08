import { observable } from "mobx";

export class EditableLabelStore {
    @observable clicked = false;
    @observable value = "";
}