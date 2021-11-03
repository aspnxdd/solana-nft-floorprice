import {
  Container,
  SearchBarInput,
  SearchBarResults,
  Img,
  Row,
} from "./SearchBarElements";
import { useEffect, useState, useRef } from "react";
import _collections from "../cards/_collections";
import Link from "next/link";
import { useRouter } from "next/router";

// custom hook to hide div
function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}

const SearchBar = () => {
  const { asPath } = useRouter();
  console.log(asPath); // '/blog/xyz'

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);
  const [searchResults, setSearchResults] = useState([]);
  const searchbar = useRef(null);

  const [search, setSearch] = useState("");
  let _searchResults = [];
  let imgpath = "./static/images/";
  if (asPath !== "/") imgpath = "/static/images/";

  // query results
  useEffect(() => {
    setIsComponentVisible(true);
    setSearchResults([]);
    _searchResults = [];
    _collections.forEach((e) => {
      if (e.url.includes(search.toLowerCase()) && search !== "") _searchResults.push(e);
      console.log("searchResults", searchResults);
    });
    setSearchResults(_searchResults);
  }, [search]);

  // wipe results when losing focus
  useEffect(() => {
    if (!isComponentVisible) searchbar.current.value = "";
  }, [isComponentVisible]);

  // wipe results when changing page
  useEffect(() => {
    searchbar.current.value = "";
    setIsComponentVisible(false);
  }, [asPath]);

  return (
    <>
      <Container>
        <SearchBarInput
          ref={searchbar}
          placeholder="Search collection..."
          onChange={(event) => setSearch(event.target.value)}
        />
      </Container>

      {searchResults.length > 0 && isComponentVisible && (
        <SearchBarResults ref={ref}>
          <div>
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
          </div>
        </SearchBarResults>
      )}
    </>
  );
};

export default SearchBar;
