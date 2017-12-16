import * as React from "react";
import { Link, NavLink } from "react-router-dom";

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className="main-nav">
                <div className="navbar navbar-inverse">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to={ "/" }>Clarissa</Link>
                </div>
                <div className="clearfix"></div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li>
                            <NavLink to={ "/" } exact activeClassName="active">
                                <span className="glyphicon glyphicon-home"></span> Home
                            </NavLink>
                            <NavLink to={"/Alert"} exact activeClassName="active">
                                <span className="glyphicon glyphicon-home"></span> Alert
                            </NavLink>
                            <NavLink to={"/User"} exact activeClassName="active">
                                <span className="glyphicon glyphicon-user"></span> Uzytkownik
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}
