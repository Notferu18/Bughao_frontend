import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const VALID_EMAIL = "admin@gmail.com";
  const VALID_PASSWORD = "123";

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <header className="login-header">
          <h1 className="login-title">Bughao</h1>
          <p className="login-subtitle">Sign in to your account</p>
        </header>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="login-error">{error}</div>}
          
          <label className="login-label">Email Address</label>
          <input
            type="email"
            placeholder="admin@bughao.com"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />

          <label className="login-label">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />

          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;