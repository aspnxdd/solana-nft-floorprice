import {
  Container,
  SearchBarInput,
  SearchBarResults,
  Img,
  Row,
} from "./SearchBarElements";
import { useEffect, useState, useRef, useCallback } from "react";
import collections from "../cards/collections";
import Link from "next/link";
import { useRouter } from "next/router";
import useComponentVisible from "./useComponentVisible";

const SearchBar = () => {
  const { asPath } = useRouter();

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible();
  const [searchResults, setSearchResults] = useState([]);
  const searchbar = useRef(null);

  const [search, setSearch] = useState(null);

  const imgpath = asPath !== "/" ? "/static/images/" : "./static/images/";

  // query results
  useEffect(() => {
    setIsComponentVisible(true);
    const results = new Array();
    if (search) {
      for (const e of collections) {
        if (e.url.includes(search.toLowerCase()) && search !== null)
          results.push(e);
      }
    }
    setSearchResults(results);
  }, [search]);

  // wipe results when losing focus
  useEffect(() => {
    if (!isComponentVisible) searchbar.current.value = null;
  }, [isComponentVisible]);

  // wipe results when changing page
  useEffect(() => {
    searchbar.current.value = null;
    setIsComponentVisible(false);
  }, [asPath]);

  const onSetSearch = useCallback(
    (event) => setSearch(event.target.value),
    [setSearch]
  );
  return (
    <>
      <Container>
        <SearchBarInput
          ref={searchbar}
          placeholder="Search collection..."
          onChange={onSetSearch}
        />
      </Container>

      {searchResults.length > 0 && isComponentVisible && (
        <SearchBarResults ref={ref}>
          <>
            {searchResults.map((e) => {
              return (
                <Link href={`/fetch/${e.url}`} key={e.url}>
                  <Row>
                    <Img src={`${imgpath}${e.img}`}></Img>
                    {e.name}
                  </Row>
                </Link>
              );
            })}
          </>
        </SearchBarResults>
      )}
    </>
  );
};

export default SearchBar;
