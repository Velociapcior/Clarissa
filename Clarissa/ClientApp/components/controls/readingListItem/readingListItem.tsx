import * as React from "react";
import { observer } from "mobx-react";

@observer
export class ReadingListItem extends React.Component<any, any> {
    public render() {
        return <div id={this.props.store.id} className="card">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src={this.props.store.logoUrl} alt="Placeholder image" />
                            </figure>
                        </div>
                            <div className="media-content">
                        <p className="title is-5">{this.props.store.title}</p>
                        </div>
                    </div>

                    <div className="content">
                    {this.props.store.description}
                    </div>
                </div>
            </div>;
    }
}