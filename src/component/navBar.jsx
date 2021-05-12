import React, { Component } from 'react';
import '../style/navBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav className="nav">
        <img className="nav__logo"
          src="https://lh3.googleusercontent.com/proxy/THG8zj60lZbKq_bvQ_qOogSjRWfuLZeAFbxiBJDCfq7-HbNSIlQ1Ov_x2u634ffeuYlFdde6Wb23q4vo3IWEjAqURTloKV6JXtUhIxP_C9Av6YOFuwnCHw"
          alt="Eeyore Image"
        />
        <input className="nav__search-area" type="text" />
        <button className="nav__search-button">
          <i className="fas fa-search"></i>
        </button>
      </nav>
    );
  }
}

export default NavBar;