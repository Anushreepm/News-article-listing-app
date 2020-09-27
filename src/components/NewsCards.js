import React, { useState, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";

function NewsCards(props) {
  const history = useHistory();
  const { commonProps } = props;
  const { state, setFavourite, deleteNews } = commonProps;

  const cardJSX =
    Object.keys(state).length !== 0 ? (
      state.articles.map((article) => {
        if (article) {
          return (
            <div className="news-card-layout" key={article.title}>
              <div
                className="news-card"
                // onClick = {e => window.location.href = article.url}
              >
                <div className="favourite" id={article.title}>
                  {!article.isFav && (
                    <img
                      src="/001-star-black.png"
                      alt="black"
                      id={article.title}
                      onClick={(e) =>
                        setFavourite(article.title, article.isFav)
                      }
                    />
                  )}
                  {article.isFav && (
                    <img
                      src="/001-star.png"
                      alt="gold"
                      // id={data.imdbID}
                      onClick={(e) =>
                        setFavourite(article.title, article.isFav)
                      }
                    />
                  )}
                </div>
                <div className="img">
                  <img
                    src={`${article.image}`}
                    height="100%"
                    width="100%"
                    alt="news"
                  />
                </div>
                <div className="title">{article.title}</div>
                <div className="description">
                  Author : {article.source.name}
                </div>
                <div className="description">
                  Published on :{" "}
                  {`${article.publishedAt.split("-")[2].split("")[0]}${
                    article.publishedAt.split("-")[2].split("")[1]
                  }-${article.publishedAt.split("-")[1]}-${
                    article.publishedAt.split("-")[0]
                  }`}
                </div>
                <div className="redirect-news">
                  <a href={article.url} target="_blank">
                    click here for full news article
                  </a>
                </div>
                <div
                  className="hide-card"
                  onClick={(e) => deleteNews(article.title)}
                >
                  Hide news
                </div>
              </div>
            </div>
          );
        }
      })
    ) : (
      <div></div>
    );

  return (
    <div className="news-card-container">
      {/* {Response && cardJSX} */}
      {Object.keys(state).length !== 0 && cardJSX}
      {/* {!Response && <h1>Unable to fetch records, please try again</h1>} */}
    </div>
  );
}

export default NewsCards;
