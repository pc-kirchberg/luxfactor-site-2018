import React from 'react'
import Link from 'gatsby-link'

import Button from '../components/Button'
import ContentRow from '../components/ContentRow'
import ApplyForm from '../components/ApplyForm'
import ScrollIcon from '../components/ScrollIcon'

const IndexPage = () => (
  <div>
    <ContentRow masthead>
      <h1>LUXFACTOR 2019</h1>
      <h2>15.03.2018</h2>
      <h2>19:00-21:30</h2>
      <ScrollIcon />
    </ContentRow>
    <div className="main-content">
      <ContentRow bg="alt">
        For the seventh year in a row, the yearly talent show LUXFACTOR will take
        place in the European School Luxembourg 1 Kirchberg! Students are
        welcome to participate either as performers, showing the school their
        talents, or spectators, voting on the best talent. At the end of the
        show, the performer with the most votes will win a prize.
      </ContentRow>
      <ContentRow fill>
        <p>
          Any student can participate with any act! (As long as it doesn't
          involve fire.) You can sing, dance, play an instrument, do magic,
          solve a Rubik's Cube, make bird noises while dressed as a pineapple...
          (Yes, people have done all that in previous years.)
        </p>
        <p>
          <small>
            (and we promise Marks Polakovs won't be there to judge you)
          </small>
        </p>
        <Button border>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfK0YhISrvLDa2tNgewMw4wQEfzynVQSNQHa7hfxU2sz2uAew/viewform?usp=sf_link" onClick={() => {
            if (window.fbq) {
              window.fbq("track", "CompleteRegistration");
            }
            return true;
          }}>
            Apply to participate
          </a>
        </Button>
      </ContentRow>
      <ContentRow>
        <strong>Prizes:</strong> To be announced :)
      </ContentRow>
      <ContentRow fill>
        <strong>Hosts:</strong> To be announced :)
        <br />
        <strong>Jury:</strong> To be announced :)
      </ContentRow>
      <ContentRow bg="alt">
        We'll announce details of ticket sales soon. Keep watching this website, or follow us on Facebook or Instagram
        for details!
      </ContentRow>
      <ContentRow footer>
        <small>
          Copyright 2019 &copy; Pupils' Committee ESL 1. All rights reserved.
        </small>
      </ContentRow>
    </div>
  </div>
)

export default IndexPage
