import * as React from "react";
import { observer } from "mobx-react";

@observer
export class ReadingContent extends React.Component<any, any> {
    public render() {
        return <div id={this.props.store.readingId}>
            <h2>{this.props.store.title}</h2>
            {this.props.store.content}
          </div>;
    }
}