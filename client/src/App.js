import './style/App.css';
import React, { useState } from 'react';
import Titles from './components/Titles';
import Query from './components/Query';
import Reviews from './components/Reviews';
import Error from './components/Error';
import Loading from './components/Loading';

function App() {

  const [listOfTitlesFromQuery, setListOfTitlesFromQuery] = useState([]);
  const [listOfReviews, setListOfReviews] = useState([]);
  const [showPage, setShowPage] = useState("query");
  console.log("PASS LIS", listOfReviews);
  return (
    <div className="App">
      {(showPage === "query")
        ? <Query updatePage={setShowPage} setListOfTitles={setListOfTitlesFromQuery}/>
        : showPage === "titles" ?
          <Titles listOfTitles={listOfTitlesFromQuery} updatePage={setShowPage} setListOfReviews={setListOfReviews}/>
        : showPage === "reviews" ?
          <Reviews listOfReviews={listOfReviews} updatePage={setShowPage}/>
        : showPage === "error" ?
          <Error updatePage={setShowPage}/>
        : <Loading/>
      }
    </div>
  );
}

export default App;
