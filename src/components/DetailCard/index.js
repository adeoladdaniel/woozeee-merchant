import React from "react";
import { Row,Col } from 'react-bootstrap';

export default class BorderlessCard extends React.Component {
  render() {
   
    return (
      <React.Fragment>
        <div className="store_summary">
            <h3 className="text_color">
            Store Performance
            </h3>

            <hr className="store_hr"/>

            <div className="cater_head">
        
              <Row style={{marginTop:"-10px", justifyContent:"center"}}>
                <Col md={2}>
                 <div className="cater_1">
                 <div className="text_color">
                   <h3 style={{textAlign:"left"}}> NGN0 in </h3>
                   <p style={{textAlign:"left"}}>Successful Sales </p>
                   </div>
                  </div> 

                </Col>
                <Col md={2}>
                <div className="cater_2">
                <div className="text_color">
                <h3>82% </h3>
                <p> Product Quality</p>
                </div>
                  </div> 
                </Col>
                <Col md={2}>
                <div className="cater_3">
                  <div className="text_color">
                <h3>82%  </h3>
                <p>Delivery rate</p>
                </div>
                   </div> 
                </Col>
                <Col md={2}>
                <div className="cater_3">
                  <div className="text_color">
                <h3>94% </h3>
                <p>Communication </p>
                </div>
                   </div> 
                </Col>
                <Col md={2}>
                <div className="cater_3">
                  <div className="text_color">
                <h3 style={{textAlign:"right"}} >0  </h3>
                <p  style={{textAlign:"right",marginRight:"-2.9rem"}}>Suspension Count</p>
                </div>
                   </div> 
                </Col>
              </Row>
            </div>
        </div>
      </React.Fragment>
    );
  }
}
