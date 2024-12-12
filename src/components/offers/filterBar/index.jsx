import Filter from "./filter";
import Sort from "./sort";
import StyleFilterBar from "./style";

const FilterBar = () => {
  return (
    <StyleFilterBar>
      <Filter />
      <Sort />
      <div className="search">
        <input placeholder="Search" type="text" />
      </div>
    </StyleFilterBar>
  );
};

export default FilterBar;
