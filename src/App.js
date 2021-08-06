
import './App.css';
import {useState} from 'react'
import MovieList from './Components/MovieList';
import Add from './Components/Add';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


import MovieDetails from './Components/MovieDetails';






function App() {


  const [movies, setmovies] = useState([
    {title:"Game of Thrones",
    description:"Game of Thrones is an HBO series that tells the story of a medieval country's civil war. The series, which premiered in April 2011, is set on the fictional continents of Westeros and Essos in a world where seasons stretch on for years. ",
    posterURL:"https://images-na.ssl-images-amazon.com/images/I/61r-vt0bLZL._AC_SX522_.jpg",
    rating:"5",
    trailer:"https://www.youtube.com/embed/KPLWWIOCOOQ",
    id:"1"
  },
    {title:"Breaking Bad",
    description:"Set in Albuquerque, New Mexico, between 2008 and 2010, Breaking Bad follows Walter White, a meek high school chemistry teacher who transforms into a ruthless player in the local methamphetamine drug trade, driven by a desire to financially provide for his family after being diagnosed with terminal lung cancer. ",
    posterURL:"https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
    rating:"3",
    trailer:"https://www.youtube.com/embed/1JLUn2DFW4w",
    id:"2"
  },
    {
      title:"Hunter X Hunter",
    description:"A Hunter is one who travels the world doing all sorts of dangerous tasks. From capturing criminals to searching deep within uncharted lands for any lost treasures. Gon is a young boy whose father disappeared long ago, being a Hunter. ",
    posterURL:"https://fr.web.img5.acsta.net/pictures/19/08/01/09/52/4803203.jpg",
    rating:"4",
    trailer:"https://www.youtube.com/embed/d6kBeJjTGnY",
    id:"3"
    },
    {
      title:"The Queens Gambit",
    description:"The Queen's Gambit is a 2020 American coming-of-age period drama miniseries based on Walter Tevis's 1983 novel of the same name.",
    posterURL:"https://upload.wikimedia.org/wikipedia/en/1/12/The_Queen%27s_Gambit_%28miniseries%29.png",
    rating:"2",
    trailer:"https://www.youtube.com/embed/CDrieqwSdgI",
    id:"4"

    },
    {title:"THE GREAT HACK",
    description:"For The Great Hack, directors Jehane Noujaim and Karim Amer (who made The Square the 2013 documentary, about the Arab Spring) spoke to journalists",
    posterURL:"https://techcrunch.com/wp-content/uploads/2019/07/tgh.jpg?w:675",
    rating:"1",
    trailer:"https://www.youtube.com/embed/iX8GxLP1FHo",
    id:"5"
  },
    {title:"Bridgerton",
    description:"The accomplished TV producer Shonda Rhimes and her longtime “Grey’s Anatomy” and “Scandal” writer Chris Van Dusen bring their formidable facility for melodramatic storytelling to this soapy historical romance — the television equivalent of a page-turner.",
    posterURL:"https://www.iposters.co.uk/media/catalog/product/cache/bd762a6370945475f313f4ff236d8df1/0/2/0297br0421.jpg",
    rating:"3",
    trailer:"https://www.youtube.com/embed/gpv7ayf_tyE",
    id:"6"},
    {title:"Supernatural",
    description:"This series, which was the longest-running fantasy show in the history of American TV by the end of its 15th and final season",
    posterURL:"https://m.media-amazon.com/images/I/61tSMZuwnrL._AC_SL1010_.jpg",
    rating:"2",
    trailer:"https://www.youtube.com/embed/t-775JyzDTk",
    id:"7"},
    {title:"Avatar",
    description:"One of the more satisfying fantasy adventure sagas of the 21st century is this TV cartoon, which originally aired on the kids’",
    posterURL:"https://images.penguinrandomhouse.com/cover/9781506700229",
    rating:"4",
    trailer:"https://www.youtube.com/embed/dMnDkFktGF4",
    id:"8"},
    {title:"SPY",
    description:"Melissa McCarthy is armed and hilarious in this “outrageously entertaining” (Peter Travers, Rolling Stone) comedy hit from director Paul Feig (The Heat, Bridesmaids)! Deskbound CIA analyst Susan Cooper (McCarthy) is about to become the world’s newest—and unlikeliest—secret weapon.",
    posterURL:"https://lumiere-a.akamaihd.net/v1/images/spy_584x800_e781538b.jpeg",
    rating:"4",
    trailer:"https://www.youtube.com/embed/ltijEmlyqlg",
    id:"9"}
  ]);
  const AddMovies = (addmovie) => {
    setmovies((movies) =>
        ([...movies, addmovie]))        
}


  return (
    <BrowserRouter>
    <Switch>
    <div className="App">
      
     <Route exact path="/"  component={()=> <MovieList movies = {movies}/>}/>
     <Route exact path="/"  component={()=> <Add Addmovies = {AddMovies}/>}/>
     <Route path="/Components/Trailer/:id" component={()=> <MovieDetails info={movies}/>}/>
     
 
     © 2021.Attia Mouadh.
    </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
