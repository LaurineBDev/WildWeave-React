
const Home = () => {
  return (
    <main className="home">
      <section className="mission" id='select'>
        <img src="./travail.png" alt="Personne de Wild Weave" />
        <div className="container">
         <h1>Notre mission :</h1>
         <p>Chez Wild Weave, nous croyons qu’un vêtement doit respecter celles et ceux qui le portent, mais aussi ceux qui le fabriquent  et la planète qui nous inspire. Nos tissus biologiques, nos ateliers locaux et nos choix durables façonnent chaque pièce, pour une mode plus juste et plus douce.</p>
        </div>
      </section>
      <div className='slogan'>
        <h1>Tissé par la nature, porté pour demain.</h1>
      </div>
      <section className="histoire" id="select">
        <img src="./equipe.png" alt="Photo de l'équipe" />
        <div className="container">
         <h1>Notre histoire</h1>
         <p>L’aventure Wild Weave est née d’un constat simple : l’industrie textile doit changer. De la première fibre à l’ultime emballage, nous tissons des liens entre nature, savoir-faire artisanal et style intemporel. Notre équipe réunit créateurs, artisans et rêveurs, tous animés par l’envie de redonner du sens à ce que nous portons.</p>
        </div>
      </section>
    </main>
  );
};

export default Home;