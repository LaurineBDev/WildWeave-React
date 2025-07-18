
const ContactForm = () => {
  return (
    <main className='CForm'>


    <form action="form-contact">
        <label className="name">
          Nom : 
          <input type="text"  name="name" placeholder="Votre nom" required/>
        </label>
      </form> 
    
    </main>
  );
};

export default ContactForm;