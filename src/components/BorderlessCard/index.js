import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { getUserOrders } from "../../redux/actions/merchantOrderAction";
import { getUserProfile } from "../../redux/actions/merchantProfileAction";

class BorderlessCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalOrders: 0,
    };
  }
  componentDidMount() {
    this.props.getUserProfile();
    this.props.getUserOrders();
    // console.log(this.props);
    // this.setState({ totalOrders: this.props.orders.length });
  }

  render() {
    return (
      <React.Fragment>
        <div className="store_summary">
          <h3 className="text_color">Store Summary Store ID:00001</h3>

          <hr className="store_hr" />

          <div className="cater_head">
            <Row style={{ marginTop: "-10px" }}>
              <Col md={4}>
                <div className="cater_1">
                  <div className="text_color">
                    <h3> NGN0 in </h3>
                    <p>ESCOW</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="cater_2">
                  <div className="text_color">
                    <h3>{this.props.orders.length}</h3>
                    <p>orders</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="cater_3">
                  <div className="text_color">
                    <h3>2 years 8 months </h3>
                    <p>Selling on EasyMore</p>
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

BorderlessCard.propTypes = {
  getUserOrders: PropTypes.func.isRequired,
  orders: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  orders: state.order.orders,
});

export default connect(mapStateToProps, { getUserOrders, getUserProfile })(
  BorderlessCard
);
