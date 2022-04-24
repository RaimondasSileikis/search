
export default function SearchBarList({dataAPI, moveClick}){


  console.log(dataAPI);

    return(
        <>
            <div className="search-results" >
                { dataAPI.length !== 0 && ( 
                    dataAPI.slice(0, 8).map(value => {
                        return ( 
                                    
                            <div  key={value.id} className= "data-item" onClick={() => moveClick(value.id)} >
                                <h4  >{value.original_title}</h4>
                                <p>{value.vote_average} Rating, {value.release_date.slice(0, 4)}</p>   
                            </div> 
                        );

                    })
                )}

            </div>

        </>
    );
}