import styles from './CardCharacter.module.scss';
import Image from 'next/image';

const CardCharacter = ({character}) => {
  return (
    <div className={styles.container}> 
      <div className={styles.select}>
        {character.name} 
      </div> 
      <Image src={ character.thumbnail.path + '.' + character.thumbnail.extension } alt={character.name} layout="responsive" height="100%" width="100%" />
    </div>  
  )
}

export default CardCharacter;