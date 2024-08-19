import '../styles/overlay-container.css';

const OverlayContainer = ({ title, description, children }) => {
  return (
    <div className='overlay-container'>
      <div className='overlay-content'>
        {title && <h2 className='overlay-title'>{title}</h2>}
        {description && <p className='overlay-description'>{description}</p>}
        <div className='overlay-info'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default OverlayContainer;
