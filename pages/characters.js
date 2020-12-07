import Link from 'next/link';

const linkStyle = {
  marginRight: '20px',
};

const Characters = () => (
  <section>

    <Link href='/'>
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href='/comics'>
      <a style={linkStyle}>Comics</a>
    </Link>

    <h1>Characters</h1>
    <p>Hola Mundo desde Characters</p>
  </section>
);
export default Characters;