import React, { ReactChild, ReactNode, Component, Children } from 'react';
import { Card } from '../components/Card';
import { MediaCtr } from '../components/MediaCtr';
import { Section } from '../components/Section';
import '../stylesheets/Heading.css';

const GenericP = (
  <p
    className='p'
  >
    Phasellus lacinia fermentum enim, in varius est tincidunt at. Fusce ultricies nibh ut faucibus fringilla. Cras gravida eget risus et euismod. Vivamus imperdiet ligula a arcu aliquet bibendum id sed metus. Integer sed ornare sem, a laoreet erat. Suspendisse potenti. Nullam at dolor faucibus, commodo nunc quis, tristique justo. Maecenas sagittis convallis quam, nec efficitur nisi. Sed viverra tellus non consequat aliquet. Duis sit amet diam et leo feugiat pellentesque sit amet nec magna. Cras dui metus, bibendum sed rutrum nec, laoreet at dolor.
  </p>
)

const GenericMediaCtr = (
  <MediaCtr
    className='media--sm'
  >
    <img src='https://material.angular.io/assets/img/examples/shiba2.jpg'></img>
  </MediaCtr>
)

const AboutCard = (
  <Card
    className='card--lg-no-border'
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
    className='section--bg-light section--one-col'
  >
    {
      {
        header: (
          <h1
            className='heading heading--lg'
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