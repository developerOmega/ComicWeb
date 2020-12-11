import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import {publicKey, ts, hash, url} from '../config/config';
import axios from 'axios';

import CardLink from '../components/CardLink';

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
      <CardLink data={character} key={character.id}/>
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

      <div className="grid-content"> { getCharacters } </div>
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