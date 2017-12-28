import * as React from "react";
import { RouteComponentProps } from "react-router";
import { EditableLabel } from "./controls/editableLabel";
import { CountryDropdown } from "./controls/countryDropdown";
import { DoubleValueEditableLabel } from "./controls/doubleValueEditableLabel";

export class User extends React.Component<RouteComponentProps<{}>, {}> {
    render() {
        return (
            <div className="wrapper">
                <h1>Twoje dane</h1>
                <hr className="col-md-12" />
                <h3>Dane osobowe</h3>
                <br/>
                <EditableLabel id="firstName" text="Pierwsze imię" name="FirstName" placeholder="Podaj swoje imię..." />
                <EditableLabel id="secondName" text="Drugie imię" name="FirstName" placeholder="Podaj swoje drugie imię..." />
                <EditableLabel id="dateOfBirth" text="Data urodzenia" name="DateOfBirth" placeholder="Podaj datę urodzenia..." />
                <EditableLabel id="personalId" text="PESEL" name="PersonalId" placeholder="Podaj swój numer PESEL..." />
                <EditableLabel id="bankNumber" text="Numer rachunku bankowego" name="BankNumber" placeholder="Podaj swój numer rachunku..." />

                <hr className="col-md-12" />
                <h3>Adres</h3>
                <br />
                <CountryDropdown id="countryDropdown" value="Poland" text="Państwo" name="Country" />
                <EditableLabel id="city" text="Miasto" name="City" placeholder="Podaj miasto zamieszkania..." />
                <EditableLabel id="streetName" text="Ulica" name="StreetName" placeholder="Podaj nazwę ulicy..." />
                <DoubleValueEditableLabel
                    id="addressNumber"
                    name="AddressNumber"
                    idFirst="streetNumber"
                    idSecond="flatNumber"
                    nameFirst="StreetNumber"
                    nameSecond="FlatNumber"
                    placeholderFirst="Nr domu"
                    placeholderSecond="Nr mieszkania"
                    text="Nr domu / nr mieszkania"
                    separator="/" />
                <DoubleValueEditableLabel
                    id="zipCode"
                    name="ZipCode"
                    idFirst="zipCodeFirst"
                    idSecond="zipCodeSecond"
                    nameFirst="zipCodeFirst"
                    nameSecond="zipCodeSecond"
                    placeholderFirst="Kod"
                    placeholderSecond="Kod"
                    text="Kod pocztowy"
                    separator="-" />
                <EditableLabel id="" text="" name="" placeholder="" />
            </div >
        );
    }
}