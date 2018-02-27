import { observable, computed } from "mobx";

export class ReadingContentStore {
    @observable content = "";
    @observable readingId = "";
    @observable title = "";
    @observable subTitle = "";
}