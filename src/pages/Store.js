import React from "react"; 
import SideNav from "../components/SideNav";
import Layout from "../components/Layout";
import StoreSections from "../components/StoreSections";


// import {  Form,  } from "react-bootstrap";


     
const Header =[  
    {

date:'Jan 11, 2020',
Name:'MIDE SHOES',
payment:'POD',
delivery:'CANCLED',


},
]



// import { NavLink } from "react-router-dom";

class Store extends React.Component {
 
  render() {
    return (
    
        
     <React.Fragment>
          <Layout>
          <SideNav />
           <div className ="App">
              <main id ="main">
                  <div className="main-wrapper">
                 
                    
                    <div className="buttts">  
                      
                <a href="/products">    <button className="viewbut">
                        View Products
                    </button></a>

                <a href="/edit">    <button className="editbut">
                     Edit Stores
                    </button></a>
                    </div>
                    {Header.map((i) => {
                        return (
                            <h3 key={i} className="ma">{Header.Name}</h3>

                        );
                        })}

                        <div className="store-table">
                        <StoreSections/>
                        </div>
                                                
                                      </div>
                                  
                                  </main>
                          
                              </div>
     
       </Layout>

     </React.Fragment>
     

     
    );
  }
}

// const mapStateToProps = (state) => ({
//   orders: state.order.orders,
// });

export default Store;