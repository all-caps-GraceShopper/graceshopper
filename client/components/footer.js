import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="Container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-5 col-sm-6">
              <h5 className="title-column">Contact Us</h5>
              <ul className="list-unstyled">
                <li>Email: allcaps@gh.com</li>
                <li>Tel: 123.456.7890</li>
                <li>
                  <a href="/">GitHub</a>
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-6 col-sm-6">
              <h5 className="title-column">Team Members</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Yanna Skorokhodova</a>
                </li>
                <li>
                  <a href="/">Kade Cahe</a>
                </li>
                <li>
                  <a href="/">Virginie Bonnet</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom: copyrights */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} All-Caps App - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 1rem;
    padding-left: 30rem;
    color: var(--mainLightGrey);
    font-family: sans-serif;
    font-size: 14px;
    display: flex;
    position: relative;
    alignitems: center;
  }

  .footer-bottom {
    padding-top: 1rem;
    padding-bottom: 1rem;
    align-item: center;
  }

  ul li a {
    color: var(--mainLightGrey);
  }
  ul li a:hover {
    color: var(--mainLightPurple);
  }

  .title-column {
    font-size: 18px;
    text-align: center;
  }
`
