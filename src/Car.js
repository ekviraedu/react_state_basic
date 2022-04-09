import "./styles.css";
import React from "react";

export default class Car extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      make: "Maruti",
      model: "Brezza",
      color: "White"
    };
  }

  changeColor = () => {
    if (this.state.color === "Black") {
      this.setState({ color: "White" });
    } else {
      this.setState({ color: "Black" });
    }
  };

  changeModel = () => {
    if (this.state.model === "Brezza") {
      this.setState({ model: "SCross" });
    } else {
      this.setState({ model: "Brezza" });
    }
  };

  render() {
    return (
      <div>
        <h2>My {this.state.make} store</h2>

        <p>
          It is a {this.state.color}&nbsp;{this.state.model}.
        </p>

        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
        <br />
        <br />
        <button type="button" onClick={this.changeModel}>
          Change model
        </button>
      </div>
    );
  }
}
