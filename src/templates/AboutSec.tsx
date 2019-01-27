import React, { ReactChild, ReactNode, Component } from 'react';
import { Card } from '../components/Card';
import * as Placeholder from './Placeholder';
import { Section } from '../components/Section';
import '../stylesheets/Heading.css';

const { GenericP, GenericP2, GenericMediaCtr } = Placeholder;

const AboutCard = (
  <Card
    className='card--basic'
  >
    {{
      header: (null),
      content: (
        [GenericP]
      )
    }}
  </Card>
)


const AboutSec = (
  <Section
    className='section--bg-light section--double-col'
  >
    {
      {
        header: (
          <h1
            className='heading--main'
          >
            About This Page
          </h1>
        ),
        media: (
          GenericMediaCtr
        ),
        card: (AboutCard)
      }
    }
  </Section>
)

export { AboutCard, AboutSec }