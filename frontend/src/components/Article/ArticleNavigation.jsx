import React from "react";
import PropTypes from "prop-types";

function ArticleNavigation({
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
  previousTitle,
  nextTitle,
}) {
  return (
    <div className="navigation">
      {hasPrevious && (
        <div className="previous">
          <button type="button" onClick={onPrevious}>
            <p>← Précédent</p>
            <div>{previousTitle}</div>
          </button>
        </div>
      )}
      {hasNext && (
        <div className="next">
          <button type="button" onClick={onNext}>
            <p>Suivant →</p>
            <div>{nextTitle}</div>
          </button>
        </div>
      )}
    </div>
  );
}

ArticleNavigation.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool.isRequired,
  hasNext: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/require-default-props
  previousTitle: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  nextTitle: PropTypes.string,
};

export default ArticleNavigation;
