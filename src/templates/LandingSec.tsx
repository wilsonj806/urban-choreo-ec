import React, { ReactChild, ReactNode, Component } from 'react';
import { Card } from '../components/Card';
import { Section } from '../components/Section';
import { MediaCtr } from '../components/MediaCtr';


import '../stylesheets/Shapes.css';
import '../stylesheets/Heading.css';

const LandingCard = (
  <Card
    className='card--landing'
  >
    {{
      header: (
        <h1
          className='heading heading--landing'>
            Urban Choreography on the East Coast
        </h1>
      ),
      content:(
        <h6
          className='heading heading--landing heading--subtitle'
        >
          A brief overview
        </h6>
      )
    }}
  </Card>
)

const LandingShapes = (
  <MediaCtr
    className='media--shapes'
    custom={true}
  >
    <div id='circle--1'></div>
    <div id='circle--2'></div>
    <div id='circle--3'></div>
    <div id='triangle--md'></div>
    <div id='parallelogram'></div>

  </MediaCtr>
)

const LandingSec = (
  <Section
    className='section--landing'
  >
    {{
      header: null,
      card: (LandingCard),
      custom: LandingShapes
    }}
  </Section>
)



export { LandingCard, LandingShapes, LandingSec };
