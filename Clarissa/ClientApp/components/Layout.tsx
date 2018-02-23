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
                <nav className="navbar" role="navigation">
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
                                        <a className="navbar-item">
                                            Components
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="columns">
                    <div className="column is-1">
                        <NavMenu />
                    </div>
                    <div className="column">
                        <div className="container">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>);
    }
}
