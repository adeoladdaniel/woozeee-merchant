import React from "react";


class TableContent extends React.Component {
  render() {
    return (
      <React.Fragment>
  <a href={`/view?id=${this.props.itemId}`} style={{color:"black"}}><tr style={{padding:" 0rem 1rem 1rem 1rem",width:"29%"}} >
          {/* <td>{this.props.i + 1}</td> */}
          <td><img  src={this.props.img} className="product-img" alt="product"  /></td>
          <td style={{padding:"1rem",width:"29%"}}>{this.props.description} </td>
          <td>{this.props.price}</td>
          <td>{this.props.status}</td>
          <td>{this.props.sku}</td>

   </tr>
   </a>

 
      </React.Fragment>
    );
  }
}
export default TableContent;