import * as React from "react";
import { observer } from "mobx-react";
import { Link, NavLink } from "react-router-dom";

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
                        <p className="title is-4">{this.props.store.title}</p>
                    </div>
                </div>

                <div className="content">
                    {this.props.store.description}
                </div>
                <div className="level">
                    <div className="level-left">
                    </div>
                    <div className="level-right">
                        <NavLink activeClassName="is-active" className="button is-primary level-item" exact to={"/Reading/" + this.props.store.readingId}>
                            Open
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>;
    }
}