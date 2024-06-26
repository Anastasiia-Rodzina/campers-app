import css from './camperList.module.css';
import CamperImage from './CamperImage';
import CamperTitle from './CamperTitle';
import CamperDetails from './CamperDetails';
import CamperFeatures from './CamperFeatures';
import { CamperButton } from '../../components/Button/Button';

const CamperCard = ({ camper, isFavorite, onToggleFavorite, onShowMore }) => {
  const {
    _id,
    gallery,
    name,
    price,
    rating,
    reviews,
    location,
    description,
    details,
    adults,
    transmission,
    engine,
  } = camper;

  return (
    <div className={css.camperCard} key={_id}>
      <CamperImage src={gallery[0]} alt={name} />
      <div className={css.camperCardRight}>
        <CamperTitle
          name={name}
          price={price}
          isFavorite={isFavorite}
          onToggleFavorite={() => onToggleFavorite(_id)}
        />
        <CamperDetails rating={rating} reviews={reviews} location={location} />
        <p className={css.camperDescription}>{description}</p>
        <CamperFeatures
          adults={adults}
          transmission={transmission}
          engine={engine}
          details={details}
        />
        <CamperButton onClick={() => onShowMore(camper)} />
      </div>
    </div>
  );
};

export default CamperCard;
