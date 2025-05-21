import { useState } from 'react';

export default function Footer() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Mensaje enviado con éxito ✅');
        setFormData({ email: '', name: '', subject: '', message: '' });
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error(error);
      setStatus('Hubo un error ❌. Intenta nuevamente.');
    }
  };

  return (
    <footer style={styles.footer}>
      <div>
        <h2 style={styles.heading}>Contacto</h2>
        <p style={styles.paragraph}>
          ¿Tienes preguntas o deseas hacer un pedido especial? Envíanos un mensaje.
        </p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="subject"
            placeholder="Propósito del mensaje"
            value={formData.subject}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            value={formData.message}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
          <button type="submit" style={styles.button}>Enviar mensaje</button>
        </form>
        {status && <p style={styles.status}>{status}</p>}
      </div>
      <p style={styles.footerNote}>© 2025 GreenRoots. Todos los derechos reservados.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#1e1e1e',
    color: '#ffffff',
    padding: '2rem',
    textAlign: 'center',
  },
  heading: {
    fontSize: '1.75rem',
    marginBottom: '0.5rem',
  },
  paragraph: {
    marginBottom: '1.5rem',
    fontSize: '1rem',
    lineHeight: '1.5',
    color: '#d1d1d1',
  },
  form: {
    maxWidth: '500px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: '#ffffff',
    color: '#222222',
  },
  textarea: {
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: '#ffffff',
    color: '#222222',
    minHeight: '120px',
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#28a745',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  status: {
    marginTop: '1rem',
    fontStyle: 'italic',
    color: '#90ee90',
  },
  footerNote: {
    marginTop: '2rem',
    fontSize: '0.9rem',
    color: '#aaa',
  },
};
