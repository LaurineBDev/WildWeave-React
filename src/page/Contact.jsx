
const Contact = () => {
  return (
    <main className='contact'>
      <div className="s-content">
      <section className='container'>
        <a className="toform" href="#">Contactez-nous</a>
        <p>Une question, une suggestion, ou juste envie de nous dire bonjour ? L’équipe Wild Weave vous répondra dans les plus brefs délais.</p>
      </section>
      <section className="container">
        <ul className="tel">
          <li>📧 hello@wildweave.fr</li>
          <li>🧵 Atelier Wild Weave 123 Rue du Lin, 75000 Paris</li>
          <li>📞 +12 3 45 67 89 10</li>
        </ul>
      </section> 
      </div>
       <section className="follow">
        <ul>
         <li>👉 Suivez-nous :</li>
         <li><a href="#"><img className="logo" src="./logo/instagram.png" alt="Lien vers notre compte Instagram" /></a></li>
        </ul> 
     </section>
    </main>
  );
};

export default Contact;