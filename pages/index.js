import Layout from '../components/MyLayout.js';
//import Carousel from '../components/Carousel.js';
import { Alert } from 'reactstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage/dist/react-fullpage-commonjs';

/**
const Index =() => (
    <Layout>
       <React.Fragment>
       <Alert color="primary">
        See you soon ........
      </Alert>
       </React.Fragment>
    </Layout>
)
**/

class Index extends React.Component{
  constructor(props){
    super(props)
  }
   
  render(){
    const opts = {
      scrollingSpeed: 1200,
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    };
    
    const FullpageWrapper = (opts)=>(
      <ReactFullpage
      {...opts}
      render={()=>{
        return(
          <ReactFullpage.Wrapper>
            <div className="section"><Alert color="primary">See you soon ........</Alert></div>
            <div className="section"><p>soon</p></div>
          </ReactFullpage.Wrapper>
        )
      }}
      />
    );
    
    return (
      <FullpageWrapper {...opts} />
    )
  }
  
}

export default Index;