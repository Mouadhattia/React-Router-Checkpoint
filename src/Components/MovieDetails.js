import React from 'react'
import {withRouter,Link} from 'react-router-dom'


function MovieDetails(props) {

    const id = props.match.params.id;
    const movie = props.info.find((movie) => movie.id === id)

    return (
        <div>
        <div >
            <div className='dis'>
             <Link to='/'><img src='https://www.pngjoy.com/pngl/335/6267573_home-button-icon-white-house-black-background-png.png' style={{height:80,width:100,marginTop:100}} alt="home"></img></Link>
        <h1 >HOME</h1>
        </div>
        <div className='info'>
      <div>
          <h1 className='ti'>Trailer</h1>
      <iframe width="850" height="500"
       src={movie.trailer}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        title="YouTube video player"
        allowfullscreen>
        </iframe>
      </div>
     
      <div style={{width:'40%'}}>
      <h1 className='ti'>{movie.title}</h1>
      <div style={{marginTop:150}} >
          <h1 >Description:</h1>
      <h2 >{movie.description}</h2>
      </div>
      </div>
        </div>
        </div>
        </div>
    )
}

export default withRouter (MovieDetails)
