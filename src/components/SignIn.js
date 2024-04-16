import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../assets/Guest.css'; 

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === 'a' && password === 'a') {
      history.push('/AdminHomePage');
    } else if(username === 'u' && password === 'u'){
      history.push('/DogOwnerHomePage');
    } else if(username === 'c' && password === 'c'){
      history.push('/CaretakerHomePage');
    }else {
      alert('Incorrect username or password');
    }
  };

  const handleForgotPassword = () => {
    history.push('/forgotpassword');
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleLogin} className="signin-form">
        <div className="form-inner">
          <div className="credentials-message">
            Note: The credentials provided below are temporary and for demonstration purposes only.
          </div>
          <p>Admin:
            Username: a Password: a
          </p>
          <p>
            User:
            Username: u Password: u
          </p>
          <p>
            Caretaker:
            Username: c Password: c
          </p>
          <label htmlFor="username">User Name:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="signin-button">SIGN IN</button>
        </div>
        <div className="signin-footer">
          <button type="button" onClick={handleForgotPassword}>Forgot Password?</button>
          <button type="button" onClick={() => history.push('/registration')}>SIGN UP</button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
