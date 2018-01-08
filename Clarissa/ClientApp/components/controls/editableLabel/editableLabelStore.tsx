import { observable, computed } from "mobx";

export class EditableLabelStore {
    @computed
    get hasValue() {
        return this.value === "";
    }

    @observable clicked = false;
    @observable value = "";
}