import styles from './CardMain.module.scss';
import Image from 'next/image';

const CardMain = ({data}) => {

  return (
    <div className={styles.container}>
      <div className={styles.mainImage}>
        <Image src={ data.thumbnail.path + '.' + data.thumbnail.extension } alt={data.name || data.title} layout="responsive" height="100%" width="100%" />
      </div>
    
      <div className={styles.name}>
        <b> Name: </b>
        <p> { data.name || data.title } </p>
      </div>

      <div className={styles.description}>
        <b> Description: </b>
        <p> {data.description} </p>
      </div>
      
    </div>
  );
}

export default CardMain;