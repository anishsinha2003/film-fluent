

const TitleCard = ({updatePage, setListOfReviews, name, tags, actors, imageUrl, linkUrl}) => {
  const displayReviews = async (url) => {
    try {
      updatePage("loading")
      const response = await fetch('http://127.0.0.1:5000/display/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(url),
      });

      const responseData = await response.json();
      setListOfReviews(responseData.reviews);
      updatePage("reviews")

    } catch (error) {
      console.error('Error sending data to server:', error);
    }
  }

  return (
    <div>
      <p>Title: {name}</p>
      <p>tag: {tags}</p>
      <p>actors:</p>
      {actors.map((actorName, index) => (
        <p>{actorName}</p>
      ))}
      <img className="movie" alt="title" src={imageUrl}/>
      <button onClick={() => displayReviews(linkUrl)}>urlForThatTitle: {linkUrl}</button>
    </div>
  )
}

export default TitleCard;