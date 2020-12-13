import styles from './CardMain.module.scss';

const CardMain = ({data}) => {

  return (
    <div className={styles.container}>
      <div className={styles.mainImage}>
        <img src={data.thumbnail.path + '.' + data.thumbnail.extension} />
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