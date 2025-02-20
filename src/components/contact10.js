import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact10-text5">Locations</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact10-text7">
                    Our stakepool&apos;s servers are hosted in multiple
                    locations to ensure continuity of service.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt="Manassas"
              src="/960px-2016-10-11_14_15_20_view_north_along_virginia_state_route_28_(center_street)_at_battle_street_in_manassas%2C_virginia-1400w.jpg"
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text3 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact10-text8">Virginia, USA</span>
                </Fragment>
              )}
            </h3>
            <div className="contact10-container3"></div>
          </div>
          <div className="contact10-container4">
            <img
              alt="Nuremburg"
              src="/1083px-n%C3%A3%C2%BCrnberger_burg_im_herbst_2013-1400w.jpg"
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text4 thq-heading-3">
              {props.location2 ?? (
                <Fragment>
                  <span className="contact10-text6">Nuremburg, Germany</span>
                </Fragment>
              )}
            </h3>
            <div className="contact10-container5"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location2ImageAlt: 'image2Alt',
  heading1: undefined,
  location2: undefined,
  content1: undefined,
  location1: undefined,
}

Contact10.propTypes = {
  location2ImageAlt: PropTypes.string,
  heading1: PropTypes.element,
  location2: PropTypes.element,
  content1: PropTypes.element,
  location1: PropTypes.element,
}

export default Contact10
