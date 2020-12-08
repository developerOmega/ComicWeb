import { useRouter } from 'next/router';
import { url, ts, publicKey, hash } from '../../config/config';
import axios from 'axios';

const Story = ({serie}) => {
  const router = useRouter();
  const { id } = router.query;

  return <p> Serie: { serie.title } </p>
}

export async function getStaticPaths() {
  const link = `${url}/v1/public/series?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const req = await axios.get(link);
  const series = req.data.data.results;
  const paths = series.map(serie => `/series/${ serie.id }`);
  return {paths, fallback: false};
}

export async function getStaticProps({params}) {
  const link = `${url}/v1/public/series/${params.id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const req = await axios.get(link);
  return {
    props: {
      serie: req.data.data.results[0]
    }
  }
}

export default Story;