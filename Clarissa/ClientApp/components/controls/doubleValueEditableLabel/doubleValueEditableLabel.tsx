import * as React from "react";
import { observer } from "mobx-react";

@observer
export class DoubleValueEditableLabel extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    handleClick() {
        this.props.store.value = "";
    }

    handleChange(e: any) {
        if (e.target.id === this.props.idFirst) {
            this.props.store.valueFirst = e.target.value;
        } else if (e.target.id === this.props.idSecond) {
            this.props.store.valueSecond = e.target.value;
        }

        this.buildValue();
    }

    buildValue() {
        if (this.props.store.valueSecond === "") {
            this.props.store.value = this.props.store.valueFirst;
        } else {
            this.props.store.value = this.props.store.valueFirst + this.props.separator + this.props.store.valueSecond;
        }
    }

    renderLabel() {
        return (
            <div className="form-group col-md-12">
                <input type="text" id={this.props.id} name={this.props.name} value={this.props.store.value} readOnly hidden />
                <label className="col-md-8">{this.props.text}</label>
                <span className="col-md-4" onClick={() => this.handleClick()}>{this.props.store.value}</span>
            </div>
        );
    }

    renderInput() {
        return (
            <div className="form-group col-md-12">
                <input type="text" id={this.props.id} name={this.props.name} value={this.props.store.value} readOnly hidden />
                <label className="col-md-8">{this.props.text}</label>
                <div className="col-md-3">
                    <div className="col-md-5 col-sm-5 col-xs-5 no-padding">
                        <input
                            onClick={() => this.handleClick()}
                            onChange={(e: any) => this.handleChange(e)}
                            className="form-control"
                            type="text"
                            name={this.props.nameFirst}
                            id={this.props.idFirst}
                            placeholder={this.props.placeholderFirst}
                            value={this.props.store.valueFirst}
                        />
                    </div>
                    <h4 className="col-md-2 col-sm-2 col-xs-2">{this.props.separator}</h4>
                    <div className="col-md-5 col-sm-5 col-xs-5 no-padding">
                        <input
                            onClick={() => this.handleClick()}
                            onChange={(e: any) => this.handleChange(e)}
                            className="form-control col-md-1"
                            type="text"
                            name={this.props.nameSecond}
                            id={this.props.idSecond}
                            placeholder={this.props.placeholderSecond}
                            value={this.props.store.valueSecond}
                        />
                    </div>
                </div>
            </div>);
    }

    render() {
        return (<div>
                    {this.props.store.clicked ? this.renderInput() : this.renderLabel()}
                </div>);
    }

}