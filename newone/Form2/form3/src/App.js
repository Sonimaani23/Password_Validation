import React, { useState } from 'react';
import './App.css'

function App() {
  const [input, setInput] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: '' };

      switch (name) {
        case 'username':
          if (!value) {
            stateObj[name] = 'Please enter Username.';
          }
          break;

        case 'password':
          if (!value) {
            stateObj[name] = 'Please enter Password.';
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj['confirmPassword'] =
              'Password and Confirm Password does not match.';
          } else {
            stateObj['confirmPassword'] = input.confirmPassword
              ? ''
              : error.confirmPassword;
          }
          break;

        case 'confirmPassword':
          if (!value) {
            stateObj[name] = 'Please enter Confirm Password.';
          } else if (input.password && value !== input.password) {
            stateObj[name] = 'Password and Confirm Password does not match.';
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(input)
    setInput({ username: '',
    password: '',
    confirmPassword: ''})
    alert("Thank you " +input.username)
  }
  

  return (
    <div className="app">
      <h2>
        Password and Confirm Password validation
       
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={input.username}
          onChange={onInputChange}
          onBlur={validateInput}
          required
          onInvalid={(e) =>
            e.target.setCustomValidity("You missed name here")
          }
        ></input>
        {error.username && <span className="err">{error.username}</span>}

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={input.password}
          onChange={onInputChange}
          onBlur={validateInput}
        ></input>
        {error.password && <span className="err">{error.password}</span>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Enter Confirm Password"
          value={input.confirmPassword}
          onChange={onInputChange}
          onBlur={validateInput}
        ></input>
        {error.confirmPassword && (
          <span className="err">{error.confirmPassword}</span>
        )}
<br/>
        <button type='submit'>Submit</button>
      </form>
      <span>{}</span>
    </div>
  );
}

export default App;
