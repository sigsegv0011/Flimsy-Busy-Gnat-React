import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container1 thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">Discover the Power of Apex Fusion</h2>
            <p className="thq-body-large">
              <span>
                Apex Fusion is a blockchain platform that combines the world of
                UTXO and accounts-based models to make a best-in-class
                foundation for Web3 accessible to everyone.
              </span>
              <br></br>
              <br></br>
              <span>
                Our ecosystem brings together battle-tested technology from
                across the blockchain space to ensure security, scalability, and
                transaction speed for our builders everywhere.
              </span>
              <br></br>
            </p>
            <div className="steps2-actions">
              <a
                href="https://apexfusion.org/"
                target="_blank"
                rel="noreferrer noopener"
                className="steps2-button thq-button-animated thq-button-filled"
              >
                <span className="thq-body-small">
                  Visit Apex Fusion&apos;s website
                </span>
              </a>
            </div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2 className="thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="steps2-text35">
                      Learn About Apex Fusion
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text19 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text34">
                      Understand the fundamentals of the Apex Fusion ecosystem
                      and its staking mechanism.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text20 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2 className="thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="steps2-text33">Choose a Wallet</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text22 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text31">
                      Select a suitable wallet to store your AP3X and delegate
                      your stake to the pool.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text23 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2 className="thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="steps2-text30">Delegate to Stakepool</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text25 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text37">
                      Search for the DAVE pool and delegate your AP3X to our
                      stakepool to start earning rewards.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text26 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2 className="thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="steps2-text32">Earn Rewards</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text28 thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text36">
                      Sit back and relax as you earn rewards for contributing to
                      the decentralization of the Apex Fusion network.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text29 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step3Title: undefined,
  step2Description: undefined,
  step4Title: undefined,
  step2Title: undefined,
  step1Description: undefined,
  step1Title: undefined,
  step4Description: undefined,
  step3Description: undefined,
}

Steps2.propTypes = {
  step3Title: PropTypes.element,
  step2Description: PropTypes.element,
  step4Title: PropTypes.element,
  step2Title: PropTypes.element,
  step1Description: PropTypes.element,
  step1Title: PropTypes.element,
  step4Description: PropTypes.element,
  step3Description: PropTypes.element,
}

export default Steps2
