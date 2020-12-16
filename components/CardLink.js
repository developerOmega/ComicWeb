import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './CardLink.module.scss';

const CardLink = ({data}) => {

  const router = useRouter();

  const getLink = () => {
    const path = router.pathname.split('/');
    const pathname = path[1];
    return `/${pathname}/${data.id}`;  
  }

  return (
    <Link href={ getLink() }>
      <a className={styles.container}>
        <div className={styles.select}>
          {data.name || data.title} 
        </div>
        <Image src={ data.thumbnail.path + '.' + data.thumbnail.extension } alt={data.name || data.title} layout="responsive" height="100%" width="100%" />
        {/* <img className='image' src={data.thumbnail.path + '.' + data.thumbnail.extension} alt={data.name || data.title} width="100px" /> */}
      </a>
    </Link>
  );

}

export default CardLink;
