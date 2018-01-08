import { observable, computed } from "mobx";

export class DoubleValueEditableLabelStore {
    @observable clicked = false;
    @observable value = "";
    @observable valueFirst = "";
    @observable valueSecond ="";
}