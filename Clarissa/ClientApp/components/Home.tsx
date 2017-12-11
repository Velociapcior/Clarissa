import * as React from "react";
import { RouteComponentProps } from "react-router";

export class Home extends React.Component<RouteComponentProps<{}>, {}> {



    public render() {
        return <div>
            <button type="button" className="btn btn-info">
                Test alert
            </button>
        </div>;
    }
}
