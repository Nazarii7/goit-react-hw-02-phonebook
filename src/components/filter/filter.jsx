import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input type="name" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
