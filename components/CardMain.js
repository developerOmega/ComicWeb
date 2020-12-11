import styles from './CardMain.module.scss';

const CardMain = ({data}) => {

  return (
    <div className={styles.container}>
      <img src={data.thumbnail.path + '.' + data.thumbnail.extension} />
      <div>
        <b> Name: </b>
        <p> { data.name || data.title } </p>
      </div>
     
      <div>
        <b> Description: </b>
        <p> {data.description} </p>
      </div>
    </div>
  );
}

export default CardMain;