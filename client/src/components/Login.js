import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChanges = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch((err) => {
        console.log(err, "Aww shyt! Something went wrong!");
      });
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <p>Please log in.</p>
      <form onSubmit={login}>
        <label htmlFor="username">
          Username:
          <input
            id="username"
            type="text"
            name="username"
            onChange={handleChanges}
            value={credentials.username}
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            id="password"
            type="text"
            name="password"
            onChange={handleChanges}
            value={credentials.password}
          />
        </label>

        <button>Submit</button>
        {/* {this.state.isLoading && (
            <div>
              <Loader type="Grid" color="#00BFFF" height={80} width={80} />
            </div>
          )} */}
      </form>
    </div>
  );
};

export default Login;
