import React, { ReactChild, ReactNode, Component } from 'react';
import { Card } from '../components/Card';
import { Nav } from '../components/NavBar';
import { MediaCtr } from '../components/MediaCtr';
import { Section } from '../components/Section';
import * as Placeholder from './Placeholder';
import '../stylesheets/Heading.css';
import '../stylesheets/Templates.css';
import '../stylesheets/CustomLayouts.css';



const ElementsCards = (
  <Card
    className='comp-grid__card card--media-top comp-grid--TL'
    order={Placeholder.mediaTopOrder}
  >
    {{
      header: (
        <>
          <h2 className='heading heading--card'>Fusion Elements</h2>
        </>
      ),
      media: (
        <img src='https://material.angular.io/assets/img/examples/shiba2.jpg'></img>
      ),
      content: (
        <>
          <p
            className='p'
          >
            Dance competition hosted by Fusion BU in Boston. Usually takes place around April or May and VIBRVNCY handles their videography.
          </p>
        </>
      )
    }}
  </Card>
)

const PreludeNYCard = (
  <Card
    className='comp-grid__card card--media-top comp-grid--TR'
    order={Placeholder.mediaTopOrder}
  >
    {{
      header: (
        <>
          <h2 className='heading heading--card'>Prelude NY</h2>
        </>
      ),
      media: (
        <img src='https://material.angular.io/assets/img/examples/shiba2.jpg'></img>
      ),
      content: (
        <>
          <p
            className='p'
          >
            Dance competition held by Prelude. Usually hosted in the Bronx in NYC. They also hold an all-styles battle beforehand.
          </p>
        </>
      )
    }}
  </Card>
)

const DRCard = (
  <Card
    className='comp-grid__card card--media-top comp-grid--BL'
    order={Placeholder.mediaTopOrder}
  >
    {{
      header: (
        <>
          <h2 className='heading heading--card'>Defining Rythym</h2>
        </>
      ),
      media: (
        <img src='https://material.angular.io/assets/img/examples/shiba2.jpg'></img>
      ),
      content: (
        <>
          <p
            className='p'
          >
            Dance competition held in New Jersey. This competition is hosted by a student organization in NJIT and usually takes place in November.
          </p>
        </>
      )
    }}
  </Card>
)

const PreludeECCard = (
  <Card
    className='comp-grid__card card--media-top comp-grid--BR'
    order={Placeholder.mediaTopOrder}
  >
    {{
      header: (
        <>
          <h2 className='heading heading--card'>Prelude East Coast</h2>
        </>
      ),
      media: (
        <img src='https://material.angular.io/assets/img/examples/shiba2.jpg'></img>
      ),
      content: (
        <>
          <p
            className='p'
          >
            Dance competition held by Prelude, hosted by Project D. Competition takes place in December and Boat and Bridge handles the videography for the event.
          </p>
        </>
      )
    }}
  </Card>
)

const CompetitionNav = (
  <Nav
    id='competition-list'
    isPrimNavBar={false}
    itemClass='cntnt-list__item'
    listClass='cntnt-list--competition'
    header={(
      <h3
        className='heading heading--comp'
      >
        Competitions in the East Coast
      </h3>
    )}
  >
    <a
      href='https://www.facebook.com/bu.fusion/'
      target='_blank'
    >
      Elements
    </a>
    <a
      href='http://www.preludedancecompetition.com/prelude-new-york/'
      target='_blank'
    >
      Prelude NY
    </a>
    <a
      href='https://definingrhythm.com/'
      target='_blank'
    >
      Defining Rythym
    </a>
    <a
      href='http://www.preludedancecompetition.com/prelude-dmv/'
      target='_blank'
    >Prelude DMV</a>
    <a
      href='http://www.preludedancecompetition.com/prelude-east-coast/'
      target='_blank'
    >Prelude EC</a>
  </Nav>
)

/* NOTE Needs state and need to pass it through props or something similar to track render state
Assuming its not using React Router's Static Router */
{/* <h2 className='heading comp-grid--heading'>Competitions in the East Coast</h2> */}

const CompetitionSec = (
  <Section
    className='section--competition comp-grid'
  >
    {{
      header: (
        null
      ),
      media: (
        <MediaCtr
          className='comp-grid--center'
        >
          {CompetitionNav}
        </MediaCtr>
      ),
      card: null,
      custom: ([ElementsCards, PreludeNYCard, DRCard, PreludeECCard])
    }}
  </Section>
)

export { CompetitionNav, CompetitionSec}