import Link from 'next/link';
import {url, ts, publicKey, hash} from '../config/config';
import axios from 'axios';

const linkStyle = {
  marginRight: '20px',
};

const Stories = ({series}) => {

  const getSeries = series.map( serie =>  
    <li key={serie.id} > {serie.id} - {serie.title} </li>  
  );

  return (
  
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
      <ul> {getSeries} </ul>
    </section>
  )
};

export async function getStaticProps() {
  const link = `${url}/v1/public/series?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const req = await axios.get(link);
  return {
    props: {
      series: req.data.data.results
    }
  }
}

export default Stories;