import React, { useCallback, useState } from "react";
import ResultContainer from "./ResultContainer";
import { debounce } from "./util/commonFunction";
import DisplayComponent from "./DisplayComponent";
import './AutoComplete.css'
function Autocomplete({ options }) {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedValDetails, setSelectedValDetails] = useState({});

  const searchHandler = (itemValue, options) => {
    let newfilterData = options.filter((ele) =>
      ele?.productName.toLowerCase().includes(itemValue.toLowerCase())
    );
    setFilteredData(newfilterData);
    setSelectedValDetails({})
  };

  const handleSearch = debounce(searchHandler, 300);

  const changeHandler = useCallback(
    (e, options) => {
      const inputValue = e.target.value;
      setQuery(inputValue);
      handleSearch(inputValue, options);
    },
    [handleSearch]
  );

  const selectHandler = useCallback((e) => {
    setQuery(e.target.textContent);
    setFilteredData([]);
    setSelectedValDetails(
      options.filter(
        (ele) => ele?.productName.toLowerCase() === e.target.textContent.toLowerCase()
      )[0]
    );
  }, [options]);

  return (
    <>
      <main>
        <input
          name="autoSearch"
          type="text"
          placeholder="Type something..."
          value={query}
          onChange={(e) => changeHandler(e, options)}
        />
        {filteredData?.length === 0 ? (
          <>
            {Object.values(selectedValDetails).length ? (
              <>
                <DisplayComponent product={selectedValDetails} />
              </>
            ) : (
              <p className="item no-result">No Result</p>
            )}
          </>
        ) : (
          <>
            <ResultContainer
              results={filteredData}
              selectHandler={selectHandler}
            />
          </>
        )}
      </main>
    </>
  );
}

export default Autocomplete;
