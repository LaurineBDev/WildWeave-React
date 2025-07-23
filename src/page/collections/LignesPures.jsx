import Slider from '../component/Slider';

const LignesPures = () => {
   const slider1 = ['/lines-pures/colombes.png', '/lines-pures/colombes-dos.png'];
   const slider2 = ['/lines-pures/chemise.png', '/lines-pures/chemise-dos.png'];
   const slider3 = ['/lines-pures/veste.png', '/lines-pures/veste-dos.png'];

  return (
    <main className='LignesPures'>
      <h1 className='intro-lignes'>
        La collection Lignes Pures incarne notre engagement pour une mode respectueuse et élégante. Chaque pièce est conçue pour durer, en utilisant des matières nobles et des techniques respectueuses de l’environnement. Offrez-vous un style naturel et intemporel, tout en faisant un choix responsable.
      </h1>
     <div className='content-slider'>
      <section className='slider-l'>
        <Slider images={slider1} />
        <h1>Sweat Natura</h1>
        <h2>Molleton bio, doux et chaud.</h2>
        <h3>100% coton bio, teinture naturelle.</h3>
        <button className='btn-slider'>Acheter maintenant</button>
      </section>

      <section className='slider-l'>
        <Slider images={slider2} />
        <h1>Chemise Lin Brut</h1>
        <h2>Élégante et respirante.</h2>
        <h3>Lin européen, coupe droite, mixte.</h3>
        <button className='btn-slider'>Acheter maintenant</button>
      </section>

      <section className='slider-l'>
        <Slider images={slider3} />
        <h1>Veste Wild</h1>
        <h2>Style casual chic.</h2>
        <h3>Coton recyclé, fabrication locale.</h3>
        <button className='btn-slider'>Acheter maintenant</button>
      </section>
      </div>
    </main>
  );
};

export default LignesPures;
