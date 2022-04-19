import { useEffect, useState } from "react";

import { ReactComponent as Movie } from './movie.svg'
import { ReactComponent as Star } from './star.svg'
export default function SearchBar(){

    
    const API_POPULAR = 'https://api.themoviedb.org/3/movie/popular?api_key=aa5940b71d86c069bf90501b1c3648d5&language=en-US&page=1';
    const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=aa5940b71d86c069bf90501b1c3648d5&language=en-US&query=';

    const [dataAPI, setDataAPI] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState('');
    const [selectedId, setSelectedId] = useState();
  
//    const searchData = async() => {
      
//         const res = await fetch(API_SEARCH + {wordEntered});
//         const data = await res.json();
//         console.log(data)
//         setDataAPI(data.results);
       
//        }
//     }  
   
//    console.log(dataAPI);
  
    const fetchData = async() => {
        
      const res = await fetch(API_POPULAR);
      const data = await res.json();
      setDataAPI(data.results);
  console.log(data);
  }

  useEffect(()=>{
    fetchData();
  }, []);
  console.log(dataAPI);
 

const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(event.target.value);
    const newFilter = dataAPI.filter((value) => {
return value.original_title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
        setFilteredData([]);
    } else {
      setFilteredData(newFilter);  
    }
};    

const clearInput = () => {
    setFilteredData([]);
    setWordEntered('');
}

// const handleClick = (id) => {
//     setSelectedId(id !== selectedId ? id : null);
// };

    return(
        <>
            <div className="main" ></div>
            <div className="search" >
                <div className="search-inputs">
                    <Movie className="movie" />
                    <input type="text" onChange={handleFilter} value={wordEntered} onSubmit={fetchData} />
                    <div className="search-icons" >
                        {filteredData.length !== 0 ? <div onClick={clearInput} >x</div> : null}
                    </div>
                </div>

                {
                <div className="search-results" >
                    { filteredData.length !== 0 && ( 
                        filteredData.slice(0, 8).map((value, key) => {
                            return ( 
                                <>
                                    <div className= "data-item"  key={key}  >
                                        <h4  >{value.original_title}</h4>
                                        <p>{value.vote_average} Rating, {value.release_date}</p>
                                        
                                    </div> 

                                {/* {selectedId === value.id && (
                                    <div className="detail-item" >
                                        <img src={API_IMG + value.backdrop_path} alt="" />
                                       
                                        <div className="description" >
                                            <h3>{value.original_title} ({value.release_date})</h3>
                                            <h4>Original language: {value.original_language}</h4>
                                            <div className="votes" ><Star className="star" />
                                                <div>
                                                    <span>{value.vote_average}/10</span>
                                                    <i>{value.vote_count} votes</i>
                                                </div>
                                            </div>
                                            <p>{}</p>
                                        
                                        </div>
                                    
                                    </div>
                                )}; */}
                                
                                </>
                            );
                        })
                    )}

                </div>

                } 

          
            </div>
            
        
        </>
    );
}