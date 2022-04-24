
import './App.css';

import { ReactComponent as Movie } from './Components/movie.svg';
import './base.scss';
import Move from './Components/Move';
import SearchBarList from './Components/SearchBarList';
// import { ReactComponent as Movie } from './Componets/movie.svg';

import { useState } from 'react';


function App() {

const API_IMG = 'https://image.tmdb.org/t/p/w500';
const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=aa5940b71d86c069bf90501b1c3648d5&language=en-US&query=';

const [dataAPI, setDataAPI] = useState([]);
const [searchWord, setSearchWord] = useState('');
const [dataMove , setDataMove] = useState([]);


  const fetchData = async(searchWord) => {    
    const res = await fetch(API_SEARCH + searchWord);
    const data = await res.json();
    setDataAPI(data.results);
    setDataMove([]);

console.log(data.results);
}

const handleFilter = (event) => {
  const searchWord = event.target.value;
  setSearchWord(searchWord);
  console.log(searchWord.length);
  searchWord.length > 2 && fetchData(searchWord);
  setDataMove([]);
};    

const clearInput = () => {
  setDataAPI([]);
  setSearchWord('');
  setDataMove([]);
}

const moveClick = (id) => {
  const newData = dataAPI.filter(move => move.id === id);
  setDataMove([...newData]);
  setDataAPI('');
  console.log(dataMove); 
};
  return (
    <div className="app">
          <div className="main" ></div>
          <div className="search" >
                <div className="search-inputs">
                    <Movie className="movie" />
                    <input type="text" onChange={handleFilter} value={searchWord} onSubmit={fetchData} />
                    <div className="search-icons" >
                        {searchWord.length !== 0 ? <div onClick={clearInput} >x</div> : null}
                    </div>
                </div>
                <SearchBarList  dataAPI={dataAPI} moveClick={moveClick} />
          </div>
          {dataMove.length > 0 ?
          <Move API_IMG={API_IMG} dataMove={dataMove} /> : '' 
          }

    </div>

  );
}

export default App;
