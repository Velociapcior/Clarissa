import * as React from "react";
import { RouteComponentProps } from "react-router";
import { EditableLabel } from "./controls/editableLabel";

export class User extends React.Component<RouteComponentProps<{}>, {}> {
    render() {
        return (
            <div className="wrapper">
                <EditableLabel id="firstName" text="Pierwsze Imię" name="FirstName" value="dupa" placeholder="Podaj swoje imie..." />
            </div>
        );
    }
}