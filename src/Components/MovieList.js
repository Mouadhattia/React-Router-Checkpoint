import React from 'react';
import MovieCard from './MovieCard';
import Shearch from './Search';
import {useState} from 'react';
import Rate from './Rate';








function MovieList({movies}) {
    const [text, setText] = useState('')
const filtertext = (text) => {
  setText(text)
}
const [rate, setRate] = useState('')
const filterrate = (rate)  => {
    setRate(rate)

}
  
    return (
        
        <div>
            
          <Shearch filtertext={filtertext}/> 
          <Rate filterrate = {filterrate}/>
          <div className='m'>
          
        {movies.filter((el) => (el.title.toLowerCase().includes(text.toLowerCase()) )&& el.rating>= rate).map((element) =>
                    <MovieCard movie={element} />
                    
                )}
                
                </div>
                
                
        </div>
        
    )
}

export default MovieList
