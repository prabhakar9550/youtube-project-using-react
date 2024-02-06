import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import { cacheResults } from '../utils/searchSlice';


const Head = () => {

   const [searchQuery, setSearchQuery] = useState("");
   const [suggestions, setSuggestions] = useState([]);
   const [showSuggestions, setShowSuggestions] = useState(false);

   const searchCache = useSelector( (store) => store.search);
   const dispatch = useDispatch();
   

   useEffect(() => {
  
    

    const timer = setTimeout(() => {
    
      if(searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    
    
    }, 200);

    return () => {
      clearTimeout(timer);
    };
     
    }, [searchQuery]);

    const getSearchSuggestions = async () => {

     // console.log("API CALL - " + searchQuery);
      const data = await fetch(YOUTUBE_SEARCH_API+ searchQuery);
      const json = await data.json();
      setSuggestions(json[1])
  
     // console.log(json[1]);
     dispatch(
      cacheResults({
      [searchQuery]: json[1],
     })
     );
     };

   

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
        <img 
        onClick={() => toggleMenuHandler()}
        className='h-10 cursor-pointer'
        alt="menu" 
        src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
        />
        <a href="/">
        <img 
        className='h-10 mx-2'
        alt="youtube-logo"
        src="https://logosmarken.com/wp-content/uploads/2020/04/YouTube-Logo.png"
        />
        </a>
        </div>
        <div className='col-span-10 px-10'>
          <div>
        <input 
        className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full' 
        type="text" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus= {() => setShowSuggestions(true)}
        onBlur= {() => setShowSuggestions(false)}
        />
        <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>🔍</button>
        </div>
       {showSuggestions && (<div className='absolute bg-white py-2 px-2 w-[34rem] shadow-lg rounded-lg border border-gray-100'>
          <ul>
            {suggestions.map((s) => (
              <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>🔍 {s}</li>
            ) )}
          </ul>
        </div>
        )}
        </div>
        <div className='col-span-1'>
            <img 
            className='h-10'
            alt="user"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMCnKVdb6r65QZHqRYFJ8Bo_LK2_RmQH1quU0kEoKJEqxkHgJP53wS6tFUqAZD-0CY2GU&usqp=CAU"
            />
        </div>
    </div>
  )
}

export default Head