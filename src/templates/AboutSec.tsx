import React, { ReactChild, ReactNode, Component } from 'react';
import { Card } from '../components/Card';
import * as Placeholder from './Placeholder';
import { Section } from '../components/Section';
import '../stylesheets/Heading.css';
import '../stylesheets/Templates.css';

const { WhyCard, GenericMediaCtr } = Placeholder;

const AboutCard = (
  <Card
    className='card--basic'
  >
    {{
      header: (<h2 className='heading'>Why make this page in the first place  ?</h2>),
      content: (
        [WhyCard]
      )
    }}
  </Card>
)


const AboutSec = (
  <Section
    className='section--double-col'
    qtyColumns={2}
  >
    {
      {
        header: (
          <h1
            className=' heading heading--main'
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