import { observable, computed } from "mobx";

export class ReadingQuestionStore {
    @observable readingId = "";
    @observable question = "";
    @observable optionFirst = "";
    @observable optionFirstReadingId = "";
    @observable optionSecond = "";
    @observable optionSecondReadingId = "";
}