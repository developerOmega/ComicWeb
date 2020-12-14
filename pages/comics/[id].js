import { useRouter } from 'next/router';
import MainLayout from '../../layouts/MainLayout';
import {url, publicKey, ts, hash} from '../../config/config';
import { getReq } from '../../config/axios';

import CardMain from '../../components/CardMain';
import CardCharacter from '../../components/CardCharacter';

const Comic = ({comic, characters}) => {
  const router = useRouter();
  const { id } = router.query;

  const getCharacters = characters.map( character => 
    <CardCharacter key={character.id}  character={character} />
  )

  return (
    <section className="container">

      <h2 className="title"> { comic.title } </h2>
      
      <CardMain data={comic} />
      
      <h3 className="sub-title"> Characters </h3>

      <div className="grid-content template-min">
        { getCharacters }
      </div>

      
    </section>
  );
}

export async function getStaticPaths() {
  const link = `${url}/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const comics = await getReq(link);

  const paths = comics.map(comic => `/comics/${comic.id}`);
  return {paths, fallback: true};
}

export async function getStaticProps({params}) {
  const linkComic = `${url}/v1/public/comics/${params.id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const linkCharacters = `${url}/v1/public/comics/${params.id}/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  
  const comic = await getReq(linkComic);
  const characters = await getReq(linkCharacters);

  return {
    props: {
      comic: comic[0], characters
    }
  }
}

Comic.Layout = MainLayout;

export default Comic;