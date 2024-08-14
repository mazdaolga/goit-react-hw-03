import { useId } from "react";
import css from "./SearchBox.module.css";
const SearchBox = ({ value, onChange }) => {
  const inputId = useId();
  const handleChange = (evt) => {
    onChange(evt.target.value);
  };
  return (
    <div className={css.filtercontainer}>
      <label className={css.filterlabel} htmlFor={inputId}>
        Find contact by name
      </label>
      <input
        className={css.filterinput}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;