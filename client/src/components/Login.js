import React from "react";
import { axiosAuth } from "../utils/axiosAuth";
import Loader from "react-loader-spinner";

class Login extends React.Component {
  state = {
    user: {
      username: "",
      password: "",
    },
    isLoading: false,
  };

  handleChanges = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    this.setState({
      isLoading: true,
    });
    axiosAuth()
      .post(`/api/login`, this.state.credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch((err) => {
        console.log(err, "Aww shyt! Something went wrong!");
      });
  };

  render() {
    return (
      <div>
        <h1>Welcome to the Bubble App!</h1>
        <p>Please log in.</p>
        <form onSubmit={this.login}>
          <label htmlFor="username">
            Username:
            <input
              id="username"
              type="text"
              name="username"
              onChange={this.handleChanges}
              value={this.state.user.username}
            />
          </label>

          <label htmlFor="password">
            Password:
            <input
              id="password"
              type="text"
              name="password"
              onChange={this.handleChanges}
              value={this.state.user.password}
            />
          </label>

          <button>Submit</button>
          {this.state.isLoading && (
            <div>
              <Loader type="Grid" color="#00BFFF" height={80} width={80} />
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default Login;
