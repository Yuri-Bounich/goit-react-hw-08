import s from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice.js';
import { selectFilterValue } from '../../redux/selectors.js';

const SearchBox = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectFilterValue);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label className={s.input}>
      <span>Find contacts by name</span>
      <input type="text" value={query} onChange={handleChange} name="search" />
    </label>
  );
};

export default SearchBox;
