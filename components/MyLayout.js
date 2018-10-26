import dynamic from 'next/dynamic'
import React from 'react';
import Head from 'next/head';
import Header from './Header'
import Footer from './Footer'
//const Header = dynamic(import('./Header'));

import Styles from '../css/index.scss';

const layoutStyle = {
  margin: "80px 0px 0px 0px",
  padding: 20,
  border: '1px solid #DDD',
}

class Layout extends React.Component {
  static propTypes() {
    return {
      session: React.PropTypes.object.isRequired,
      providers: React.PropTypes.object.isRequired,
      children: React.PropTypes.object.isRequired,
      fluid: React.PropTypes.boolean,
      navmenu: React.PropTypes.boolean,
      signinBtn: React.PropTypes.boolean
    }
  }
  
  constructor(props){
    super(props);
  }
  
  
  render(){
    return(
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>{this.props.title || 'Next.js Project'}</title>
        <style dangerouslySetInnerHTML={{__html: Styles}}/>
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js"/>
      </Head>
      <Header />
      <main style={layoutStyle}>
        {this.props.children}
      </main>
      <Footer copyright={'Bubble'} />
    </React.Fragment>
    )
  }
}

export default Layout;