
const Collection = () => {
  return (
    <main className='collection'>
      <div className="container">
        {/* ====Section 1↓==== */}
       <section className="section">
         <img src="/lines-pures/colombes.png" alt="Pull de la collection Lines pures" />
         <h1>Sweat Natura</h1>
         <h2>Molleton bio, doux et chaud.</h2>
         <h3>100% coton bio, teinture naturelle.</h3>
         <a href="#" className="btn">Voir la collection : Lignes Pures</a>
       </section>
       {/* ====Section 2↓===== */}
       <section className="section">
         <img src="/Brise-Sauvage/robe.png" alt="Robe de la collection Brise Sauvage" />
         <h1>Robe Éole</h1>
         <h2>Robe longue fluide et légère.</h2>
         <h3>Lin biologique, coupe ample</h3>
         <a href="#" className="btn">Voir la collection : Brise Sauvage</a>

       </section>
       {/* ====Section 3↓==== */}
       <section className="section">
         <img src="/Nocturne/ombre.png" alt="Manteau de la collection Ombre" />
         <h1>Manteau Ombre</h1>
         <h2>Long manteau structuré.</h2>
         <h3>Laine recyclée, coupe droite</h3>
         <a href="#" className="btn">Voir la collection : Nocturne</a>
       </section>
         
      </div>
    </main>
  );
};

export default Collection;