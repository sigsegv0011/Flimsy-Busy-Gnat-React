import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Flimsy Busy Gnat</title>
        <meta property="og:title" content="Flimsy Busy Gnat" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11">About DAVE</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text12">Contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text13">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text14">About Me</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text15">Services</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text16">Contact</span>
          </Fragment>
        }
        link21={
          <Fragment>
            <span className="home-text17">About DAVE</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text18">Delegate to DAVE</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text19">Apex Fusion</span>
          </Fragment>
        }
        logoSrc="/dn_logo_4-1500h.jpg"
        link1Url="https://dav3.org"
        link2Url="#Features24"
        link2Url1="#Footer4"
        rootClassName="navbar8root-class-name"
        page1Description={
          <Fragment>
            <span className="home-text20">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text21">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text23">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <div className="home-header78">
        <div
          id="about"
          className="home-column thq-section-max-width thq-section-padding"
        >
          <div className="home-content1">
            <h1 className="home-text24 thq-heading-1">
              DAVE - An Apex Fusion Prime Stakepool
            </h1>
            <p className="home-text25 thq-body-large">
              The DAVE stakepool is contributing to the decentralization of the
              Apex Fusion network by operating a stakepool on the Prime
              blockchain. It is hosted on cloud servers in the US and Europe.
              Dave has over 20 years of experience in the IT industry and has
              been in the cryptocurrency space since 2020.  
            </p>
          </div>
          <div className="home-actions">
            <a
              href="https://dav3.org"
              target="_blank"
              rel="noreferrer noopener"
              className="home-button1 thq-button-filled"
            >
              <span className="thq-body-small">Delegate to DAVE</span>
            </a>
            <button className="thq-button-outline home-button2">
              <span className="thq-body-small">Apex Fusion</span>
            </button>
          </div>
        </div>
        <div className="home-content2"></div>
        <div>
          <div className="home-container3">
            <Script
              html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
            ></Script>
          </div>
        </div>
      </div>
      <Features24
        features24Id="Features24"
        feature1Title={
          <Fragment>
            <span className="home-text28">Secure Infrastructure</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text29">Dedicated Support</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text30">Competitive Rewards</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text31">
              The DAVE pool uses proven, reliable technology to ensure security
              and stability. Our pools and relays run on versions of Linux that
              are known to be stable with excellent developer and community
              support. 
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text32">
              Our stakepool is monitored using industry-standard tools and
              methods, alerting us immediately if an issue should arise. 
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text33">
              We keep our fees reasonable so you can maximize your staking
              rewards! 
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text34">Delegate Now</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text35">
              Join our stakepool and start earning rewards!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text36">Delegate your AP3X today</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text37">Secure Staking</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text38">Reliable Rewards</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text39">Transparent Operations</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text40">
              Your AP3X is securely staked with our pool, ensuring the safety of
              your investment. The tokens never leave your wallet - you are free
              to spend them as you like. There&apos;s no lockup period, and we
              never take custody of your tokens. 
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text41">
              Our stakepool is proactively monitored and maintenance is
              scheduled in between blocks to ensure consistent block production.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text42">
              We operate with full transparency, providing visibility into our
              pool&apos;s performance and activities.
            </span>
          </Fragment>
        }
      ></Features25>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text43">Learn About Apex Fusion</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text44">Choose a Wallet</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text45">Delegate to Stakepool</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text46">Earn Rewards</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text47">
              Understand the fundamentals of the Apex Fusion architecture and
              its staking mechanism.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text48">
              Select a suitable wallet to store your AP3X and delegate your
              stake to the pool.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text49">
              Search for and delegate your AP3X to the DAVE stakepool to start
              earning rewards.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text50">
              Sit back and relax as you earn rewards for participating in the
              Apex Fusion network!
            </span>
          </Fragment>
        }
      ></Steps2>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text51">
              Our stakepool&apos;s servers are hosted in multiple locations to
              ensure continuity of service.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text52">Locations</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text53">Virginia, USA</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text54">Nuremburg, Germany</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4 footer4Id="Footer4"></Footer4>
    </div>
  )
}

export default Home
