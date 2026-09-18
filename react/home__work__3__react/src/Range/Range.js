import React from "react";
import "./Range.css"
class Range extends React.Component {
    state = {
        widht: 50,
        height: 50
    }
    size = (event) => {
        this.setState(
            {
                widht: Number(event.target.value),
                height: Number(event.target.value)
            }
        )
    }
  render() {
  return (
    <div className="range-wrapper">
      <p>width: {this.state.widht}</p>
      <p>height: {this.state.height}</p>
      <input
        className="range"
        type="range"
        onInput={this.size}
        min="0"
        max="500"
      />
      <div
        className="square"
        style={{
          width: this.state.widht,
          height: this.state.height,
          background: "red",
        }}
      ></div>
    </div>
  );
}

}
export default Range;