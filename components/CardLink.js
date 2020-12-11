import Link from 'next/link';
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
        <div className='select'>
          {data.name || data.title} 
        </div>
        <img className='image' src={data.thumbnail.path + '.' + data.thumbnail.extension} width="100px" />
      </a>
    </Link>
  );

}

export default CardLink;
