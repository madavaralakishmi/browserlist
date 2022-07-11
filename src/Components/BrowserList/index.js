import './index.css'

const BrowserList = props => {
  const {initialHistoryList, onclicking} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = initialHistoryList

  const onclicked = () => {
    onclicking(id)
  }

  return (
    <li>
      <div className="text">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p className="p1">{domainUrl}</p>
      </div>
      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="img1"
          onClick={onclicked}
          testid="delete"
        />
      </button>
    </li>
  )
}

export default BrowserList
