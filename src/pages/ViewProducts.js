import React from "react";
import SideNav from "../components/SideNav"
import Layout from "../components/Layout";
import {Table} from "react-bootstrap";
import { connect } from "react-redux";
import {getUserProducts} from "../redux/actions/merchantProductsAction";






// import { NavLink } from "react-router-dom";

class ViewProducts extends React.Component {

    componentDidMount() {
        // this.props.getUserProfile();
        // this.props.getUserOrders();
        this.props.getUserProducts("5e15a8308502af325d643db2");
        console.log(this.props.products);
        // console.log(this.props);
        // this.setState({ totalOrders: this.props.orders.length });
      }


  render() {
    return (
    
        
     <React.Fragment>
          <Layout>
          <SideNav />
           <div className ="App">
              <main id ="main">
                  <div className="main-wrapper">     
                    <div style={{backgroundColor:"white"}}>

                                    <hr className="store_hr"/>
             
￼
>
       
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
                                    <td >{this.props.products.id}</td>
                                    
                                    </tr>
                                    <tr>
                                        <td className="table-header">Availability</td>
                                        <td></td>

                                    </tr>
                                    <tr>
                                        <td className="table-header">Quantity</td>
                                        <td></td>
                                    </tr>

                                    <tr>
                                        <td className="table-header">Price</td>
                                        <td></td>
                                    </tr>

                                    <tr>
                                        <td className="table-header">Feature</td>
                                        <td></td>
                                    </tr>

                                    <tr>
                                        <td className="table-header">Specification</td>
                                        <td></td>
                                    </tr>

                                    <tr>
                                        <td className="table-header">Weight</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td className="table-header">Category</td>
                                        <td></td>
                                    </tr>
                                    <tr >
                                        <td className="table-header">Description</td>
                                        <td></td>
                                    </tr>

                                    <tr>
                                        <td className="table-header">CreatedAt</td>
                                        <td></td>
                                    </tr>

                                    <tr>
                                        <td className="table-header">UpdatedAt</td>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                    </Table>
                    

                    
                  
                    </div>
               
                  </div>
               
              </main>
       
          </div>
     
       </Layout>

     </React.Fragment>
     

     
    );
  }
}


const mapStateToProps = (state) => ({
    products: state.products.products,
  });
  
export default connect (mapStateToProps, {getUserProducts}) (ViewProducts);