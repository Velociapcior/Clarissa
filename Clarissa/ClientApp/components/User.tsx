import * as React from "react";
import { RouteComponentProps } from "react-router";
import { EditableLabel } from "./controls/editableLabel";

export class User extends React.Component<RouteComponentProps<{}>, {}> {
    render() {
        return (
            <div className="wrapper">
                <EditableLabel id="firstName" text="Pierwsze imię" name="FirstName" placeholder="Podaj swoje imię..." />
                <EditableLabel id="secondName" text="Drugie imię" name="FirstName" placeholder="Podaj swoje drugie imię..." />
                <EditableLabel id="dateOfBirth" text="Data urodzenia" name="DateOfBirth" placeholder="Podaj datę urodzenia..." />
                <EditableLabel id="" text="" name="" placeholder="" />
                <EditableLabel id="" text="" name="" placeholder="" />
            </div >
        );
    }
}