import styles from './CardCharacter.module.scss';
import Image from 'next/image';

const CardCharacter = ({character}) => {
  return (
    <div className={styles.container}> 
      <div className={styles.select}>
        {character.name} 
      </div> 
      <Image src={ data.thumbnail.path + '.' + data.thumbnail.extension } alt={data.name} layout="responsive" height="100%" width="100%" />
    </div>  
  )
}

export default CardCharacter;