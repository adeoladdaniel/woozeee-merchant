import React from "react";
import { NavLink } from "react-router-dom";

class SideNav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <aside>
          <div className="sidenav">
            <p className="text-right pr-5 close-wrap">
              <span
                className="fas fa-times close-nav"
                onClick={this.props.closeWindow}
              ></span>
            </p>
            <nav>
              <div className="logo">
                <img
                  src="./asset/img/woozee.png"
                  alt="Brand Logo Stop this shit you are doing"
                />
              </div>
              <div className="email">
                <p className="text-center text-white">akweSamuel@gmail.com</p>
              </div>
              <ul className="navigation">
                <li>
                  <NavLink exact to="/" aria-label="Dashboard page">
                    <span className="fas fa-th-large"></span>
                    <span>Dashboard</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink exact to="/store" aria-label="Dashboard page">
                    <span className="fas fa-users"></span>
                    <span>Store</span>
                  </NavLink>
                </li> 

                <li>
                  <NavLink exact to="/products" aria-label="Products page">
                    <span className="fas fa-box"></span>
                    <span>products</span>
                  </NavLink>
                </li>

                     <li>
                  <NavLink exact to="/orders" aria-label="Orders page">
                    <span className="far fa-bookmark"></span>
                    <span>orders</span>
                  </NavLink>
                </li>  
                <li>
                <NavLink exact to="/categories" aria-label="Categories page">
                    <span className="fas fa-shapes"></span>
                    <span>transaction</span>
                  </NavLink>
                </li>
     
              </ul>
              <div className="user-info">
                <img src="./asset/img/user-img.png" alt="User profile" />
                <p>Akwe Samuel</p>
              </div>
            </nav>
          </div>
        </aside>
      </React.Fragment>
    );
  }
}
export default SideNav;
