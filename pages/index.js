import React, { useState } from 'react';


function Password() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const PasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const ConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (password !== confirmPassword) {
        setErrorMessage('Le password non corrispondono');
      } else if (password.length !== 8) {
        setErrorMessage('Password da rifare');
      } else {
        setErrorMessage('');
        console.log('Password corretta:', password);
      }
    };
  
    return (
      <div style={{ backgroundColor: 'black', alignItems: 'center' }}>
        <form onSubmit={handleSubmit} style={{ textAlign: 'center', color: 'white' }}>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={PasswordChange} />
          </div>
          <div>
            <label>Ripeti password:</label>
            <input type="password" value={confirmPassword} onChange={ConfirmPasswordChange} />
          </div>
          {errorMessage && <p>{errorMessage}</p>}
          <button type="submit">Invia</button>
        </form>
      </div>
    );
  }
  