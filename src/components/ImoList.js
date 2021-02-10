import React, { Component } from "react";
import { connect } from "react-redux";

class ImoList extends Component {
  renderList() {
    return this.props.imo.map((imo) => {
      return (
        <div className="items">
          <button></button>
          <h1>{imo.agent.accountTyppe}</h1>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.imo);
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { imo: state.imo };
};

export default connect(mapStateToProps)(ImoList);
