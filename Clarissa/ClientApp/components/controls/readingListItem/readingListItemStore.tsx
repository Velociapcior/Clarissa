import { observable, computed } from "mobx";

export class ReadingListItemStore {
    @observable title = "";
    @observable description = "";
    @observable logoUrl = "";
    @observable readingId = "";
}