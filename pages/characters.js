import Link from 'next/link';
import {publicKey, ts, hash, url} from '../config/config';
import axios from 'axios';

const linkStyle = {
  marginRight: '20px',
};

const Characters = ({characters}) => {
  
  const getCharacters = characters.map((character) =>
    <li key={character.id}> {character.id} - {character.name} </li>
  )

  return (

    <section>
      <Link href='/'>
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href='/comics'>
        <a style={linkStyle}>Comics</a>
      </Link>

      <h1>Characters</h1>
      <ul> { getCharacters } </ul>
    </section>

  )
};

export async function getStaticProps() {

  const link = `${url}/v1/public/characters?offset=100&limit=20&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const req = await axios.get(link);
  return {
    props: {
      characters: req.data.data.results
    }
  }
  
}

export default Characters;