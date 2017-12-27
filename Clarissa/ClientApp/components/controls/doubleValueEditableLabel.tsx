import * as React from "react";

export class DoubleValueEditableLabel extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            clicked: false,
            value: this.props.value,
        }
    }

    componentDidMount() {
        if (this.props.value == null) {
            this.setState({ clicked: true });
        }
    }

    handleClick() {
        this.setState({ clicked: true });
    }

    handleChange(e: any) {
        if (e.target.id === this.props.idFirst) {
            this.setState({ valueFirst: e.target.value });
        }
        else if (e.target.id === this.props.idSecond) {
            this.setState({ valueSecond: e.target.value });
        }
    }

    buildValue() {
        if (this.state.valueSecond === "") {
            this.setState(
                {
                    value: this.state.valueFirst
                });
        } else {
            this.setState(
                {
                    value: this.state.valueFirst + this.props.separator + this.state.valueSecond
                });
        }

    }

    renderInput() {
        return (
            <div className="form-group col-md-12">
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
                        />
                    </div>
                </div>
            </div>);
    }

    render() {
        return (this.renderInput());
    }

}