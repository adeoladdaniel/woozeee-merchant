import React from "react";
import Layout from "../components/Layout";
import { Row,Col } from 'react-bootstrap';
import SideNav from "../components/SideNav";
import { Link } from "react-router-dom";
import HeaderPointer from "../components/HeaderPointer";
import { Line } from "react-chartjs-2";
import BorderlessCard from "../components/BorderlessCard";
import DetailCard from "../components/DetailCard";
import UserTable from "../components/UserTable";


class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SideView: false,
      activeRevenueTab: "annualy",
    };
  }

  componentDidMount() {
    if (window.innerWidth > 900) {
      this.setState({ SideView: true });
    } else {
    }
  }

  openSideNav = () => {
    this.setState({ SideView: true });
  };

  closeSideNav = () => {
    this.setState({ SideView: false });
  };

  changeGraphTab = (e) => {
    if (e.target.classList.contains("revenue-categories--card")) {
      let elemId = e.target.children[0].innerHTML;
      this.setState({ activeRevenueTab: elemId });
    } else {
      let childelem = e.currentTarget.closest(".revenue-categories--card")
        .children[0].innerHTML;
      this.setState({ activeRevenueTab: childelem });
    }
  };

  render() {
    const data = {
      labels: [
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2016",
        "2017",
        "2018",
        "2019",
      ],
      datasets: [
        {
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(173, 73, 210, 1)",
          borderColor: " #033e7e",
          borderCapStyle: "butt",
          borderDash: [],
          // showLine: false,
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: " #033e7e",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 5,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(173, 73, 210, 1)",
          pointHoverBorderColor: "rgba(173, 73, 210, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [
            100000,
            200000,
            300000,
            400000,
            500000,
            550000,
            580000,
            600000,
            650000,
            600000,
            700000,
            750000,
            700000,
            800000,
            500000,
            900000,
            1000000,
            600000,
          ],
        },
      ],
    };

    let options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              min: 0,
              padding: 20,

              max: 1000000,
            },
            gridLines: {
              drawBorder: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              padding: 15,
            },
          },
        ],
      },
      responsive: true,
      // showLines: false,
      legend: {
        display: false,
        position: "top",
      },
    };
    return (
      <React.Fragment>
        <Layout page="Admin Dashboard">
          <div id="page-wrapper">
            {this.state.SideView && <SideNav closeWindow={this.closeSideNav} />}
            <main id="main">
              <div className="main-wrapper">
                <span
                  className="fas fa-bars hamburger"
                  onClick={this.openSideNav}
                ></span>
                <HeaderPointer>
                  <div>
                    <p className="headerpointer__head">Dashboard</p>
                  </div>
                  <div>
                    <Link to="/" className="headerpointer__back">
                    <button className="merch">  Back to Portal </button>
                    </Link>
                  </div>
                </HeaderPointer>


                <BorderlessCard/>

                <DetailCard/>
                <div className="adminrevenue">
                  <h2 style={{color:" #033e7e"}}>Revenue</h2>
                  <Row>
                 <Col md={8}>
                  <div className="revenue-graph mt-5">
                  <Line data={data} options={options}></Line>
                  </div>
                  </Col>
                  <Col md={4}>
                  <UserTable/>
                  </Col>
                  </Row>
                </div>
                <div className="products-messages">
                  
                  
                </div>
                
              </div>
            </main>
          </div>
        </Layout>
      </React.Fragment>
    );
  }
}

export default AdminDashboard;
