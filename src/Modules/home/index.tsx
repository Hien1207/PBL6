/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'

import { E_LEARNING_LOGO } from '@assets'
import { Wrapper } from './styled'

const HomeScreen = () => (
  <Wrapper id="intro">
    <div className="row h-fluid-min-100 intro-0-2-5">
      <div className="col-lg-6 col-12 introImageWrapper-0-2-6">
        <div className="introImage-0-2-7" />
      </div>
      <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center introContentWrapper-0-2-8">
        <div>
          <h1 className="display-1 mb-4">Welcome to Booking Online</h1>
          <p className="display-6 mb-4">Everything is thought to make it easy.</p>
          <p className="h2 mb-5">Take your coffee and <span className="text-info">focus on your business.</span></p>
        </div>
      </div>
    </div>
  </Wrapper>
)

export default HomeScreen
