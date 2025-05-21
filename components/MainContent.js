export default function MainContent() {
  return (
    <main style={styles.main}>
      {/* Hero / Bienvenida */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Bienvenido a GreenLife 🌿</h1>
        <p style={styles.subtitle}>
          Tu tienda online de plantas para decorar, purificar el aire y conectar con la naturaleza.
        </p>
        <a href="/" style={styles.ctaButton}>Ver catálogo</a>
      </section>

      {/* Destacados */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Nuestras categorías</h2>
        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <img src="/interior.jpeg" alt="Plantas de interior" style={styles.cardImage} />
            <h3>Interior</h3>
            <p>Plantas ideales para tu sala, oficina o dormitorio.</p>
          </div>
          <div style={styles.card}>
            <img src="/exterior.jpeg" alt="Plantas de exterior" style={styles.cardImage} />
            <h3>Exterior</h3>
            <p>Perfectas para jardines, terrazas y balcones.</p>
          </div>
          <div style={styles.card}>
            <img src="/medicinales.jpg" alt="Plantas medicinales" style={styles.cardImage} />
            <h3>Medicinales</h3>
            <p>Hierbas y plantas con propiedades curativas.</p>
          </div>
        </div>
      </section>

      {/* Información extra */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>¿Por qué elegirnos?</h2>
        <ul style={styles.benefits}>
          <li>✅ Plantas seleccionadas y saludables</li>
          <li>✅ Envíos a todo el país</li>
          <li>✅ Asesoramiento gratuito</li>
        </ul>
      </section>
    </main>
  );
}

const styles = {
  main: {
    padding: '2rem',
    fontFamily: 'sans-serif',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '1.5rem',
  },
  ctaButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#228B22',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '0.5rem',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: '3rem',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  cardGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  card: {
    width: '280px',
    border: '1px solid #ddd',
    borderRadius: '0.75rem',
    padding: '1rem',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  cardImage: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '0.5rem',
    marginBottom: '1rem',
  },
  benefits: {
    listStyle: 'none',
    padding: 0,
    fontSize: '1.1rem',
    lineHeight: '1.8rem',
    textAlign: 'center',
  },
};
