import React from "react";

export default class Claculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operand1: "",
      operand2: "",
      operator: null,
      result: null,
      screenData: ""
    };
  }

  onClick = e => {
    const newState = { ...this.state };

    switch (e.target.value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        newState.operand1 =
          newState.operand1 === ""
            ? e.target.value
            : newState.operand1 + e.target.value;
        newState.operand2 =
          newState.operator === ""
            ? e.target.value
            : newState.operand2 + e.target.value;
        newState.screenData += e.target.value;

        break;
      case "+":
      case "-":
      case "*":
      case "/":
        newState.screenData =
          newState.operand1 && newState.operand2
            ? `${newState.operand1} ${e.target.value} ${newState.operand2}`
            : newState.operand1
            ? `${newState.operand1} ${e.target.value}`
            : "";
        newState.operator = e.target.value;

        break;
      case "=":
        newState.result =
          newState.operator === "+"
            ? newState.operand1 + newState.operand2
            : newState.operator === "-"
            ? newState.operand1 - newState.operand2
            : newState.operator === "*"
            ? newState.operand1 * newState.operand2
            : newState.operator === "/"
            ? newState.operand1 / newState.operand2
            : newState.result;
        newState.screenData = newState.result;
        break;
      default:
    }

    this.setState(newState);
  };

  render() {
    return (
      <div>
        <h1>My calcu</h1>
        <textarea value={this.state.screenData} />
        <table>
          <tbody>
            <tr>
              <th>
                <button name="" value="1" onClick={this.onClick}>
                  1
                </button>
              </th>
              <th>
                <button name="" value="2" onClick={this.onClick}>
                  2
                </button>
              </th>
              <th>
                <button name="" value="3" onClick={this.onClick}>
                  3
                </button>
              </th>
              <th>
                <button name="" value="+" onClick={this.onClick}>
                  +
                </button>
              </th>
            </tr>
            <tr>
              <th>
                <button name="" value="4" onClick={this.onClick}>
                  4
                </button>
              </th>
              <th>
                <button name="" value="5" onClick={this.onClick}>
                  5
                </button>
              </th>
              <th>
                <button name="" value="6" onClick={this.onClick}>
                  6
                </button>
              </th>

              <th>
                <button name="" value="-" onClick={this.onClick}>
                  -
                </button>
              </th>
            </tr>
            <tr>
              <th>
                <button name="" value="7" onClick={this.onClick}>
                  7
                </button>
              </th>
              <th>
                <button name="" value="8" onClick={this.onClick}>
                  8
                </button>
              </th>
              <th>
                <button name="" value="9" onClick={this.onClick}>
                  9
                </button>
              </th>
              <th>
                <button name="" value="*" onClick={this.onClick}>
                  *
                </button>
              </th>
            </tr>
            <tr>
              <th>
                <button name="" value="0" onClick={this.onClick}>
                  0
                </button>
              </th>
              <th>
                <button name="" value="B" onClick={this.onClick}>
                  Back
                </button>
              </th>
              <th>
                <button name="" value="=" onClick={this.onClick}>
                  =
                </button>
              </th>
              <th>
                <button name="" value="/" onClick={this.onClick}>
                  /
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
