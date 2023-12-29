import '../style/Titles.css';
// import '../style/App.css';
import TitleCard from './TitleCard.js';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Titles = ({ updatePage, setListOfReviews, listOfTitles, queryData }) => {
  // const displayReviews = async (url) => {
  //   try {
  //     updatePage("loading")
  //     const response = await fetch('http://127.0.0.1:5000/display/reviews', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(url),
  //     });

  //     const responseData = await response.json();
  //     setListOfReviews(responseData.reviews);
  //     updatePage("reviews")

  //   } catch (error) {
  //     console.error('Error sending data to server:', error);
  //   }
  // };
    console.log(queryData);
    return (
      <div className='titles-body'>
        <ArrowBackIcon sx={{width:"90px", height:"90px"}} onClick={() => updatePage("query")} className="titles-back" />
        <br/>
        <div className='text-1-results-for'>Showing results for...</div>
        <br/><br/>
        <div className='text-2-results'>"{queryData}"</div>
        <br/><br/><br/>
        <div className="title-card-container">
          {listOfTitles.map((titleObj, index) => (
            <>
            <TitleCard
              updatePage={updatePage}
              setListOfReviews={setListOfReviews}
              name={titleObj.title}
              tags={titleObj.tag}
              actors={titleObj.actorsList}
              imageUrl={titleObj.image}
              linkUrl={titleObj.urlForThatTitle}
            />
            </>
          ))}
        </div>
        {listOfTitles.length === 0
          ? <>
              no results movies/tvshows found
            </>
          : <></>
        }
      </div>
    )

}
export default Titles;