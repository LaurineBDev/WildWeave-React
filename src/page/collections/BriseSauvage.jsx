import Slider from '../component/Slider';

const BriseSauvage = () => {
   const slider1 = ['/Brise-Sauvage/robe.png' , '/Brise-Sauvage/robe-dos.png'];
   const slider2 = ['/Brise-Sauvage/pant.png', '/Brise-Sauvage/pant-dos.png'];
   const slider3 = ['/Brise-Sauvage/short.png', '/Brise-Sauvage/short-dos.png'];

  return (
    <main className='BriseSauvage'>
      <h1 className='intro-sauvage'>
        La collection Lignes Pures incarne notre engagement pour une mode respectueuse et élégante. Chaque pièce est conçue pour durer, en utilisant des matières nobles et des techniques respectueuses de l’environnement. Offrez-vous un style naturel et intemporel, tout en faisant un choix responsable.
      </h1>
     <div className='content-slider'>
      <section className='slider-b'>
        <Slider images={slider1} />
        <h1>Robe Éole</h1>
        <h2>Robe longue fluide et légère.</h2>
        <h3>Lin biologique, coupe ample, coloris écru.</h3>
        <button className='btn-slider'>Acheter maintenant</button>
      </section>

      <section className='slider-b'>
        <Slider images={slider2} />
        <h1>Pantalon Zéphyr</h1>
        <h2>Pantalon ample et respirant.</h2>
        <h3>Coton bio, taille élastique, poches latérales.</h3>
        <button className='btn-slider'>Acheter maintenant</button>
      </section>

      <section className='slider-b'>
        <Slider images={slider3} />
        <h1>Short Sirocco</h1>
        <h2>Short confortable pour l’été.</h2>
        <h3>Coton bio, coupe unisexe, teinture naturelle.</h3>
        <button className='btn-slider'>Acheter maintenant</button>
      </section>
      </div>
    </main>
  );
};

export default BriseSauvage;
