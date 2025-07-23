import Slider from '../component/Slider';

const BriseSauvage = () => {
   const slider1 = ['/lines-pures/colombes.png', '/lines-pures/colombes-dos.png'];
   const slider2 = ['/lines-pures/chemise.png', '/lines-pures/chemise-dos.png'];
   const slider3 = ['/lines-pures/veste.png', '/lines-pures/veste-dos.png'];

  return (
    <main className='BriseSauvage'>
      <h1 className='intro-sauvage'>
        La collection Lignes Pures incarne notre engagement pour une mode respectueuse et élégante. Chaque pièce est conçue pour durer, en utilisant des matières nobles et des techniques respectueuses de l’environnement. Offrez-vous un style naturel et intemporel, tout en faisant un choix responsable.
      </h1>
     <div className='content-slider'>
      <section className='slider-b'>
        <Slider images={slider1} />
        <h1>Sweat Natura</h1>
        <h2>Molleton bio, doux et chaud.</h2>
        <h3>100% coton bio, teinture naturelle.</h3>
        <button className='btn-slider'>Acheter maintenant</button>
      </section>

      <section className='slider-b'>
        <Slider images={slider2} />
        <h1>Robe Légère</h1>
        <h2>Fluide et confortable.</h2>
        <h3>Lin biologique, coupe ample.</h3>
        <button className='btn-slider'>Acheter maintenant</button>
      </section>

      <section className='slider-b'>
        <Slider images={slider3} />
        <h1>Accessoires Naturels</h1>
        <h2>Faits à la main.</h2>
        <h3>Matériaux recyclés et durables.</h3>
        <button className='btn-slider'>Acheter maintenant</button>
      </section>
      </div>
    </main>
  );
};

export default BriseSauvage;
