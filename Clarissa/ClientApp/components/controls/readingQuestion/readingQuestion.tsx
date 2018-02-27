import * as React from "react";
import { observer } from "mobx-react";
import { Link, NavLink } from "react-router-dom";

@observer
export class ReadingQuestion extends React.Component<any, any> {
    public render() {
        return <div className="column is-half is-offset-one-quarter">
            <article className="message">
                <div className="message-body">
                   <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed in lacus eget</div>
                   <NavLink activeClassName="is-active" className="button" exact to={"/Reading/" + this.props.store.readingId}>
                   Tak
                   </NavLink>
                   <NavLink activeClassName="is-active" className="button" exact to={"/Reading/" + this.props.store.readingId}>
                   Nie
                   </NavLink>
                </div>
            </article>
        </div>;
    }
}