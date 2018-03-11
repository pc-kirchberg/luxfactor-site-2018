import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'
import "./main.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="LUXFACTOR 2018"
      meta={[
        { name: 'description', content: 'The sixth annual talent show of ESL 1' },
      ]}
    />
    <div
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
