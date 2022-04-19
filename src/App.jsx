
import './App.css';
import SearchBar from './Components/SearchBar';

import './base.scss';




function App() {

//   const [dataAPI, setDataAPI] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);

  

//   const fetchData = async () => {
//     const res = await fetch('https://api.themoviedb.org/3/search/movie?api_key=aa5940b71d86c069bf90501b1c3648d5&language=en-US&query=**{movies}**');
//     const json = await res.json();
//     setDataAPI(json.results);
//         setFilteredData(json.results.slice());
        
// }
// useEffect(()=>{
//   fetchData();
// }, []);
// console.log(dataAPI);




  return (
    <div className="app">
      <SearchBar  />
     

    </div>
  );
}

export default App;
