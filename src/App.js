import './App.css';
import Header from './components/Header';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {CharacterContext} from './components/CharacterContext'
import CharacterGrid from './components/CharacterGrid';
import Search from './components/Search';

function App() {

  const [characters,setCharacters] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [query,setQuery] = useState(true);

  useEffect(()=>{

    const fetchItems = async ()=>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      
      setCharacters(result.data);
      setIsLoading(false);
    }

    fetchItems();
  },[query]);

  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q)=>setQuery(q)}/>
      <CharacterContext.Provider value={{isLoading,characters,setCharacters}}>
      <CharacterGrid/>
      </CharacterContext.Provider>
    </div>
  );
}

export default App;
