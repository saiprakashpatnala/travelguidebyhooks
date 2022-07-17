import './index.css'

const TravelItem = props => {
  const {details} = props
  const {name, description, imageUrl} = details
  return (
    <li className="list-item">
      <img src={imageUrl} alt={name} className="image" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}

export default TravelItem
