import '../style/Reviews.css';

const Reviews = ({ updatePage, listOfReviews }) => {

    return (
      <div>
        <button onClick={() => updatePage("titles")}>Back</button>
        {listOfReviews.length === 0
          ? <>
              no reviews found
            </>
          : <></>
        }
        {listOfReviews.map((reviews, index) => (
          <div key={index}>
            <p>Rating: {reviews.rating}</p>
            <p>Name_date: {reviews.name_date}</p>
            <p>content: {reviews.content}</p>
          </div>
        ))}
      </div>
    )

}
export default Reviews;