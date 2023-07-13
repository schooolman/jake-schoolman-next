import Image from 'next/image';

const PortfolioItem = ({ title, description, imageUrl, id }) => {
  return (
    <div className="portfolio-item">
      <div className="image-container">
        <Image 
            src={imageUrl} 
            alt={title} 
            width={500}
            height={200}
        />
      </div>
      <div className="details-container">
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{id}</span>
      </div>
    </div>
  );
};


export default PortfolioItem;