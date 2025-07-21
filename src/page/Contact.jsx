const Contact = () => {
  return (
    <main className="contact">
      <div className="s-content">
        <section className="container-contact">
          <a className="toform" href="/contact/form">Contactez-nous</a>
          <p>
            Une question, une suggestion ou simplement envie de nous dire bonjour ?  
            L’équipe Wild Weave vous répondra dans les plus brefs délais.
          </p>
        </section>

        <section className="container-contact">
          <ul className="tel">
            <li>📧 hello@wildweave.fr</li>
            <li>🧵 Atelier Wild Weave, 123 rue du Lin, 75000 Paris</li>
            <li>📞 +12 3 45 67 89 10</li>
          </ul>
        </section>
      </div>

      {/* ========== Section follow ============ */}
      <section className="follow">
        <h1>👉 Suivez-nous :</h1>
        <ul>
          <li>
            <a href="#">
              <img className="logo" src="./logo/instagram.png" alt="Lien vers notre compte Instagram" />
            </a>
            <h1>@wildweave</h1>
          </li>
          <li>
            <a href="#">
              <img className="logo" src="./logo/facebook.png" alt="Lien vers notre compte Facebook" />
            </a>
            <h1>Wild Weave</h1>
          </li>
          <li>
            <a href="#">
              <img className="logo" src="./logo/printerest.png" alt="Lien vers notre compte Pinterest" />
            </a>
            <h1>Wild Weave</h1>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Contact;
