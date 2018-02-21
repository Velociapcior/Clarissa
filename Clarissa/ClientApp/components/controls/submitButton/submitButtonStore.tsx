import { observable, computed } from "mobx";

export class SubmitButtonStore {
    @observable submitData = {};
    @observable canSubmit = false;
    @observable submitAddress = "";
}