import React from "react";
import {  Form} from "react-bootstrap";


// import { NavLink } from "react-router-dom";

class AdminMessages extends React.Component {
  render() {
    return (
    
        
     <React.Fragment>

           
            <div>
             <div>
             <table>
                    {/* <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone-Number</th>
                        <th>Number Of orders</th>
                    </tr> */}
                    <tr>
   
    
 
              
                <td>  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox"  />
  </Form.Group></td>
                <td>Username</td>
                <td></td>
                <td><span className="pend1">Lorem ipsum dolor sit amet, orci ipsum nam ultrices mauris, elit natoque sollicitudin non.</span></td>
                <td> 3:40am, 04/01/2020  </td>
                </tr>
                

                                <tr className="tr_color">
                  
                    
                
                  <td>   <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox"  />
  </Form.Group> </td>
                  <td>Username</td>
                  <td></td>
                  <td><span className="pend1">Lorem ipsum dolor sit amet, orci ipsum nam ultrices mauris, elit natoque sollicitudin non.  </span> </td>
                  <td>3:40am, 04/01/2020  </td>
                  </tr>
   
              </table>
           
           
            </div>
            </div>
    
         
     </React.Fragment>
     

     
    );
  }
}
export default AdminMessages;

