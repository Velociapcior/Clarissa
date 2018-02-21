import * as React from "react";
import { observer } from "mobx-react";

@observer
export class SubmitButton extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    handleSubmit(e: any) {
        e.preventDefault();

    }

    render() {
        return (
            <div>
                <button
                    className="btn btn-primary btn-block btn-lg"
                    onClick={(e: any) => this.handleSubmit(e)}
                    type="submit"
                    disabled={!this.props.store.canSubmit}>
                    {this.props.text}
                </button>
            </div>);
    }
}