const ShopFiltering = ({
  filters,
  filtersState,
  setFiltersState,
  clearFilters,
}) => {
  return (
    <>
      <div className="flex-shrink-0 space-y-2">
        <h3>Filters</h3>

        <div className="flex flex-col space-y-2">
          <h4 className="font-medium text-lg">Category</h4>
          <hr />
          {filters.categories.map((category) => (
            <label key={category} className=" cursor-pointer capitalize">
              <input
                type="radio"
                name="category"
                id="color"
                value={category}
                checked={filtersState.category === category}
                onChange={(e) =>
                  setFiltersState({
                    ...filtersState,
                    category: e.target.value,
                  })
                }
              />
              <span className="ml-1">{category}</span>
            </label>
          ))}
        </div>

        <div className="flex flex-col space-y-2">
          <h4 className="font-medium text-lg">Color</h4>
          <hr />
          {filters.colors.map((color) => (
            <label key={color} className=" cursor-pointer capitalize">
              <input
                type="radio"
                name="color"
                id="color"
                value={color}
                checked={filtersState.color === color}
                onChange={(e) =>
                  setFiltersState({
                    ...filtersState,
                    color: e.target.value,
                  })
                }
              />
              <span className="ml-1">{color}</span>
            </label>
          ))}
        </div>

        <div className="flex flex-col space-y-2">
          <h4 className="font-medium text-lg">Price Range</h4>
          <hr />
          {filters.priceRange.map((range) => (
            <label key={range.label} className=" cursor-pointer capitalize">
              <input
                type="radio"
                name="price range"
                id="price range"
                value={`${range.min} - ${range.max}`}
                checked={
                  filtersState.priceRange === `${range.min} - ${range.max}`
                }
                onChange={(e) =>
                  setFiltersState({
                    ...filtersState,
                    priceRange: e.target.value,
                  })
                }
              />
              <span className="ml-1">{range.label}</span>
            </label>
          ))}
        </div>
        <button onClick={clearFilters} className="btn">
          Clear All Filters
        </button>
      </div>
    </>
  );
};

export default ShopFiltering;
