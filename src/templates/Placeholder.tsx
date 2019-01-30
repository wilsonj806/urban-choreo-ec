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
  Video,
  Video2,
  mediaTopOrder,
};