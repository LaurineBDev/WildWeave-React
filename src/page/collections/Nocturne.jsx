import Slider from '../component/Slider';

const Nocturne = () => {
   const slider1 = ['/Nocturne/ombre.png' , '/Nocturne/ombre2.png'];
   const slider2 = ['/Nocturne/minuit.png', '/Nocturne/minuit2.png'];
   const slider3 = ['/Nocturne/eclipse.png', '/Nocturne/eclipse2.png'];

  return (
    <main className='Nocturne'>
      <h1 className='intro-nocturne'>
        Plongez dans l’univers Nocturne. Une capsule pensée pour celles et ceux qui aiment la simplicité élégante et la profondeur des tons sombres. Des matières durables, des coupes précises, une allure intemporelle pour accompagner vos soirs d’hiver et vos journées urbaines.
       </h1>
     <div className='content-slider'>
      <section className='slider-n'>
        <Slider images={slider1} />
        <h1>Manteau Ombre</h1>
        <h2>Long manteau structuré.</h2>
        <h3>Laine recyclée, coupe droite, doublure coton bio.</h3>
        <button className='btn-slider'>Acheter maintenant</button>
      </section>

      <section className='slider-n'>
        <Slider images={slider2} />
        <h1>Pull Minuit</h1>
        <h2>Pull col roulé doux et chaud.</h2>
        <h3>100% coton bio, tricoté localement.</h3>
        <button className='btn-slider'>Acheter maintenant</button>
      </section>

      <section className='slider-n'>
        <Slider images={slider3} />
        <h1>Pantalon Éclipse</h1>
        <h2>Pantalon élégant, coupe fuselée</h2>
        <h3>Tissu recyclé, coloris noir profond.</h3>
        <button className='btn-slider'>Acheter maintenant</button>
      </section>
      </div>
    </main>
  );
};

export default Nocturne;
