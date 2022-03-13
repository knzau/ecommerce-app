// React 16.x code​​​​​​‌​​‌​‌‌​‌​​​​​​‌​​‌‌‌‌​‌‌ below
import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }
  render() {
    const { value } = this.state;
    return (
      <div>
            <p id="value">{this.state.value}</p>
             
                <button id="decrement" onClick={() => this.setState({value - 1})}>-</button>
      </div>
    );
  }
}
