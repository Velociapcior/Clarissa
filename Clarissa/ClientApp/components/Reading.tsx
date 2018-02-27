import * as React from "react";
import { RouteComponentProps } from "react-router";
import { observer } from "mobx-react";
import { ReadingContent } from "./controls/readingContent/readingContent";
import { ReadingContentStore } from "./controls/readingContent/readingContentStore";
import { ReadingQuestion } from "./controls/readingQuestion/readingQuestion";
import { ReadingQuestionStore } from "./controls/readingQuestion/readingQuestionStore";

@observer
export class Reading extends React.Component<RouteComponentProps<{}>, ReadingPropsInterfaces> {

    constructor(props: any) {
        super(props);
        
        let readingId: any = {};
        readingId = this.props.match.params;

        fetch("api/Reading/GetReading?readingId=" + readingId["readingId"])
            .then(response => response.json() as Promise<ReadingResponse>)
            .then(data => { this.saveDataToStore(data) });

        //fetch("api/Reading/GetReadingQuestion?readingId=" + readingId["readingId"])
        //    .then(response => response.json() as Promise<ReadingQuestionResponse>)
        //    .then(data => { this.saveDataToStore(data) });
    }

    saveDataToStore(data: ReadingResponse) {

        this.readingContentStore.readingId = data.readingId;
        this.readingContentStore.content = data.content;
        this.readingContentStore.subTitle = data.subTitle;
        this.readingContentStore.title = data.title;

        this.readingQuestionStore.readingId = data.readingId;
    }

    readingContentStore = new ReadingContentStore;
    readingQuestionStore = new ReadingQuestionStore;

    public render() {
        return <div>
            <section id={this.readingContentStore.readingId} className="hero is-primary is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            {this.readingContentStore.title}
                        </h1>
                        <h2 className="subtitle">
                            {this.readingContentStore.subTitle}
                        </h2>
                    </div>
                </div>
            </section>
            <section className="container">
                <ReadingContent store={this.readingContentStore} />
            </section>
            <br/>
            <section className="columns">
                <ReadingQuestion store={this.readingQuestionStore}/>
            </section>
        </div>;
    }
}

interface ReadingResponse {
    title: string,
    readingId: string,
    subTitle: string,
    content: string,
}

interface ReadingQuestionResponse {
    
}

type ReadingPropsInterfaces = ReadingResponse | ReadingQuestionResponse;