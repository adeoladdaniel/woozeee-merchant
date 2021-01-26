import React from "react";
import { Col,Row, Container} from "react-bootstrap";
import SideNav from "../components/SideNav";
import Select from 'react-select';
import { connect } from "react-redux";
 import {getUserStore} from "../redux/actions/merchantStoreAction";
 import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
 import {CKEditor  } from "@ckeditor/ckeditor5-react";

// import {FormControl,DropdownButton, InputGroup, Dropdown} from "react-bootstrap"


// import { NavLink } from "react-router-dom";

//   state ={ 

//   name:'',
//   email:'',
//   phone:'',


// }
// handleChange = (event) =>{

//   const target =event.target;
//   const {name, value}= target;

// this.setState({
//   [name]:value
// });
// }


const scaryAnimals = [
    { label: "Abia", value: 1 },
    { label: "Adamawa", value: 2 },
    { label: "Akwa Ibom", value: 3 },
    { label: "Anambra", value: 4 },
    { label: "Bauchi", value: 5 },
    { label: "Benue ", value: 7 },
    { label: "Borno ", value: 8 },
    { label: "Cross River", value: 9 },
    { label: " Delta", value: 10 }, 
    { label: " Edo ", value: 11},
    { label: " Ekiti ", value: 12 },
    { label: " FCT", value: 13 },
    { label: " Gombe", value: 14 },
    { label: "Imo ", value: 15 },
    { label: " Jigawa", value: 16 },
    { label: " Kaduna", value: 17 },
    { label: "Kano ", value: 18 },
    { label: "Katsina ", value: 19 },
    { label: "Kebbi", value: 20 },
    { label: "Kogi ", value: 21 },
    { label: "Kwara", value: 22 },
    { label: "Lagos", value: 23 },
    { label: " Nassarawa", value: 24 },
    { label: "Niger ", value:25 },
    { label: "Ogun", value:26 },
    { label: "Ondo", value: 27 }, 
    { label: "Osun", value: 29 },
    { label: "Oyo", value: 30 },
    { label: "Ibadan",value: 31 },
    { label: " Plateau", value: 32 },
    { label: " Rivers", value: 33},
    { label: " Sokoto", value: 34 },
    { label: " Jalingo", value: 35 },
    { label: "  Yobe ", value: 36 },
    { label: " Gusau", value: 37 },

  ];

  // state={
  //   profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  // }
  
  // imageHandler = (e) => {
  //   const reader = new FileReader();
  //   reader.onload = () =>{
  //     if(reader.readyState === 2){
  //       this.setState({profileImg: reader.result})
  //     }
  //   }
  //   reader.readAsDataURL(e.target.files[0])
  // };
  
class CreateProducts extends React.Component {



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
          <SideNav />
         <div className="cpheader">
             <div className="cp-header">
                    <h1> Create Product</h1>
             </div>
            <a href="/products"> <button className="cp-but"> Back to Products</button></a>
         </div>

         <div className="edit-box">
            <Container>
                <Row>
                    <Col md={6}>
                   
                      
                        <label> <strong className="edit-bold">Store Street</strong></label>

                      <input name="name" value={this.props.store.street}  placeholder="Enter store street" type="name" className="side-form1"/>

                      <br/>
                        <label> <strong className="edit-bold">Store City</strong></label>

                      <input name="name" value={this.props.store?.address?.city}  placeholder="Enter store name" type="name" className="side-form1"/>
                        <br/>
                        <br/>
                   
                      <Select options={scaryAnimals} />
                      <br/>
                      <Select options={scaryAnimals} />

                      <br/>
                        <label> <strong className="edit-bold">Store zip</strong></label>

                      <input name="name" value={this.props.store?.address?.zip}   placeholder="Enter store zip" type="name" className="side-form1"/>
	  
	  
                 
   
     
		
 
           </Col>
                    <Col md={6}>

                    <br/>
                        <label> <strong className="edit-bold">Product name </strong></label>

                      <input name="name"  placeholder="Enter store name" type="name" className="side-form1"/>


                      <br/>

                      <label> <strong className="edit-bold">Price</strong></label>

                      <input name="name"  placeholder="3500" type="number" className="side-form1"/>
                      <br/>
                      <br/>
                    

                      <label> <strong className="edit-bold">Product Features</strong></label>
                    <CKEditor
                     placeholder="opooooyy"
                      
                    editor={ClassicEditor}
                    onInit={editor=>{
                    
                  
                    }}
                    />
                    <br/>
                    <label> <strong className="edit-bold">Product Specification</strong></label>
                      <CKEditor
                     placeholder="opooooyy"
                      
                    editor={ClassicEditor}
                    onInit={editor=>{
                    
                  
                    }}
                    />


                      <br/>

                      <label> <strong className="edit-bold">Product Weight</strong></label>

                      <input name="name"  placeholder="3500" type="number" className="side-form1"/>
                      <br/>
                    
       
                      <br/>

                      <label> <strong className="edit-bold">Product Quantity</strong></label>

                      <input name="name"  placeholder="3500" type="number" className="side-form1"/>
                      <br/>
                   
                    </Col>
                </Row>
            </Container>
            </div>
          
     </React.Fragment>
     

     
    );
  }
}

const mapStateToProps = (state) => ({
  store: state.store.store,
});
export default connect (mapStateToProps, {getUserStore}) (CreateProducts);