import { Link } from 'react-router-dom';

const Collection = () => {
  return (
    <main className="collection">
      <div className="container">
        {/* ==== Section 1 ↓ ==== */}
        <section className="section">
          <img src="/lines-pures/colombes.png" alt="Sweat de la collection Lignes Pures" />
          <h1>Sweat Natura</h1>
          <h2>Molleton bio, doux et chaud.</h2>
          <h3>100 % coton bio, teinture naturelle.</h3>
          <Link to="/lignespures" className="btn">Voir la collection&nbsp;: Lignes Pures</Link>
        </section>

        {/* ==== Section 2 ↓ ==== */}
        <section className="section">
          <img src="/Brise-Sauvage/robe.png" alt="Robe de la collection Brise Sauvage" />
          <h1>Robe Éole</h1>
          <h2>Robe longue, fluide et légère.</h2>
          <h3>Lin biologique, coupe ample.</h3>
          <Link to="/brise" className="btn">Voir la collection&nbsp;: Brise Sauvage</Link>
        </section>

        {/* ==== Section 3 ↓ ==== */}
        <section className="section">
          <img src="/Nocturne/ombre.png" alt="Manteau de la collection Nocturne" />
          <h1>Manteau Ombre</h1>
          <h2>Long manteau structuré.</h2>
          <h3>Laine recyclée, coupe droite.</h3>
          <Link to="/Nocturne" className="btn">Voir la collection&nbsp;: Nocturne</Link>
        </section>
      </div>
    </main>
  );
};

export default Collection;
