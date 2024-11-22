import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './card.css'

const Card = (props) => {
  return (
    <section className={`card-card ${props.rootClassName} `}>
      <div className="card-icon"></div>
      <main className="card-content">
        <h1 className="card-header">
          {props.header1 ?? (
            <Fragment>
              <span className="card-text1">
                <span>Sima Mosbacher</span>
              </span>
            </Fragment>
          )}
        </h1>
        <p className="card-description">{props.description}</p>
      </main>
    </section>
  )
}

Card.defaultProps = {
  header1: undefined,
  description:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
  rootClassName: '',
}

Card.propTypes = {
  header1: PropTypes.element,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Card
