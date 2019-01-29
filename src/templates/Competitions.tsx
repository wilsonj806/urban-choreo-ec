import React, { ReactChild, ReactNode, Component } from 'react';
import { Card } from '../components/Card';
import { Nav } from '../components/NavBar';
import { MediaCtr } from '../components/MediaCtr';
import { Section } from '../components/Section';
import * as Placeholder from './Placeholder';
import '../stylesheets/Heading.css';

const CompetitionNav = (
  <Nav
    isPrimNavBar={false}
    itemClass='cntnt-list__item'
    listClass='cntnt--competition'
  >
    <a href=''>Elements</a>
    <a href=''>Prelude NY</a>
    <a href=''>Defining Rythym</a>
    <a href=''>Prelude EC</a>
  </Nav>
)

// NOTE probably needs state if not using React Router

const CompetitionSec = (
  <Section
    className='dab'

  >
    {{
      header: (
        <h2 className='heading heading--main'>Competitions in the East Coast</h2>
      ),
      media: (
        <MediaCtr>
          {CompetitionNav}
        </MediaCtr>
      ),
      card: null,
      custom: null
    }}
  </Section>
)

export { CompetitionNav, CompetitionSec}