import Link from 'next/link';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

export default function Navbar() {
  return (
    <header style={styles.header}>
      {/* Zona izquierda: Logo */}
      <div style={styles.left}>
        <Link href="/" style={styles.logo}>
          <img src="/logo.png" alt="Logo" style={{ height: '60px' }} />
        </Link>
      </div>

      {/* Zona central: Links */}
      <nav style={styles.center}>
        <Link href="/" style={styles.link}>Home</Link>
        <Link href="/" style={styles.link}>About</Link>
        <Link href="/" style={styles.link}>Shop</Link>
        <Link href="/" style={styles.link}>Contact</Link>
      </nav>

      {/* Zona derecha: Iconos */}
      <div style={styles.right}>
        <Link href="/" style={styles.icon}><FaShoppingCart size={20} /></Link>
        <Link href="/" style={styles.icon}><FaUser size={20} /></Link>
      </div>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#fff',
    borderBottom: '1px solid #ccc',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  left: {
    flex: '1',
  },
  center: {
    flex: '2',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
  },
  right: {
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '1.5rem',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#000',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
  },
  icon: {
    color: '#333',
    textDecoration: 'none',
  },
};
