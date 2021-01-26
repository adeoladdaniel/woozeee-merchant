import React from "react";

export default class BestProducts extends React.Component {
  render() {
    let products = this.props.product;
    return (
      <React.Fragment>
        <tr>
          <td>
            <img src={products.src} alt="Product" />
            <span>{products.detail}</span>
          </td>
          <td>{`£${products.price}`}</td>
          <td>{products.order}</td>
          <td>{products.revenue}</td>
        </tr>
      </React.Fragment>
    );
  }
}
