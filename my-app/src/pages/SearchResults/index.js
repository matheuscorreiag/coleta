import React from "react";
import ArrowHeader from "../../components/PageArrowHeader/ArrowHeader";
import SearchCards from "../../components/SearchCards/searchcards";

import "../../assets/styles/global.css";

const SearchResults = () => {
  /*   const user = true; */
  /*   const [items, setItems] = useState([]); */

  /*   const [id, setId] = useState([]); */

  /* useEffect(() => {
    api.get(`items?search=${search}`).then((response) => {
      const data = response.data.reverse();
      setItems(data);
    });
  }, []); */

  return (
    <>
      <ArrowHeader />
      <SearchCards />
    </>
  );
};

export default SearchResults;
