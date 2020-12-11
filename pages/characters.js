import { useState } from 'react';
import Link from 'next/link';
import MainLayout from '../layouts/MainLayout';
import {publicKey, ts, hash, url} from '../config/config';
import axios from 'axios';

const Characters = ({characters}) => {

  const [ charactersData, setCharactersData] = useState(characters);
  
  const searchCharacter = async (event) => {
    event.preventDefault();
    const name = event.target.search.value;
    const link = `${url}/v1/public/characters?name=${name}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    
    try {
      const req = await axios.get(link);
      setCharactersData( req.data.data.results );
    } catch (error) {
      console.error(error);
    }

  }

  const getCharacters = charactersData.map((character) => (
      
      <Link href={`/characters/${character.id}`} key={character.id}>
        <a>
          <div>
            {character.id} - {character.name} 
          </div>
          <img src={character.thumbnail.path + '.' + character.thumbnail.extension} width="100px" />
        </a>
      </Link>

    )
  );

  return (

    <section className="container">
      <h1 className="title">Characters</h1>
      
      <form className="search" onSubmit={searchCharacter}>
        <label>
          Name:
          <input type="search" name="search" placeholder="Search character" />
        </label>
        <button type="submit" > Buscar </button>
      </form>

      <div> { getCharacters } </div>
    </section>

  )
};

export async function getStaticProps() {

  const link = `${url}/v1/public/characters?limit=20&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const req = await axios.get(link);
  return {
    props: {
      characters: req.data.data.results
    }
  }
  
}

Characters.Layout = MainLayout;

export default Characters;