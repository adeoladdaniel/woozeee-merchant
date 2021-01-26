import React from "react";
import SideNav from "../components/SideNav"
import Layout from "../components/Layout";
import {Table} from "react-bootstrap";
import { connect } from "react-redux";
import {getUserProducts} from "../redux/actions/merchantProductsAction";
// import {TableItems} from '../components/OrderTable/TableItems';
import TableContent from '../components/OrderTable/TableContent';
import OrderTable from "../components/OrderTable";





// import { NavLink } from "react-router-dom";

class AdminProducts extends React.Component {

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

                 <a href="/create"> <button  className="cp_but"> Add Products</button></a>
                  <div style={{marginBottom: "5rem",marginTop:"8rem"}}><span style={{fontSize: "2rem"}}></span> 
                             <span>  <input placeholder="Products" className="order_form" /> </span>
                    <span>  <input type="number"  className="order_form" /></span>
                    <span>  <input placeholder="Availabilty"  className="order_form" />  </span>
                    <span>  <input placeholder="SKU"  className="order_form" />  </span>
                    <input placeholder="search" className="order_former"  /> <button className="search_but">Search</button>
                
        
                             </div>

     
                    <div style={{backgroundColor:"white"}}>

                                    <hr className="store_hr"/>
             
￼

       
<Table>
           {/* <thead>
            <tr>
            <th> </th>
              <th> Description</th>
              <th>Price</th>
              <th> Status</th>
              <th>SKU</th>
             
            </tr>
          </thead>  */}
          <tbody>
            {this.props.products.map((e, i) => {
              return (

                <TableContent cursor="pointer" key={i} img={e.gallery[0]} description={e.name} price={e.price} status={e.status} sku={e.sku} />

                // <TableContent key={i} url={e.url}/>
              );
            })}
          </tbody>
        </Table>
                    
   
<div class="pagination">
  <a href="/">&laquo;</a>
  <a href="/">1</a>
  <a className="active" href="/">2</a>
  <a href="/">3</a>
  <a href="/">4</a>
  <a href="/">5</a>
  <a href="/">6</a>
  <a href="/">&raquo;</a>
</div>
                  
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

export default connect (mapStateToProps, {getUserProducts}) (AdminProducts);
