import React, { ReactChild, ReactNode, Component } from 'react';
import { MediaCtr } from '../components/MediaCtr';

const mediaTopOrder = {0: 'media', 1:'header', 2:'content'};

const GenericP = (
  <p
  key={1}
    className='p'
  >
    Phasellus lacinia fermentum enim, in varius est tincidunt at. Fusce ultricies nibh ut faucibus fringilla. Cras gravida eget risus et euismod. Vivamus imperdiet ligula a arcu aliquet bibendum id sed metus. Integer sed ornare sem, a laoreet erat. Suspendisse potenti. Nullam at dolor faucibus, commodo nunc quis, tristique justo. Maecenas sagittis convallis quam, nec efficitur nisi. Sed viverra tellus non consequat aliquet. Duis sit amet diam et leo feugiat pellentesque sit amet nec magna. Cras dui metus, bibendum sed rutrum nec, laoreet at dolor.
  </p>
)

const GenericP2 = (
  <p
    key={2}
    className='p'
  >
    Sed varius euismod mi vel mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras quam sapien, semper id leo sed, gravida ultrices eros. Cras ipsum magna, mollis ut dui ac, blandit rutrum elit. Curabitur vulputate luctus lorem pulvinar maximus. Pellentesque dictum neque sed felis imperdiet ullamcorper. In imperdiet iaculis lectus sed bibendum. Praesent elementum laoreet sapien sit amet scelerisque. Nulla ultrices, justo vel aliquet suscipit, est nunc varius elit, sit amet fermentum libero justo ac risus. Sed nec sem urna. Etiam id mollis sem, et blandit libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In vulputate interdum lorem ut porttitor.
  </p>
)

const GenericMediaCtr = (
  <MediaCtr
    className='media--sm'
  >
    <img src='https://material.angular.io/assets/img/examples/shiba2.jpg'></img>
  </MediaCtr>
)

// NOTE For About Page

const WhyCard = (
  <p
    key={1}
    className='p'
  >
    So, as far as I can tell no one has really made a page dedicated to urban choreography in the East Coast yet. It's about the same for the West Coast although everyone there sort of knows each other already. As this project is being done only by me(for now), not every aspect of the East Coast community is going to be covered, and might not be as accurate as it could be. The page only aims to give a general overview of what urban choreography is like here.
  </p>
)

const WhatIsP1 = (
  <p
    key={2}
    className='p'
  >
    Urban Choreography is a label for choreographed dance that's made with a variety of dance styles. Usually said dance styles are street styles but for the most part its a blend of the dancer's background and the way they listen to music. The big thing for urban choreo is collegiate teams and the competitions where teams would build sets and showcase them.
  </p>
)

const WhatIsP2 = (
  <>
    <p
      key={3}
      className='p'
    >
      Something else to also mention is that the Urban Choreography/ Urban Dance label is kind of a general name for what we do. It's not meant to be an accurate reflection of what "urban dance" actually is but it's the name people are using so for now it will have to do.
    </p>
    <p
      className='p'
    >
      <a href='https://blog.steezy.co/what-is-urban-dance/'>Reference blog post by Steezy.co</a>
    </p>
  </>
)

// NOTE East Coast page

const ECDesc = (
  <p
    className='p'
  >
    The East Coast is where Hip-hop, breaking,  house, and other street styles was born, but urban choreography here only caught on around 2008. However, it's grown quite large in NYC with numerous competing teams, collegiate teams, and even high school teams. There's also a new effort now from choreographers to gain foundations in street styles to enhance their choreography.
  </p>
)

const Video = (
  <MediaCtr
  className='media--video-std'
  >
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/39J25wTaLaQ"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen={true}
    >
    </iframe>
  </MediaCtr>
)

const Video2 = (
  <MediaCtr
  className='media--video-std'
  >
    <iframe
      width="560"
      height="315"
      src="https://youtube.com/embed/Tnv2rAOV2ss"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen={true}
    >
    </iframe>
  </MediaCtr>
)

export {
  GenericP,
  GenericP2,
  GenericMediaCtr,
  WhyCard,
  WhatIsP1,
  WhatIsP2,
  ECDesc,
  Video,
  Video2,
  mediaTopOrder,
};