import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './review.css'

const Review = (props) => {
  return (
    <section className={`review-card ${props.rootClassName} `}>
      <div className="review-stars">
        <svg viewBox="0 0 1024 1024" className="review-icon10">
          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="review-icon12">
          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="review-icon14">
          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="review-icon16">
          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="review-icon18">
          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
        </svg>
      </div>
      <main className="review-content">
        <p className="review-quote">
          {props.quote1 ?? (
            <Fragment>
              <span className="review-text1">
                <span>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.”
                </span>
              </span>
            </Fragment>
          )}
        </p>
        <div className="review-author1">
          <img
            alt={props.avatarAlt}
            src="/SectionImages/avatar_review-200h.jpg"
            className="review-avatar"
          />
          <div className="review-details">
            <h1 className="review-author2">{props.author}</h1>
            <label className="review-position">{props.position}</label>
          </div>
        </div>
      </main>
    </section>
  )
}

Review.defaultProps = {
  quote1: undefined,
  author: 'Sima Mosbacher',
  rootClassName: '',
  position: 'Manager',
  avatarAlt: 'image',
}

Review.propTypes = {
  quote1: PropTypes.element,
  author: PropTypes.string,
  rootClassName: PropTypes.string,
  position: PropTypes.string,
  avatarAlt: PropTypes.string,
}

export default Review
