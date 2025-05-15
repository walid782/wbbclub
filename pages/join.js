// src/pages/join.js
import React, { useState } from 'react';
import './join.css';

function Join() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    field: '',
    motivation: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Merci ${formData.name}, votre demande a été envoyée avec succès !`);
    // Here you can also send data to a server or reset the form
  };

  return (
    <div className="joincont">
      <h2>Rejoindre le Club CRIOT</h2>
      <form onSubmit={handleSubmit} className="joinfo">
        <label>Nom complet:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Filière:</label>
        <input type="text" name="field" value={formData.field} onChange={handleChange} required />

        <label>Pourquoi voulez-vous rejoindre le club ?</label>
        <textarea name="motivation" value={formData.motivation} onChange={handleChange} required></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Join;
