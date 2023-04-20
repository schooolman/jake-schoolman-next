import Image from 'next/image';

const PortfolioItem = ({ title, description, imageUrl }) => {
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
      </div>
    </div>
  );
};

export default PortfolioItem;