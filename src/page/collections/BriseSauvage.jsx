import Slider from '../component/Slider';

const BriseSauvage = () => {
   const slider1 = ['/Brise-Sauvage/robe.png' , '/Brise-Sauvage/robe-dos.png'];
   const slider2 = ['/Brise-Sauvage/pant.png', '/Brise-Sauvage/pant-dos.png'];
   const slider3 = ['/Brise-Sauvage/short.png', '/Brise-Sauvage/short-dos.png'];

  return (
    <main className='BriseSauvage'>
      <h1 className='intro-sauvage'>
        Découvrez Brise Sauvage, une collection qui célèbre la légèreté et la simplicité. Des pièces aériennes et éthiques, pensées pour laisser la nature vous habiller en toute liberté
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
