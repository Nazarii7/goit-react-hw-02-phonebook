import PropTypes from 'prop-types';
import css from './filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={css.labelFilter}>
    Find contacts by name...
    <input
      type="name"
      className={css.labelInput}
      value={value}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
