import * as React from "react";
import "isomorphic-fetch";
import { RouteComponentProps } from "react-router";
import { EditableLabel } from "./controls/editableLabel/editableLabel";
import { EditableLabelStore } from "./controls/editableLabel/editableLabelStore";
import { CountryDropdown } from "./controls/countryDropdown/countryDropdown";
import { CountryDropdownStore } from "./controls/countryDropdown/countryDropdownStore";
import { DoubleValueEditableLabel } from "./controls/doubleValueEditableLabel/doubleValueEditableLabel";
import { DoubleValueEditableLabelStore } from "./controls/doubleValueEditableLabel/doubleValueEditableLabelStore";

export class User extends React.Component<RouteComponentProps<{}>, UserData> {
    constructor(props: any) {
        super(props);

        fetch("api/UserData/GetData")
            .then(response => response.json() as Promise<UserData>)
            .then(data => {
                this.saveDataToStore(data);
            });
    }

    saveDataToStore(data: UserData) {
        this.firstNameStore.value = data.firstName;
        this.secondNameStore.value = data.secondName;
        this.dateOfBirthStore.value = data.dateOfBirth;
        this.bankNumberStore.value = data.bankNumber;
        this.personalIdStore.value = data.personalId;
        //this.cityStore.value = data.address.city;
        this.streetNameStore.value = data.address.streetName;
        this.addressNumberStore.value = data.address.streetNumber + "/" + data.address.flatNumber;
        this.addressNumberStore.valueFirst = data.address.streetNumber;
        this.addressNumberStore.valueSecond = data.address.flatNumber;
        this.zipCodeStore.value = data.address.zipCode;

        const zipCodeArray = data.address.zipCode.split("-");
        [this.zipCodeStore.valueFirst, this.zipCodeStore.valueSecond] = zipCodeArray;
    }

    firstNameStore = new EditableLabelStore;
    secondNameStore = new EditableLabelStore;
    dateOfBirthStore = new EditableLabelStore;
    personalIdStore = new EditableLabelStore;
    bankNumberStore = new EditableLabelStore;
    cityStore = new EditableLabelStore;
    streetNameStore = new EditableLabelStore;
    addressNumberStore = new DoubleValueEditableLabelStore;
    zipCodeStore = new DoubleValueEditableLabelStore;

    countryDropdownStore = new CountryDropdownStore;

    render() {
        return (
            <div className="wrapper">
                <h1>Twoje dane</h1>
                <hr className="col-md-12" />
                <h3>Dane osobowe</h3>
                <br/>
                <EditableLabel store={this.firstNameStore} id="firstName" text="Pierwsze imię" name="FirstName" placeholder="Podaj swoje imię..." />
                <EditableLabel store={this.secondNameStore} id="secondName" text="Drugie imię" name="FirstName" placeholder="Podaj swoje drugie imię..." />
                <EditableLabel store={this.dateOfBirthStore} id="dateOfBirth" text="Data urodzenia" name="DateOfBirth" placeholder="Podaj datę urodzenia..." />
                <EditableLabel store={this.personalIdStore} id="personalId" text="PESEL" name="PersonalId" placeholder="Podaj swój numer PESEL..." />
                <EditableLabel store={this.bankNumberStore} id="bankNumber" text="Numer rachunku bankowego" name="BankNumber" placeholder="Podaj swój numer rachunku..." />

                <hr className="col-md-12" />
                <h3>Adres</h3>
                <br />
                <CountryDropdown store={this.countryDropdownStore} id="countryDropdown" value="Poland" text="Państwo" name="Country" />
                <EditableLabel store={this.cityStore} id="city" text="Miasto" name="City" placeholder="Podaj miasto zamieszkania..." />
                <EditableLabel store={this.streetNameStore} id="streetName" text="Ulica" name="StreetName" placeholder="Podaj nazwę ulicy..." />
                <DoubleValueEditableLabel
                    store = {this.addressNumberStore}
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
                    store={this.zipCodeStore}
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
            </div >
        );
    }
}

interface UserData {
    customerId: any;
    firstName: string;
    secondName: string;
    personalId: string;
    phoneNumber: string;
    address: Address;
    bankNumber: string;
    dateOfBirth: string;
}

interface Address {
    streetName: string;
    streetNumber: string;
    flatNumber: string;
    city: string;
    zipCode: string;
    country: any;
}