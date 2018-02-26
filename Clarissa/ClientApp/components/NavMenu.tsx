import * as React from "react";
import { Link, NavLink } from "react-router-dom";

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <aside className="menu has-margin-left is-hidden-mobile">
            <p className="menu-label">
                Content
            </p>
            <ul className="menu-list">
                <li>
                 <NavLink to={"/Reading"} className="navbar-item" exact activeClassName="is-active">
                    <span>Reading</span>
                </NavLink></li>
            </ul>
            <p className="menu-label">
                Administration
                   </p>
            <ul className="menu-list">
                <li><a>Team Settings</a></li>
                <li>
                    <a className="is-active">Manage Your Team</a>
                    <ul>
                        <li><a>Members</a></li>
                        <li><a>Plugins</a></li>
                        <li><a>Add a member</a></li>
                    </ul>
                </li>
                <li><a>Invitations</a></li>
                <li><a>Cloud Storage Environment Settings</a></li>
                <li><a>Authentication</a></li>
            </ul>
            <p className="menu-label">
                Transactions
                   </p>
            <ul className="menu-list">
                <li><a>Payments</a></li>
                <li><a>Transfers</a></li>
                <li><a>Balance</a></li>
            </ul>
        </aside>;
    }
}
