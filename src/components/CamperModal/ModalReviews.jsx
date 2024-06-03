import css from './camperModal.module.css';
import ReactStars from 'react-rating-stars-component';

const ModalReviews = ({ reviews }) => (
  <div className={css.modalFormFeatures}>
    {reviews.map((review, index) => (
      <div key={index}>
        <div className={css.reviewAvatartBox}>
          <p className={css.reviewAvatar}>{review.reviewer_name.charAt(0)}</p>
          <div>
            <p>
              <strong>{review.reviewer_name}</strong>
            </p>
            <ReactStars
              count={5}
              value={review.reviewer_rating}
              size={24}
              activeColor="#ffd700"
              edit={false}
            />
          </div>
        </div>
        <p>{review.comment}</p>
      </div>
    ))}
  </div>
);

export default ModalReviews;
