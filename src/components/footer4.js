import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Contact141 from './contact141'
import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer
      id={props.footer4Id}
      className="footer4-footer7 thq-section-padding"
    >
      <div className="footer4-max-width thq-section-max-width"></div>
      <Contact141
        link1={
          <Fragment>
            <span className="footer4-text1">sigsegv__11</span>
          </Fragment>
        }
        email1={
          <Fragment>
            <span className="footer4-text2">dave@dav3.org</span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="footer4-text3">@dav3org</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="footer4-text4">Email</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="footer4-text5">Discord</span>
          </Fragment>
        }
        heading3={
          <Fragment>
            <span className="footer4-text6">Telegram</span>
          </Fragment>
        }
      ></Contact141>
      <div className="footer4-credits">
        <div className="thq-divider-horizontal"></div>
        <div className="footer4-row">
          <div className="footer4-container">
            <span className="thq-body-small">© 2025 dav3.org</span>
          </div>
          <div className="footer4-footer-links"></div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  footer4Id: '',
}

Footer4.propTypes = {
  footer4Id: PropTypes.string,
}

export default Footer4
