/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Button} from "react-bootstrap";
import { connect } from "react-redux";
import {getUserProducts} from "../../redux/actions/merchantProductsAction";

// import {  Form, Button,Container } from "react-bootstrap";


// import { NavLink } from "react-router-dom";

class AdminOrder extends React.Component {
  
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
       
             <div>
             <table>
                    {/* <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone-Number</th>
                        <th>Number Of orders</th>
                    </tr> */}
                    <tr>
   
    
 
              
                  <td style={{paddingRight:"rem",paddingLeft:"rem"}}></td>
                <td style={{paddingRight:"4rem"}}>Jan 11, 2020<br/><br/>
                  <span> <img className="order_img" src="./img/Rectangle 28.png" /></span></td>
                <td style={{paddingRight:"4rem"}}> N15,728</td>
                <td style={{paddingRight:"4rem"}}> PoD</td>
                <td style={{paddingRight:"4rem"}}><Button className="order_but"> CANCELLED </Button></td>
                </tr>
                
 
                                <tr className="tr_color">
                  
                    
                                <td> <span><b>6dhrf0ejr7w4tyd - 1 Item</b></span> <br/>  <br/>  <br/> ADEOLA DANIEL</td>
                <td style={{paddingRight:"4rem"}}>Jan 11, 2020<br/><br/>
                  <span> <img className="order_img" src="./img/Rectangle 28.png" /></span></td>
                <td style={{paddingRight:"4rem"}}> N15,728</td>
                <td style={{paddingRight:"4rem"}}> PoD</td>
                <td style={{paddingRight:"4rem"}}><Button className="order_but1"> SUCESSFUL </Button></td>
                  </tr>

   <tr>
   
    
 
              
   <td style={{paddingRight:"rem",paddingLeft:"rem"}}> <span><b>6dhrf0ejr7w4tyd - 1 Item</b></span> <br/>  <br/>  <br/> ADEOLA DANIEL</td>
   <td style={{paddingRight:"4rem"}}>Jan 11, 2020<br/><br/>
     <span> <img className="order_img" src="./img/Rectangle 28.png" /></span></td>
   <td style={{paddingRight:"4rem"}}> N15,728</td>
   <td style={{paddingRight:"4rem"}}> PoD</td>
   <td style={{paddingRight:"4rem"}}><Button className="order_but"> CANCELLED </Button></td>
   </tr>
   <tr>
   
    
 
              
   <td style={{paddingRight:"rem",paddingLeft:"rem"}}></td>
   <td style={{paddingRight:"4rem"}}>Jan 11, 2020<br/><br/>
     <span> <img className="order_img" src="./img/Rectangle 28.png" /></span></td>
   <td style={{paddingRight:"4rem"}}> N15,728</td>
   <td style={{paddingRight:"4rem"}}> PoD</td>
   <td><Button className="order_but2"> PENDING </Button></td>
   </tr> 
              </table>
           
            </div>

    
         
     </React.Fragment>
     

     
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
});

export default connect (mapStateToProps, {getUserProducts}) (AdminOrder);