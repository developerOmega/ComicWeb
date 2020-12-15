import { useRouter } from 'next/router';
import MainLayout from '../../layouts/MainLayout';
import { url, ts, publicKey, hash } from '../../config/config';
import { getReq } from '../../config/axios';

import CardMain from '../../components/CardMain';
import CardCharacter from '../../components/CardCharacter';
import CardComic from '../../components/CardComic';

const Serie = ({serie, comics, characters}) => {
  const router = useRouter();
  const { id } = router.query;

  const getComics = comics.lenght < 1 ? [] : comics.map( comic =>
    <CardComic comic={comic} key={comic.id} />  
  )

  const getCharacters = characters.lenght < 1 ? [] : characters.map(character => 
    <CardCharacter character={character} key={character.id} />
  );

  return (
    <section className="container">
      
      <h2 className="title"> {serie.title} </h2>

      <CardMain data={serie} />

      <h3 className="sub-title"> Characters </h3>
      <div className="grid-content min-template">
        { getCharacters }
      </div>

      <h3 className="sub-title"> Comics </h3>
      <div className="content">
        { getComics }
      </div>

    </section>
  );
}

export async function getStaticPaths() {
  const link = `${url}/v1/public/series?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const series = await getReq(link);
  const paths = series.map(serie => `/series/${ serie.id }`);
  return {paths, fallback: true};
}

export async function getStaticProps({params}) {
  const linkSerie = `${url}/v1/public/series/${params.id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const linkCharacter = `${url}/v1/public/series/${params.id}/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const linkComics = `${url}/v1/public/series/${params.id}/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  const serie = await getReq(linkSerie);
  const characters = await getReq(linkCharacter);
  const comics = await getReq(linkComics);

  return {
    props: {
      serie: serie[0], characters, comics
    }
  }
}

Serie.Layout = MainLayout;

export default Serie;