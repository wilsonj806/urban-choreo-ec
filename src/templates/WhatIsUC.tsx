import React, { ReactChild, ReactNode, Component } from 'react';
import { Card } from '../components/Card';
import * as Placeholder from './Placeholder';
import { Section } from '../components/Section';
import '../stylesheets/Heading.css';

const { GenericP, GenericP2, GenericMediaCtr, Video } = Placeholder;

const WhatIsCard = (
  <Card
    className='card--basic'
  >
    {{
      header: (<h3 className='heading'>A Brief Description</h3>),
      content: (
        [GenericP, GenericP2]
      )
    }}
  </Card>
)

const WhatIsSec = (
  <Section
    className='section--double-col'
  >
    {{
      header: ( <h1 className='heading--main'>What Is Urban Choreography?</h1>),
      media: (Video),
      card: (WhatIsCard)
    }}
  </Section>
)

export { WhatIsCard, WhatIsSec };