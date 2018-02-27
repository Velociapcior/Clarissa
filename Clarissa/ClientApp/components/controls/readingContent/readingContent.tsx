import * as React from "react";
import { observer } from "mobx-react";

@observer
export class ReadingContent extends React.Component<any, any> {
    public render() {
        return <div className="content">
            {this.props.store.content}
          </div>;
    }
}