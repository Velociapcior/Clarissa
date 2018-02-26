import * as React from "react";
import { NavMenu } from "./NavMenu";
import { Link, NavLink } from "react-router-dom";

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return (
            <div>
                <nav className="navbar is-dark" role="navigation">
                    <div className="container">
                        <div className="navbar-brand">
                            <i className="fa fa-btc"></i>
                        </div>
                        <div className="navbar-menu">
                            <div className="navbar-start">

                                <a className="navbar-item" href="#">
                                    <span className="icon has-text-info">
                                        <i className="fa fa-facebook-square"></i>
                                    </span>
                                </a>

                                <a className="navbar-item" href="#">
                                    <span className="icon has-text-info">
                                        <i className="fa fa-twitter-square"></i>
                                    </span>
                                </a>
                                <a className="navbar-item" href="#">
                                    <span className="icon has-text-danger">
                                        <i className="fa fa-youtube-square"></i>
                                    </span>
                                </a>
                            </div>
                            <div className="navbar-end">
                                <div className="navbar-item has-dropdown is-hoverable">
                                    <a className="navbar-link">
                                        Docs
                                </a>
                                    <div className="navbar-dropdown">
                                        <NavLink to={"/Alert"} className="navbar-item" exact activeClassName="is-active">
                                            <span>Alert</span>
                                        </NavLink>
                                        <NavLink to={"/User"} className="navbar-item" exact activeClassName="is-active">
                                            User
                                        </NavLink>
                                        <NavLink to={"/ReadingsList"} className="navbar-item" exact activeClassName="is-active">
                                            <span>ReadingsList</span>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="columns">
                    <div className="column is-2">
                            <NavMenu />
                    </div>
                    <div className="column">
                        <div className="container is-fluid">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="container">
                        <div className="content has-text-centered">
                            <p>
                                <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                                is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>);
    }
}
