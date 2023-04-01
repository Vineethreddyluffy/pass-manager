import './item.css'

const colorArr = [
  'color1',
  'color2',
  'color3',
  'color4',
  'color5',
  'color6',
  'color7',
  'color8',
  'color9',
  'color10',
  'color11',
  'color12',
]

const GetItem = props => {
  const {item, deleteTheItem, showPass} = props
  const {web, username, password, id} = item

  const deleteItem = () => {
    deleteTheItem(id)
  }
  const num = Math.random() * colorArr.length
  const floored = Math.floor(num)
  const classOf = colorArr[floored]
  return (
    <li className="list-item">
      <p className={`low-head ${classOf}`}>{web[0].toUpperCase()}</p>
      <div className="list-cont">
        <p className="low-para2">{web}</p>
        <p className="low-para">{username}</p>
        {showPass ? (
          <p className="low-para">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars"
          />
        )}
      </div>
      <button
        type="button"
        className="delete-btn"
        onClick={deleteItem}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}
export default GetItem
