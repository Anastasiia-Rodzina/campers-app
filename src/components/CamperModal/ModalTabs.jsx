import css from './camperModal.module.css';

const ModalTabs = ({ activeTab, setActiveTab }) => (
  <div className={css.tabs}>
    <button
      className={activeTab === 'features' ? css.activeTab : ''}
      onClick={() => setActiveTab('features')}
    >
      Features
    </button>
    <button
      className={activeTab === 'reviews' ? css.activeTab : ''}
      onClick={() => setActiveTab('reviews')}
    >
      Reviews
    </button>
  </div>
);

export default ModalTabs;
