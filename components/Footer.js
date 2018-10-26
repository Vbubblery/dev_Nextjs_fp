import React from 'react'
import PropTypes from 'prop-types'
import StickyFooter from 'react-sticky-footer';
import { Alert,Badge } from 'reactstrap';

const Footer = (props) => {
  const now = new Date()

  return (
  <React.Fragment>
    <StickyFooter
      bottomThreshold={50}
      normalStyles={{
      backgroundColor: "#fff",
      }}
      stickyStyles={{
      backgroundColor: "rgba(255,255,255,.8)",
      }}>
      <div className="text-center border border-right-0 border-bottom-0 border-left-0">
        <Badge href="https://nodejs.org" color="primary">Node.js</Badge>
        <Badge href="https://reactjs.org" color="secondary">React.js</Badge>
        <Badge href="https://nextjs.org/" color="success">Next.js</Badge>
        <Badge href="#" color="danger">Danger</Badge>
        <Badge href="#" color="warning">Warning</Badge>
        <Badge href="#" color="info">Info</Badge>
        <Badge href="#" color="dark">Dark</Badge>
      </div>
      <p className="text-center text-black">
        <span>&copy; </span>
        <span>{now.getFullYear()} </span>
        <span>{props.copyright}</span>
      </p>
    </StickyFooter>
  </React.Fragment>
  )
}

Footer.propTypes = {
  copyright: PropTypes.string.isRequired,
}

export default Footer