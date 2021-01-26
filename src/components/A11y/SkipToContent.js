import React from "react";

class SkipToContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <a
          className="skip"
          href={"#" + (this.props.content || "main")}
          aria-label="skip to the main content"
        >
          Skip to Content
        </a>
      </React.Fragment>
    );
  }
}

export default SkipToContent;
