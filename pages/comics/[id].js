import { useRouter } from 'next/router';
import {url, publicKey, ts, hash} from '../../config/config';
import axios from 'axios';

const Comic = ({comic}) => {
  const router = useRouter();
  const { id } = router.query;
  return <p> Comic: { comic.title } </p>
}

export async function getStaticPaths() {
  const link = `${url}/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const req = await axios.get(link);
  const comics = req.data.data.results;

  const paths = comics.map(comic => `/comics/${comic.id}`);
  return {paths, fallback: false};
}

export async function getStaticProps({params}) {
  const link = `${url}/v1/public/comics/${params.id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const req = await axios.get(link);
  return {
    props: {
      comic: req.data.data.results[0]
    }
  }
}

export default Comic;