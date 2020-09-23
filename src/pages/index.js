import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br /> design and create webapps</h1>
        <p>Welcome to your new Gatsby Now go build something 
          backing  down hollow it's to shallow !!!
        </p>
       <Link to="/page-2/">Watch here</Link>
       <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-studio.png')} width="50" />
          <img src={require('../images/logo-framer.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-swift.png')} width="50" />
        </div>
        <Wave/>
      </div>
      </div>
      <div className="Cards">
          <h2>11 courses,more coming</h2>
          <div className="CardGroup">
              <Card  title="React for Designers" text="12 sections" image={require('../images/wallpaper.jpg')}/>
              <Card  title="React for Designers" text="12 sections" image={require('../images/wallpaper.jpg')}/>
              <Card  title="React for Designers" text="12 sections" image={require('../images/wallpaper.jpg')}/>
              <Card  title="React for Designers" text="12 sections" image={require('../images/wallpaper.jpg')}/>
            </div>
      </div>
      <Section 
        image={require('../images/wallpaper.jpg')}
        logo={require('../images/logo-react.png')}
        title={"React for designers"}
        text="Learn how to build a modren website from scratch with the help
        of exquisite styling features.This version has deprecated ,eventually
        we gonna deploy. The crux while deploying is that no unused variable should be
        left in our app."
     />
  </Layout>
)

export default IndexPage
