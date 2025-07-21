import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sSujet: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu peux envoyer formData à une API ou l'afficher dans la console
    console.log('Données du formulaire :', formData);
    alert('Formulaire envoyé !');
    // Réinitialiser si tu veux
    setFormData({
      name: '',
      email: '',
      sSujet: '',
      message: '',
    });
  };

  return (
    <main className="CForm">
      <div className="container-form">
        <form onSubmit={handleSubmit}>
          <label className="name">
            Nom
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className="mail">
            Email
            <input
              type="email"
              name="email"
              placeholder="Votre Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="sujet">
            Sujet
            <select
              name="sSujet"
              id="Select"
              value={formData.sSujet}
              onChange={handleChange}
              required
            >
              <option value="">-- Choisissez un sujet --</option>
              <option value="select-engagement">Engagements</option>
              <option value="select-collection">Collections</option>
              <option value="produits">Allergie</option>
              <option value="partenariat">Partenariat</option>
              <option value="remboursement">Remboursement</option>
              <option value="autre">Autre</option>
            </select>
          </label>

          <div className="message-container">
            <label htmlFor="message">Message</label>
            <input
              type="text"
              id="message"
              name="message"
              placeholder="Votre message ici"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="form-contact">Envoyer</button>
        </form>
      </div>
    </main>
  );
};

export default ContactForm;
