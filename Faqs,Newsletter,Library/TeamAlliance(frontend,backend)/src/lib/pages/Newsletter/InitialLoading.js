import React, { Fragment } from "react";
import LoadingCard from "../../components/newsletter/LoadingCard";

const InitialLoading = ({ count }) => {
  return (
    <Fragment>
      {count === 0
        ? Array(7)
            .fill()
            .map((_, i) => <LoadingCard key={i} />)
        : Array(9 - (--count % 3))
            .fill()
            .map((_, i) => <LoadingCard key={i} />)}
    </Fragment>
  );
};

export default InitialLoading;
