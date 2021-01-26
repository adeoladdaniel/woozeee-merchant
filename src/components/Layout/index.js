import React from "react";
import { Helmet } from "react-helmet";
import SkipToContent from "../A11y/SkipToContent";

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{`EasyMall - ${this.props.page}`}</title>
          <meta
            name="title"
            content="Easymall — easymall is a eCommerce platfom where you can coming and buy and sell"
          />
          <meta
            name="description"
            content="EasyMall is an Ecommerce platform that involves in online trading. We buy and sell across all verticals"
          ></meta>
          {/* <meta
            http-equiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          ></meta> */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="./apple-touch-icon.png"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <SkipToContent content="main"></SkipToContent>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Layout;
