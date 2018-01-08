import { observable, computed } from "mobx";

export class DoubleValueEditableLabelStore {
    @computed
    get clicked() {
        return this.value === "";
    }
    @observable value = "";
    @observable valueFirst = "";
    @observable valueSecond ="";
}