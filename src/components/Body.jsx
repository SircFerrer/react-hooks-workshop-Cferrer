import React from "react";
import CardPost from "./CardPost";
import CardFilter from "./CardFilter";
import filters from "../data/filter";

const Body = ({ step, posts, image, setFilter}) => {
  return (
    <main>
      {step === 1 && (
        <div className="posts">
          {posts.map((post, index) => (
            <CardPost key={post.id} post={post} />
          ))}
        </div>
      )}

      {step === 2 && (
        <div className="filter-container">
          {filters.map(filter => (
            <CardFilter
              key={filter.name}
              image={image}
              filter={filter}
              setFilter={setFilter}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default Body;
