import React from "react";
import SideNav from "../components/SideNav"
import CateTable from "../components/CateTable";
import Layout from "../components/Layout"



// import { NavLink } from "react-router-dom";

class AdminCategories extends React.Component {
  render() {
    return (
    
        
     <React.Fragment>
          <Layout>
          <SideNav />
           <div className ="App">
              <main id ="main">
                  <div className="main-wrapper">
                      <h3>Transaction History </h3>

                     

                      <div className="user_section">
                                        
                          
                               <div>  
                       
                            
                          <div style={{backgroundColor:"white", padding:"2rem"}}> <CateTable /></div>
                            
                            
                          
                            
                           


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
export default AdminCategories;