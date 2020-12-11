import Link from 'next/link';
import MainLayout from '../layouts/MainLayout';
import { publicKey, ts, hash, url } from '../config/config';
import axios from 'axios';

const linkStyle = {
  marginRight: '20px',
};

const Comics = ( {comics} ) => {
  const getComics = comics.map((comic) => 
    <li key={comic.id}> {comic.id} - {comic.title} </li>
  )
  
  return (
    <section>
      <Link href='/characters'>
        <a style={linkStyle}>Characters</a>
      </Link>
      <Link href='/'>
        <a style={linkStyle}>Home</a>
      </Link>
      <h1>Comics</h1>
      <ul> { getComics } </ul>
    </section>
  )
};

export async function getStaticProps() {
  const link = `${url}/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const req = await axios.get(link);
  
  return {
    props: {
      comics: req.data.data.results
    }
  }
}

Comics.Layout = MainLayout;

export default Comics;