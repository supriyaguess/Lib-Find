import React, { useState } from 'react';
import './Profile.css';

function Profile({ user, onUpdateUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || 'Alex Johnson',
    email: user?.email || 'user@example.com',
    phone: user?.phone || '+1 555-123-4567',
    bio: user?.bio || 'Avid learner and book enthusiast. Always looking for the next quiet spot to dive into a new subject.'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditToggle = () => {
    if (isEditing) {
      // Save changes
      onUpdateUser(formData);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || 'Alex Johnson',
      email: user?.email || 'user@example.com',
      phone: user?.phone || '+1 555-123-4567',
      bio: user?.bio || 'Avid learner and book enthusiast. Always looking for the next quiet spot to dive into a new subject.'
    });
    setIsEditing(false);
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n.charAt(0)).join('').toUpperCase();
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Your Profile</h1>
        <p>Manage your account settings and preferences.</p>
      </div>

      <div className="profile-card">
        <div className="profile-top">
          <div className="profile-avatar">
            {getInitials(formData.name)}
          </div>
          <div className="profile-info">
            <h2>{formData.name}</h2>
            <p className="join-date">Joined on 5/15/2023</p>
          </div>
          <button className="edit-profile-btn" onClick={handleEditToggle}>
            {isEditing ? 'Save Profile' : 'Edit Profile'}
          </button>
        </div>

        <div className="profile-details">
          <div className="detail-group">
            <label>Full Name</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="profile-input"
              />
            ) : (
              <div className="detail-value">
                <span className="detail-icon">👤</span>
                {formData.name}
              </div>
            )}
          </div>

          <div className="detail-group">
            <label>Email Address</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="profile-input"
              />
            ) : (
              <div className="detail-value">
                <span className="detail-icon">📧</span>
                {formData.email}
              </div>
            )}
          </div>

          <div className="detail-group">
            <label>Phone Number</label>
            {isEditing ? (
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="profile-input"
              />
            ) : (
              <div className="detail-value">
                <span className="detail-icon">📞</span>
                {formData.phone}
              </div>
            )}
          </div>

          <div className="detail-group">
            <label>Bio</label>
            {isEditing ? (
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                className="profile-textarea"
                rows="3"
              />
            ) : (
              <div className="detail-value bio-text">
                {formData.bio}
              </div>
            )}
          </div>
        </div>

        {isEditing && (
          <div className="edit-actions">
            <button className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
            <button className="save-btn" onClick={handleEditToggle}>
              Save Changes
            </button>
          </div>
        )}
      </div>

      <div className="account-actions">
        <h3>Account Actions</h3>
        <div className="action-item">
          <span className="action-icon">📖</span>
          <span>My Bookmarked Libraries</span>
        </div>
        <div className="action-item">
          <span className="action-icon">⚙️</span>
          <span>Account Settings</span>
        </div>
        <div className="action-item">
          <span className="action-icon">🔒</span>
          <span>Security & Password</span>
        </div>
        <div className="action-item danger">
          <span className="action-icon">🚪</span>
          <span>Logout</span>
        </div>
      </div>

      {showNotification && (
        <div className="notification">
          <span className="notification-icon">✅</span>
          Profile updated successfully!
        </div>
      )}
    </div>
  );
}

export default Profile;