import React, { Component } from 'react'

import { Link } from "gatsby"
import PropTypes from "prop-types"

import './Header.css'
import logo from '../images/browsing.svg'


export class Header extends Component {
  
    state = {
       hasScrolled:false
    }
  
  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll)
  }
   
  handleScroll=(event)=>{
    const scrollTop=window.pageYOffset
    if(scrollTop>50){
      this.setState({
        hasScrolled: true
      })
    }
    else{
      this.setState({
        hasScrolled: false
      })
    }
  }
  
  render() {
    return (
      <div className={this.state.hasScrolled? 'Header HeaderScrolled':'Header'}>
      <div className="HeaderGroup"> 
            <Link to="/"> <img src={logo} width="30"></img> </Link>
            <Link to="/courses">Courses</Link>
            <Link to="/downloads">downloads</Link>
            <Link to="/workshop">workshop</Link>
            <Link to="/buy"><button>Buy</button></Link>
      </div>
  
    </div>
  
    )
  }
}




Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


/* <header
style={{
  background: `rebeccapurple`,
  marginBottom: `1.45rem`,
}}
>
<div
  style={{
    margin: `0 auto`,
    maxWidth: 960,
    padding: `1.45rem 1.0875rem`,
  }}
>
  <h1 style={{ margin: 0 }}>
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
  </h1>
</div>
</header> */
