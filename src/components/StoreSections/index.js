/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getUserStore} from "../../redux/actions/merchantStoreAction";
import {Table} from 'react-bootstrap'; 






// import {  Form, Button,Container } from "react-bootstrap";

// import { NavLink } from "react-router-dom";

class StoreSections extends React.Component {
 
  componentDidMount() {
    // this.props.getUserProfile();
    // this.props.getUserOrders();
    this.props.getUserStore("5e15a8308502af325d643db2");
    console.log(this.props.store);
    // console.log(this.props);
    // this.setState({ totalOrders: this.props.orders.length });
  }

  render() {
    return (

      
      <React.Fragment>
        <h2 className="store-name" >{this.props.store.name}</h2>

    <img className="store-img"src={this.props.store.imgUrl} alt="dachi img"/>
        
      
        <div >

    
        <Table style={{lineHeight:"7rem"}}>

        
                <thead>
                  <tr>
                    {/* <th>#</th>
                    <th>First Name</th> */}
                  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="table-header">ID</td>
                  <td >{this.props.store._id}</td>
                  
                  </tr>
                  <tr>
                    <td className="table-header">Status</td>
                    <td>{this.props.store.status}</td>
                
                  </tr>
                  <tr>
                    <td className="table-header">Country</td>
                    <td>{this.props.store?.address?.country}</td>
                  </tr>

                  <tr>
                    <td className="table-header">state</td>
                    <td>{this.props.store?.address?.state}</td>
                  </tr>

                  <tr>
                    <td className="table-header">street</td>
                    <td>{this.props.store?.address?.street}</td>
                  </tr>
 
                  <tr>
                    <td className="table-header">Store-Number</td>
                    <td>{this.props.store?.address?.no}</td>
                  </tr>

                  <tr>
                    <td className="table-header">Zip</td>
                    <td>{this.props.store?.address?.zip}</td>
                  </tr>
                  <tr >
                    <td className="table-header">Description</td>
                    <td>{this.props.store?.description}</td>
                  </tr>

                  <tr>
                    <td className="table-header">CreatedAt</td>
                    <td>{this.props.store?.createdAt}</td>
                  </tr>

                  <tr>
                    <td className="table-header">UpdatedAt</td>
                    <td>{this.props.store?.updatedAt}</td>
                  </tr>
                </tbody>
              </Table>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  store: state.store.store,
});

export default connect(mapStateToProps, {getUserStore})(StoreSections);
