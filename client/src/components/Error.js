
const Error = ({ updatePage }) => {
  return (
    <div>
      <button onClick={() => updatePage("query")}>Error Has occurred. Go back to Homepage</button>
    </div>
  )
}

export default Error;