import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import {url, ts, publicKey, hash} from '../config/config';
import { getReq } from '../config/axios';

import CardLink from '../components/CardLink';

const Series = ({series}) => {

  const [ seriesData, setSeriesData ] = useState(series);

  const getSeries = seriesData.map( serie =>  
    <CardLink data={serie} key={serie.id} />  
  );

  const searchSerie = async (event) => {
    event.preventDefault();
    const title = event.target.search.value;    
    const link = `${url}/v1/public/series?title=${title}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    const series = await getReq(link);
    setSeriesData( series );
  }

  return (
    <section className="container">
      <h1 className="title">Series</h1>

      <form className="search" onSubmit={searchSerie}>
        <label>
          <input type="search" name="search" placeholder="Search serie" />
        </label>
      </form>

      <div className="grid-content"> {getSeries} </div>
    </section>
  )
};

export async function getStaticProps() {
  const link = `${url}/v1/public/series?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const series = await getReq(link);
  return {
    props: { series }
  }
}

Series.Layout = MainLayout;

export default Series;