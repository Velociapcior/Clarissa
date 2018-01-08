import { observable, computed } from "mobx";

export class DoubleValueEditableLabelStore {
    @computed
    get hasValue() {
        return this.value === "";
    }

    @observable clicked = false;
    @observable value = "";
    @observable valueFirst = "";
    @observable valueSecond ="";
}