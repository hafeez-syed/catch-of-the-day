import React from "react";
import PropTypes from "prop-types";

const Login = ({ authenticate }) => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sing in to manage your store's inventory.</p>
    <button className="github" onClick={() => authenticate("Github")}>
      Github with Login
    </button>
    <button className="twitter" onClick={() => authenticate("Twitter")}>
      Github with Twitter
    </button>
    <button className="facebook" onClick={() => authenticate("Facebook")}>
      Github with Facebook
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;
