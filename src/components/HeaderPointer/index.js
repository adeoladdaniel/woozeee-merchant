import React from "react";

class HeaderPointer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="d-flex flex-wrap justify-content-between">
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default HeaderPointer;
