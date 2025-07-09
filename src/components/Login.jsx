import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Minimum 6 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    setIsLoading(true);

    // Mock user data
    const mockUser = {
        email: "stanley@gmail.com",
        password: "123456",
        name: "Stanley",
        phone: "+91 9876543210",
        bio: "Passionate learner & library explorer.",
        joinedDate: "2023-05-15"
    };

    // Simulate server response delay
    setTimeout(() => {
        if (
        formData.email === mockUser.email &&
        formData.password === mockUser.password
        ) {
        onLogin(mockUser);  // Store user state in parent
        navigate('/');
        } else {
        setErrors({ password: 'Invalid email or password' });
        }
        setIsLoading(false);
    }, 1000);
    };


  return (
    <div className="login-page">
      <div className="login-left">
        <div className="form-container">
          <h1>Welcome Back 👋</h1>
          <p className="subtitle">Sign in to your StudyFind account</p>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="stanley@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'error' : ''}
              />
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>

            <div className="options">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <p className="footer">
            Don’t have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>

      <div className="login-right">
        <img src="/assets/login-illustration.png" alt="Study Illustration" />
      </div>
    </div>
  );
};

export default Login;
