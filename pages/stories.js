import Link from 'next/link';

const linkStyle = {
  marginRight: '20px',
};

const Stories = () => (
  <section>
    <Link href='/characters'>
      <a style={linkStyle}>Characters</a>
    </Link>
    <Link href='/comics'>
      <a style={linkStyle}>Comics</a>
    </Link>
    <Link href='/'>
      <a style={linkStyle}>Home</a>
    </Link>
    <h1>Stories</h1>
    <p>Hola mundo desde Stories</p>
  </section>
);
export default Stories;