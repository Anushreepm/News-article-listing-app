import React, { useEffect, useState } from "react";
import Header from "./Header";
import NewsContainer from "./NewsContainer";
import axios from "axios";

function HindiPage() {
  const [topic, setTopic] = useState("world");
  const [state, setState] = useState({});
  const [favourites, setFavourites] = useState();
  const [hiddenNews, setHiddenNews] = useState();
  const [searchText, setSearchText] = useState("");

  const fetchTopic = async (topic) => {
    setTopic(topic);
    try {
      const url = `https://gnews.io/api/v4/top-headlines?lang=hi&topic=${topic}&q=${searchText}&token=a4aa21e761ad9337da6605848ae28aa5`;
      const res = await axios.get(url);
      const newData = res.data.articles.map((article) => {
        if (!hiddenNews[article.title]) {
          console.log("i was not hidden");
          if (favourites[article.title]) {
            return {
              ...article,
              isFav: true,
            };
          } else {
            return {
              ...article,
              isFav: false,
            };
          }
        }
      });
      console.log(newData);
      setState({
        ...res.data,
        articles: newData,
      });
    } catch (err) {
      return err;
    }
  };

  const setFavourite = (id, fav) => {
    if (fav) {
      console.log("i am in fav");
      const favourites = JSON.parse(localStorage.getItem("favourites"));
      delete favourites[id];
      localStorage.setItem("favourites", JSON.stringify(favourites));
      setFavourites(JSON.parse(localStorage.getItem("favourites")) || {});
    } else {
      const favourites = JSON.parse(localStorage.getItem("favourites"));
      favourites[id] = true;
      localStorage.setItem("favourites", JSON.stringify(favourites));
      setFavourites(JSON.parse(localStorage.getItem("favourites")) || {});
    }
  };

  const deleteNews = (id) => {
    const hideNews = JSON.parse(localStorage.getItem("hiddenNews"));
    hideNews[id] = true;
    localStorage.setItem("hiddenNews", JSON.stringify(hideNews));
    setHiddenNews(JSON.parse(localStorage.getItem("hiddenNews")) || {});
  };

  const searchValueFunction = (searchVal) => {
    setSearchText(searchVal);
  };

  useEffect(() => {
    const getItemFav = JSON.parse(localStorage.getItem("favourites"));
    const getItemHide = JSON.parse(localStorage.getItem("hiddenNews"));
    localStorage.setItem("favourites", JSON.stringify(getItemFav || {}));
    localStorage.setItem("hiddenNews", JSON.stringify(getItemHide || {}));

    setFavourites(JSON.parse(localStorage.getItem("favourites")) || {});
    setHiddenNews(JSON.parse(localStorage.getItem("hiddenNews")) || {});
  }, []);

  useEffect(() => {
    fetchTopic(topic);
  }, [favourites, topic, hiddenNews, searchText]);

  const commonProps = {
    fetchTopic: fetchTopic,
    state: state,
    setFavourite: setFavourite,
    deleteNews: deleteNews,
    topic: topic,
    searchValueFunction: searchValueFunction,
  };
  // console.log(favourites["hello"])
  console.log(state);
  return (
    <div className="main-container">
      <Header commonProps={commonProps} />
      <NewsContainer commonProps={commonProps} />
    </div>
  );
}

export default HindiPage;
