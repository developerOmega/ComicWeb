import { useRouter } from 'next/router';
import MainLayout from '../../layouts/MainLayout';
import {url, publicKey, ts, hash} from '../../config/config';
import { getReq } from '../../config/axios';
import DefaultErrorPage from 'next/error';

import CardMain from '../../components/CardMain';
import CardCharacter from '../../components/CardCharacter';

const Comic = ({comic, characters}) => {
  const router = useRouter();

  if(router.isFallback) {
    return <h1>Loading...</h1>
  }

  // This includes setting the noindex header because static files always return a status 200 but the rendered not found page page should obviously not be indexed
  if(!characters) {
    return (
      <section>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </section>
    )
  }
  

  const getCharacters = characters.map( character => <CardCharacter key={character.id}  character={character} /> )

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

Comic.Layout = MainLayout;

export default Comic;

export const getStaticPaths = async () => {
  const link = `${url}/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const comics = await getReq(link);

  const paths = comics.map(comic => `/comics/${comic.id}`);
  return {paths, fallback: true};
}

export const getStaticProps = async ({params}) => {
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
