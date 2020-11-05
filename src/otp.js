import React, { Component } from "react";

class Otp extends Component {
  state = {
    mobile: "",
    otp: "",
    sendOtp: false,
    displayForm: false,
  };

  async handleOtp() {
    if (this.state.mobile.length === 10) {
      // enter condition here
      await this.setState({
        sendOtp: true,
      });
    } else {
      await this.setState({
        sendOtp: false,
      });
    }
  }

  async handleCheckOtp() {
    if (this.state.otp) {
      // check the otp validation here
      await this.setState({
        displayForm: true,
      });
    } else {
      // if validation fails it won't display registration form
      await this.setState({
        displayForm: false,
      });
    }
  }

  render() {
    return (
      <div style={{ paddingTop: "100px" }}>
        <input
          value={this.state.mobile}
          placeholder="Enter mobile number"
          onChange={(e) =>
            this.setState({ mobile: e.target.value.slice(0, 10) })
          }
        />
        <br />
        <button onClick={() => this.handleOtp()}>Get OTP</button>
        <br />
        {this.state.sendOtp && (
          <div>
            <input
              value={this.state.otp}
              placeholder="Enter OTP"
              onChange={(e) => this.setState({ otp: e.target.value })}
            />
            <br />
            <button onClick={() => this.handleCheckOtp()}>Submit</button>
          </div>
        )}
        {this.state.displayForm && (
          <div>
            <p> when otp is validated registration form comes here</p>
          </div>
        )}
      </div>
    );
  }
}

export default Otp;
