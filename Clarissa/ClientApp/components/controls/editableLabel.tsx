import * as React from "react";

export class EditableLabel extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            clicked: false,
            value: this.props.value
        }
    }

    componentDidMount() {
        if (this.props.value === null || this.props.value === "") {
            this.setState({ clicked: true });
        }
    }

    handleClick() {
        this.setState({ clicked: true });
    }

    handleChange(e: any) {
        this.setState({
            value: e.target.value
        });
    }

    renderInput() {
        return (
            <div className="form-group col-md-5">
                <label className="col-md-3" htmlFor={this.props.id}>{this.props.text}</label>
                <input onChange={(e: any) => this.handleChange(e)} onClick={() => this.handleClick()} className="form-control" type="text" name={this.props.name} id={this.props.id} value={this.state.value} placeholder={this.props.placeholder} />
            </div>);
    }

    renderLabel() {
        return (
            <div className="form-group col-md-5">
                <label className="col-md-3" htmlFor={this.props.id}>{this.props.text}</label>
                <span className="col-md-12" onClick={() => this.handleClick()}>{this.state.value}</span>
            </div>);
    }

    render() {
        return (
            <div>
                {this.state.clicked ? this.renderInput() : this.renderLabel()}
            </div>
        );
    }
}