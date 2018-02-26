import * as React from "react";
import { RouteComponentProps } from "react-router";
import { ReadingContent } from "./controls/readingContent/readingContent";
import { ReadingContentStore } from "./controls/readingContent/readingContentStore";

export class Reading extends React.Component<{}, {}> {

    constructor(props: any) {
        super(props);
    }

    getReadingContentData() {
        
    }

    readingContentStore = new ReadingContentStore;

    public render() {
        return <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Primary title
                        </h1>
                        <h2 className="subtitle">
                            Primary subtitle
                         </h2>
                    </div>
                </div>
            </section>
            <section>

            </section>
        </div>;
    }
}