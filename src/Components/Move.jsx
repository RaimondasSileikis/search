import { ReactComponent as Star } from '../img/star.svg';
import '../base.scss';
export default function Move({ API_IMG, dataMove}) {

    return(

        <>
        {
        dataMove.map(move => 
                              
            <div key={move.id} className="detail-item" >
                <div className='img'>
                    <img src= {move.poster_path !== null ? API_IMG + move.poster_path : 'https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'  } alt="move" />
                </div>                       
                <div className="description" >
                        <h3>{move.original_title} ({move.release_date.slice(0, 4)})</h3>
                            <h4>Original language: <span>{move.original_language}</span></h4>
                                <div className="votes" ><Star className="star" />
                                    <div className="vote-counts" >
                                        <h5>{move.vote_average}<span>/10</span></h5>
                                        <i>{move.vote_count} votes</i>  
                                    </div> 
                                </div>
                                <p>{move.overview}</p>
                            </div>
                                
                </div>
       
         ) };
     
        </ >

    )
}