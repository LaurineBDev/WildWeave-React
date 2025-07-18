
const Engagement = () => {
  return (
    <main className='engagement'>
      <div className="top">
       <h1>Chez Wild Weave, chaque vêtement est pensé pour respecter l’humain et la nature. De la fibre au fil, de l’atelier à votre dressing, nous faisons le choix d’un impact positif, pas seulement minimal.</h1>
      </div>
      <section className="card">
        <img src="./production.png" alt="🌱 Production responsable Nous travaillons main dans la main avec des ateliers locaux qui garantissent des conditions de travail justes et transparentes. Chaque pièce est confectionnée avec soin, à petite échelle." />
        <img src="./matieres.png" alt="🧵 Matières durables Lin, coton bio, fibres recyclées : nous sélectionnons des matières naturelles, cultivées sans produits chimiques nocifs et certifiées par des labels reconnus. " />
        <img src="./transport.png" alt="🌍 Transport maîtrisé Notre production est locale pour limiter les trajets et l’empreinte carbone. Nos emballages sont recyclables et sans plastique superflu." />
        <img src="./gaspillage.png" alt="♻️ Zéro gaspillage Nous créons des collections en quantités limitées, sans surproduction, et explorons l’upcycling pour réinventer les chutes textiles." />
      </section>
    </main>
  );
};

export default Engagement;