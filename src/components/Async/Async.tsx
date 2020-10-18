import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../../hook/useFetch";

import { AsyncWrapper, AsyncContent } from "./Async.element";

import Loading from "../Loading/Loading";
import LinkList from "./LinkList";

function Async() {
  const history = useHistory();
  const [capitalValue, setCapitalValue] = useState("");

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCapitalValue(e.target.value);
  }

  function handleOnKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    switch (e.key) {
      case "Enter":
        if (capitalValue === "") return;
        history.push(`/async?city=${capitalValue}`);
        break;

      default:
        break;
    }
  }

  const requsetUrl = process.env.REACT_APP_DB_HOST + history.location.search;
  const { response, error, isLoading } = useFetch(requsetUrl, null);

  return (
    <AsyncWrapper>
      <LinkList />
      <div className="search-area">
        <input
          type="text"
          placeholder="Please enter the capital"
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
        />
      </div>
      <AsyncContent>
        {isLoading && <Loading />}
        {response && (
          <div className="capital-info">
            <p>City: {response.city}</p>
            <p>Weather : {response.current.weather}</p>
            <p>Date : {response.current.date.split("T")[0]}</p>
            <img src={response.image_url} alt="capital" />
            <p></p>
          </div>
        )}
        {error && <p className="error-log">{error.message}</p>}
      </AsyncContent>
    </AsyncWrapper>
  );
}

export default Async;
