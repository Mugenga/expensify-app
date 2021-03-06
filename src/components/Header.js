import React from "react";
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h2>Expensify</h2>
        <NavLink to="/" activeClassName="is-active" exact={true}>Homepage</NavLink> 
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink> 
        <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink> 
    </header>
);

export default Header;