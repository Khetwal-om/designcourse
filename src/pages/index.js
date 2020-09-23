import React from "react"
import { Link } from "gatsby"
import staticdata from '../../staticdata.json'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"
import Cell from "../components/Cell"
import styled from 'styled-components'


const SectionCaption=styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`
const SectionCellGroup=styled.p`
   max-width: 800px;
   margin: 0 auto 100px;
   display: grid;
   grid-template-columns: repeat(2,1fr);
   grid-gap: 20px;
   grid-column-gap: 20px; 
   @media(max-width: 800px){
     grid-template-columns: repeat(1,1fr);
     padding: 0 20px;
   }
`






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

     <SectionCaption>12 sections</SectionCaption>
     <SectionCellGroup>
     {
       staticdata.cells.map(cell=>(
         <Cell title={cell.title} image={cell.image}/>
        ))
     }
     </SectionCellGroup>
  </Layout>
)

export default IndexPage

