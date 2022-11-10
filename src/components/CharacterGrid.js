import React from 'react';
import { useContext } from 'react';
import { CharacterContext } from './CharacterContext';
import { CharacterItem } from './CharacterItem';
import {Spinner} from './Spinner';

const CharacterGrid = () => {

    const {isLoading,characters}=useContext(CharacterContext);

  return (
    isLoading ? (<Spinner/>) : (<section className='cards'>

        {characters.map((item)=>(
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
        ))}

    </section>)
  )
}

export default CharacterGrid