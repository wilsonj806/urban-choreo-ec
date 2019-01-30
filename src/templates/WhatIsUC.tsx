import React, { ReactChild, ReactNode, Component } from 'react';
import { Card } from '../components/Card';
import * as Placeholder from './Placeholder';
import { Section } from '../components/Section';
import '../stylesheets/Heading.css';
import '../stylesheets/Templates.css';

const { WhatIsP1, WhatIsP2, GenericMediaCtr, Video } = Placeholder;

const WhatIsCard = (
  <Card
    className='card--basic'
  >
    {{
      header: (<h3 className='heading'>A Brief Description</h3>),
      content: (
        [WhatIsP1, WhatIsP2]
      )
    }}
  </Card>
)

const WhatIsSec = (
  <Section
    className='section--double-col-rev section--bg-light'
    qtyColumns={2}
  >
    {{
      header: (
        <h2
          className='heading'
        >
          What Is Urban Choreography?
        </h2>
        ),
      media: (Video),
      card: (WhatIsCard)
    }}
  </Section>
)

export { WhatIsCard, WhatIsSec };