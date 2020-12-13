import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { publicKey, ts, hash, url } from '../config/config';
import { getReq } from '../config/axios';

import CardLink from '../components/CardLink';

const Comics = ( {comics} ) => {

  const [ comicsData, setComicsData ] = useState(comics);

  const searchComic = async (event) => {
    event.preventDefault();
    const title = event.target.search.value;
    const link = `${url}/v1/public/comics?title=${title}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    
    const comics = await getReq(link);
    setComicsData( comics );
  }

  const getComics = comicsData.map((comic) => 
    <CardLink data={comic} key={comic.id} />
  )
  
  return (
    <section className="container">
      <h1 className="title">Comics</h1>

      <form className="search" onSubmit={searchComic}>
        <label>
          <input type="search" name="search" placeholder="Search comic" />
        </label>
      </form>

      <div className="grid-content"> { getComics } </div>
    </section>
  )
};

export async function getStaticProps() {
  const link = `${url}/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const comics = await getReq(link);
  return {
    props: { comics }
  }
}

Comics.Layout = MainLayout;

export default Comics;