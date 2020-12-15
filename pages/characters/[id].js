import { useRouter } from 'next/router';
import MainLayout from '../../layouts/MainLayout';
import { publicKey, hash, ts, url } from '../../config/config';
import { getReq, getParams } from '../../config/axios';
import DefaultErrorPage from 'next/error';

import CardMain from '../../components/CardMain';
import CardComic from '../../components/CardComic';

const Character = ({character, comics}) => {

  const router = useRouter();

  if(router.isFallback) {
    return <h1>Loading...</h1>
  }

  // This includes setting the noindex header because static files always return a status 200 but the rendered not found page page should obviously not be indexed
  if(!comics) {
    return (
      <section>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </section>
    )
  }

  const getCimics = comics.map( comic => <CardComic key={comic.id} comic={comic}  /> )

  return (
    <section className="container">
      <h1 className="title"> { character.name } </h1>
      
      <CardMain data={character} />

      <h3 className="sub-title"> Comics </h3>
      <div className="content">
        { getCimics }
      </div>

    </section>
  )
}

Character.Layout = MainLayout;

export default Character;

export const getStaticPaths = async () => {
  const link = `${url}/v1/public/characters?ts=${ts}&apikey=${process.env.PUBLIC_KEY}&hash=${hash}`;
  const characters = await getReq(link);
  
  const paths = characters.map( character => `/characters/${character.id}`);
  return {paths, fallback: true};
}

export const getStaticProps = async ({params}) => {

  const linkCharacter = `${url}/v1/public/characters/${params.id}?ts=${ts}&apikey=${process.env.PUBLIC_KEY}&hash=${hash}`;
  const linkComic = `${url}/v1/public/characters/${params.id}/comics?ts=${ts}&apikey=${process.env.PUBLIC_KEY}&hash=${hash}`;

  let character = await getReq(linkCharacter);
  let comics = await getReq(linkComic);
  
  return {
    props: {
      character: character[0],
      comics
    }
  }
  
}