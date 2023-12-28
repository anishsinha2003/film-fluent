import '../style/Titles.css';
import TitleCard from './TitleCard.js';

const Titles = ({ updatePage, setListOfReviews, listOfTitles }) => {
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
    return (
      <div>
        <button onClick={() => updatePage("query")}>Back</button>
        {listOfTitles.length === 0
          ? <>
              no results movies/tvshows found
            </>
          : <></>
        }
        {listOfTitles.map((titleObj, index) => (
          <TitleCard
            updatePage={updatePage}
            setListOfReviews={setListOfReviews}
            name={titleObj.title}
            tags={titleObj.tag}
            actors={titleObj.actorsList}
            imageUrl={titleObj.image}
            linkUrl={titleObj.urlForThatTitle}
          />
        ))}
      </div>
    )

}
export default Titles;