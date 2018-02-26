import * as React from "react";
import "isomorphic-fetch";
import { observer } from "mobx-react";
import { observable, computed } from "mobx";
import { RouteComponentProps } from "react-router";
import { ReadingListItem } from "./controls/readingListItem/readingListItem";
import { ReadingListItemStore } from "./controls/readingListItem/readingListItemStore";

@observer
export class ReadingsList extends React.Component<RouteComponentProps<{}>, ReadingList> {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        fetch("api/ReadingList/GetReadingItemList")
            .then(response => response.json() as Promise<ReadingList>)
            .then(data => { this.saveDataToStore(data) });
    }

    saveDataToStore(data: ReadingList) {

        for (var index in data.readingItems) {
            let readingListItemStore = new ReadingListItemStore;

            readingListItemStore.description = data.readingItems[index].description;
            readingListItemStore.title = data.readingItems[index].title;
            readingListItemStore.readingId = data.readingItems[index].readingId;
            readingListItemStore.logoUrl = data.readingItems[index].logoUrl;

            this.readingItemsListStore.push(readingListItemStore);
        }
    }

    @observable readingItemsListStore: ReadingListItemStore[] = [];

    public render() {
        return <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Hero title
                               </h1>
                        <h2 className="subtitle">
                            Hero subtitle
                               </h2>
                    </div>
                </div>
            </section>
                <div className="columns is-multiline">
                    {
                        this.readingItemsListStore.map(readingItem => (
                            <div className="column is-half" key={readingItem.readingId}>
                                <ReadingListItem store={readingItem} />
                            </div>
                        ))}
                </div>
        </div>;
    }
}

interface ReadingList {
    readingItems: Array<ReadingItemList>
}

interface ReadingItemList {
    title: string;
    description: string;
    logoUrl: string;
    readingId: string;
}