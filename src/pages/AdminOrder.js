import React from "react";
import SideNav from "../components/SideNav"
// import OrderTable from "../components/OrderTable"
import Layout from "../components/Layout"
import {  Form, Table  } from "react-bootstrap";
import {TableItems} from '../components/OrderTable/TableItems'
import TableContent from '../components/OrderTable/TableContent'


// import { NavLink } from "react-router-dom";

class AdminUser extends React.Component {
  render() {
    return (
    
        
     <React.Fragment>
          <Layout>
          <SideNav />
           <div className ="App">
              <main id ="main">
                  <div className="main-wrapper">
                 
                      <h3 style={{marginBottom:"5rem" }}>Order <span  className="back_to_port"> 
                      
                      <Form.Control  className="order_form" as="select">
                      <option> Filter: Date Range </option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                      
                      
                       </span></h3>

                      <div style={{backgroundColor:"white", marginTop:"4rem", paddingTop:"3rem"}}>
                      <div style={{marginBottom: "5rem"}}> 
        
                            <span className="order_text"> <button className="order_button1">ALL</button>  </span>
                            <span className="order_text"><button className="order_button">  NEW </button> </span>
                            <span className="order_text"> <button className="order_button"> SHIPPED </button> </span>
                            <span className="order_text"> <button className="order_button"> DILIVERED</button> </span>  
                              <span className="order_text"><button className="order_button"> RETURNED</button> </span>
                              <span className="order_text"> <button className="order_button"> ARBITRATION </button> </span>
                              <span className="order_text"><button className="order_button">CANCLED</button>  </span>
                                </div>

                            <div style={{marginBottom: "5rem",marginLeft:"37rem"}}> 
                            
                            <span> 
                    
                    <Form.Control  className="order_form" as="select">
                      <option> Filter: Date Range </option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                    </span> <span> 
                    
                    <Form.Control  className="order_form" as="select">
                      <option>Filter: Date Range </option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                    </span>
                            
                                      <span> 
                    
                                          <Form.Control  className="order_form" as="select">
                                            <option> Filter: Date Range</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                          </Form.Control>
                      </span>
                                          </div>
                                        
                                          {/* <Table responnsive>
          <thead>
            <tr>
              <th> Order</th>
              <th>Date</th>
              <th> Amount</th>
              <th>Payment</th>
              <th>Delivery</th>
            </tr>
          </thead>
          <tbody>
            {TableItems.map((e, i) => {
              return (
                <TableContent key={i} order={e.order} date={e.date} amount={e.amount} payment={e.payment} delivery={e.delivery}/>

                // <TableContent key={i} url={e.url}/>
              );
            })}
          </tbody>
        </Table> */}






















                              
                              
                                    <hr className="store_hr"/>
{/*                                   
                                    <OrderTable/>
                                   */}
                                          </div>
                                     
                                      </div>
                                  
                                  </main>
                          
                              </div>
     
       </Layout>

     </React.Fragment>
     

     
    );
  }
}
export default AdminUser;