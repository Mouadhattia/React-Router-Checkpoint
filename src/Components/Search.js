import React from 'react'

function Search({filtertext}) {
    return (
        <div>
            <h1 className='T'>Movie <span style={{color:'red'}} >App</span> </h1>
            <form >
        <input
        style={{width:'20%'}}
        
          placeholder='Search Movies'

          type="text"
          onChange={(elm)=>filtertext(elm.target.value)}
        />

      </form>
        </div>
    )
}

export default Search
