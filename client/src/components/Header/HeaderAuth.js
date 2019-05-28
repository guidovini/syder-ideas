import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
  return (
    <div className="navbar-end">
      <NavLink
        to="/dashboard"
        activeClassName="navbar-item is-active"
        className="navbar-item"
      >
        <span className="icon">
          <i className="fas fa-home" />
        </span>
        <span>Dashboard</span>
      </NavLink>

      <NavLink
        to="/categories"
        activeClassName="navbar-item is-active"
        className="navbar-item"
      >
        <span className="icon">
          <i className="fas fa-book" />
        </span>
        <span>Categories</span>
      </NavLink>

      <NavLink
        to="/help"
        activeClassName="navbar-item is-active"
        className="navbar-item"
      >
        <span className="icon">
          <i className="far fa-question-circle" />
        </span>
        <span>Help</span>
      </NavLink>

      <NavLink
        to="/profile"
        activeClassName="navbar-item is-active"
        className="navbar-item"
      >
        <span className="icon">
          <i className="fas fa-user" />
        </span>
        <span>Profile</span>
      </NavLink>

      <NavLink
        to="/logout"
        activeClassName="navbar-item is-active"
        className="navbar-item"
      >
        <div className="button is-danger is-outlined">
          <span className="icon">
            <i className="fas fa-sign-out-alt" />
          </span>
          <span>Log Out</span>
        </div>
      </NavLink>
    </div>
  );
};
