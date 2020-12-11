import styles from './CardCharacter.module.scss';

const CardCharacter = ({character}) => {
  return (
    <div className={styles.container}> 
      <img className="main-image" width="100px" src={character.thumbnail.path + '.' + character.thumbnail.extension} /> 
      <div className="select"> { character.name } </div>
    </div>  
  )
}

export default CardCharacter;