import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact141.css'

const Contact141 = (props) => {
  return (
    <div className="contact141-contact20 thq-section-padding">
      <div className="contact141-max-width thq-section-max-width">
        <div className="contact141-content1">
          <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
            <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
          </svg>
          <div className="contact141-contact-info1">
            <div className="contact141-content2">
              <h3 className="contact141-text1 thq-heading-3">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="contact141-text6">Email</span>
                  </Fragment>
                )}
              </h3>
            </div>
            <a
              href="mailto:dave@dav3.org?subject=Apex Fusion Staking"
              className="contact141-email1 thq-body-small"
            >
              {props.email1 ?? (
                <Fragment>
                  <span className="contact141-text9">dave@dav3.org</span>
                </Fragment>
              )}
            </a>
          </div>
        </div>
        <div className="contact141-content3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="contact141-icon3"
          >
            <path
              d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.6 18.6 0 0 0-5.487 0a12 12 0 0 0-.617-1.23A.08.08 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.1.1 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055a20 20 0 0 0 5.993 2.98a.08.08 0 0 0 .084-.026a14 14 0 0 0 1.226-1.963a.074.074 0 0 0-.041-.104a13 13 0 0 1-1.872-.878a.075.075 0 0 1-.008-.125q.19-.14.372-.287a.08.08 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.08.08 0 0 1 .079.009q.18.148.372.288a.075.075 0 0 1-.006.125q-.895.515-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.08.08 0 0 0 .084.028a20 20 0 0 0 6.002-2.981a.08.08 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028M8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38c0-1.312.956-2.38 2.157-2.38c1.21 0 2.176 1.077 2.157 2.38c0 1.312-.956 2.38-2.157 2.38m7.975 0c-1.183 0-2.157-1.069-2.157-2.38c0-1.312.955-2.38 2.157-2.38c1.21 0 2.176 1.077 2.157 2.38c0 1.312-.946 2.38-2.157 2.38"
              fill="currentColor"
            ></path>
          </svg>
          <div className="contact141-contact-info2">
            <div className="contact141-content4">
              <h3 className="contact141-text2 thq-heading-3">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="contact141-text8">Discord</span>
                  </Fragment>
                )}
              </h3>
            </div>
            <span className="contact141-email2 thq-body-small">
              {props.link1 ?? (
                <Fragment>
                  <span className="contact141-text4">sigsegv__11</span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="contact141-content5">
          <svg width="48" height="48" viewBox="0 0 48 48">
            <path
              d="M41.42 7.309s3.885-1.515 3.56 2.164c-.107 1.515-1.078 6.818-1.834 12.553l-2.59 16.99s-.216 2.489-2.159 2.922c-1.942.432-4.856-1.515-5.396-1.948c-.432-.325-8.094-5.195-10.792-7.575c-.756-.65-1.62-1.948.108-3.463L33.649 18.13c1.295-1.3 2.59-4.33-2.806-.65l-15.11 10.28s-1.727 1.083-4.964.109l-7.016-2.165s-2.59-1.623 1.835-3.246c10.793-5.086 24.068-10.28 35.831-15.15"
              fill="currentColor"
            ></path>
          </svg>
          <div className="contact141-contact-info3">
            <div className="contact141-content6">
              <h3 className="contact141-text3 thq-heading-3">
                {props.heading3 ?? (
                  <Fragment>
                    <span className="contact141-text5">Telegram</span>
                  </Fragment>
                )}
              </h3>
            </div>
            <span className="contact141-phone thq-body-small">
              {props.phone1 ?? (
                <Fragment>
                  <span className="contact141-text7">@dav3org</span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact141.defaultProps = {
  link1: undefined,
  heading3: undefined,
  heading1: undefined,
  phone1: undefined,
  heading2: undefined,
  email1: undefined,
}

Contact141.propTypes = {
  link1: PropTypes.element,
  heading3: PropTypes.element,
  heading1: PropTypes.element,
  phone1: PropTypes.element,
  heading2: PropTypes.element,
  email1: PropTypes.element,
}

export default Contact141
