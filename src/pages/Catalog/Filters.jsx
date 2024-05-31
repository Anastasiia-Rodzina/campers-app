import Input from '../../components/helpers/Input';
import css from './catalog.module.css';
import commonModuleCss from '../../common.module.css';

const Filters = ({ filters, handleFilterChange }) => (
  <div>
    <p className={commonModuleCss.detailsTitle}>Vehicle equipment</p>
    <div className={css.catalogSideFilters}>
      <Input
        type="checkbox"
        id="airConditioner"
        name="details"
        value="airConditioner"
        checked={filters.details.includes('airConditioner')}
        onChange={handleFilterChange}
        label="AC"
        icon="ac"
      />
      <Input
        type="checkbox"
        id="automatic"
        name="transmission"
        value="automatic"
        checked={filters.transmission.includes('automatic')}
        onChange={handleFilterChange}
        label="Automatic"
        icon="automatic"
      />
      <Input
        type="checkbox"
        id="kitchen"
        name="details"
        value="kitchen"
        checked={filters.details.includes('kitchen')}
        onChange={handleFilterChange}
        label="Kitchen"
        icon="kitchen"
      />
      <Input
        type="checkbox"
        id="TV"
        name="details"
        value="TV"
        checked={filters.details.includes('TV')}
        onChange={handleFilterChange}
        label="TV"
        icon="tv"
      />
      <Input
        type="checkbox"
        id="shower"
        name="details"
        value="shower"
        checked={filters.details.includes('shower')}
        onChange={handleFilterChange}
        label="Shower/WC"
        icon="shower"
      />
    </div>
    <p className={commonModuleCss.detailsTitle}>Vehicle type</p>
    <div className={css.catalogSideVanWrapper}>
      <Input
        type="radio"
        id="panelTruck"
        name="form"
        value="panelTruck"
        checked={filters.form.includes('panelTruck')}
        onChange={handleFilterChange}
        label="Van"
        icon="camper"
      />
      <Input
        type="radio"
        id="fullyIntegrated"
        name="form"
        value="fullyIntegrated"
        checked={filters.form.includes('fullyIntegrated')}
        onChange={handleFilterChange}
        label="Fully Integrated"
        icon="van"
      />

      <Input
        type="radio"
        id="alcove"
        name="form"
        value="alcove"
        checked={filters.form.includes('alcove')}
        onChange={handleFilterChange}
        label="Alcove"
        icon="van_alcove"
      />
    </div>
  </div>
);

export default Filters;
