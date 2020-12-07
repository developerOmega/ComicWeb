import Link from 'next/link';

const linkStyle = {
  marginRight: '20px',
};

const Comics = () => (
  <section>
    <Link href='/characters'>
      <a style={linkStyle}>Characters</a>
    </Link>
    <Link href='/'>
      <a style={linkStyle}>Home</a>
    </Link>
    <h1>Comics</h1>
    <p>Hola mundo desde Comics</p>
  </section>
);
export default Comics;