
const ContactForm = () => {
  return (
    <main className='CForm'>
    <div className="container-form">
     <form action="form-contact">
         <label className="name">
           Nom
           <input type="text"  name="name" placeholder="Votre nom" required/>
         </label>
         <label className="mail">
           Email
           <input type="email"  name="email" placeholder="Votre Email" required/>
         </label>
         <label className="sujet">
           Sujet
           <select name="sSujet" id="Select">
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
           <input type="text" id="message" name="message" placeholder="Votre message ici" />
         </div>
          <button className="form-contact">Envoyer</button>
       </form> 
    </div>
    </main>
  );
};

export default ContactForm;