
import './App.css';
import Search from './Components/Search';

// import { SearchBar } from 'react-native-elements'
import { useEffect, useState } from 'react';

function App() {

  const [dataAPI, setDataAPI] = useState([]);
  const [stringValue, setStringValue] = useState('');
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    const res = await fetch('https://api.themoviedb.org/3/search/movie?api_key=**{api_raktas}**&language=en-US&query=**{paieškos_tekstas}**');
    const json = await res.json();
    setDataAPI(json);
        setMovies(json.slice());
        
}
useEffect(()=>{
  fetchData();
}, []);
console.log(dataAPI);
  return (
    <div className="app">
      <Search dataAPI={dataAPI} movies={movies} />

    </div>
  );
}

export default App;
