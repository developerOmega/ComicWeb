import { useRouter } from 'next/router';
import MainLayout from '../../layouts/MainLayout';
import { publicKey, hash, ts, url } from '../../config/config';
import axios from 'axios';

const Character = ({character}) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <p> Character: { character.name } </p>
      <p> Description: {character.description}</p>
      <img src={character.thumbnail.path + '.' + character.thumbnail.extension} />
    </div>
  )
}

export async function getStaticPaths() {
  const link = `${url}/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const req = await axios.get(link);
  const characters = req.data.data.results;2

  const paths = characters.map( character => `/characters/${character.id}`);
  return {paths, fallback: false};

}

export async function getStaticProps({params}) {

  const link = `${url}/v1/public/characters/${params.id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const req = await axios.get(link);
  console.log(req.data.data.results[0].thumbnail);
  return {
    props: {
      character: req.data.data.results[0]
    }
  }
  
}

Character.Layout = MainLayout;

export default Character;