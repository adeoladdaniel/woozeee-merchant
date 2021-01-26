import React from "react";

export default class LatestOrderIten extends React.Component {
  render() {
    let orders = this.props.order;
    return (
      <React.Fragment>
        <tr>
          <td>
            <img src={orders.src} alt="Product" />
            <span>{orders.desc}</span>
          </td>
          <td>{`${orders.id}`}</td>
          <td>{orders.status}</td>
          <td>
            <button className="e-shadow">Details</button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}
