import '../styles/card.css';

const Card = ({ title, image, description }) => {
  return (
    <div className='card'>
      <img src={image} alt={title} className='image' />
      <h3 className='title'>{title}</h3>
      <p className='description'>{description}</p>
    </div>
  );
};

export default Card;
