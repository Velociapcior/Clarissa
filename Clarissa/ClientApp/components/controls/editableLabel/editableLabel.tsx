import * as React from "react";
import { observer } from "mobx-react";

@observer
export class EditableLabel extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        if (this.props.store.value === "") {
            this.props.store.clicked = true;
        }
    }

    handleClick() {
        this.props.store.clicked = true;
    }

    handleChange(e: any) {
        this.props.store.value = e.target.value;
    }

    renderInput() {
        return (
            <div className="form-group col-md-12">
                <label className="col-md-8" htmlFor={this.props.id}>{this.props.text}</label>
                <div className="col-md-3">
                    <input
                        onChange={(e: any) => this.handleChange(e)}
                        onClick={() => this.handleClick()} className="form-control"
                        type="text" name={this.props.name} id={this.props.id}
                        value={this.props.store.value}
                        placeholder={this.props.placeholder} />
                </div>
            </div>);
    }

    renderLabel() {
        return (
            <div className="form-group col-md-12">
                <label className="col-md-8" htmlFor={this.props.id}>{this.props.text}</label>
                <span className="col-md-4" onClick={() => this.handleClick()}>{this.props.store.value}</span>
            </div>);
    }

    render() {
        return (
            <div>
                {this.props.store.clicked  ? this.renderInput() : this.renderLabel()}
            </div>
        );
    }
}