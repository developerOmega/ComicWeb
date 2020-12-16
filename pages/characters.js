import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import {publicKey, ts, hash, url} from '../config/config';
import { getReq } from '../config/axios';

import CardLink from '../components/CardLink';

const Characters = ({characters}) => {

  const [ charactersData, setCharactersData] = useState(characters);
  
  const searchCharacter = async (event) => {
    event.preventDefault();
    const name = event.target.search.value;
    const link = `${url}/v1/public/characters?name=${name}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    const characters = await getReq(link);
    setCharactersData( characters );
  }

  const getCharacters = charactersData.map( (character) => 
    <CardLink data={character} key={character.id}/> 
  );

  return (

    <section className="container">
      <h1 className="title">Characters</h1>
      
      <form className="search" onSubmit={searchCharacter}>
        <label>
          <input type="search" name="search" placeholder="Search character" />
        </label>
      </form>

      <div className="grid-content"> { getCharacters } </div>
    </section>

  )
};

export const getStaticProps = async () => {
  const link = `${url}/v1/public/characters?limit=20&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const characters = await getReq(link);
  console.log(characters);
  return {
    props: { characters }
  }
  
}

Characters.Layout = MainLayout;

export default Characters;