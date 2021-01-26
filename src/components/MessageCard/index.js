import React from "react";

export default class MessageCard extends React.Component {
  render() {
    let details = this.props.detail;
    return (
      <React.Fragment>
        <div className="messagecard">
          <div className="messagecard__head">
            <span>{details.name}</span>
            <span>{`${details.time} ${details.date}`}</span>
          </div>
          <h3>{details.heading}</h3>
          <p>{details.desc}</p>
        </div>
      </React.Fragment>
    );
  }
}
