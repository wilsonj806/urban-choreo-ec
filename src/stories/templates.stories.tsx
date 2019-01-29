import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { LandingCard, LandingShapes, LandingSec } from '../templates/LandingSec';
import { AboutCard, AboutSec } from '../templates/AboutSec';
import { WhatIsCard, WhatIsSec } from '../templates/WhatIsUC';
import { ChoreoECCard, ChoreoECSec } from '../templates/EastCoastDesc';
import { CompetitionNav, CompetitionSec } from '../templates/Competitions';


import { BrowserRouter as BrowserRouter, Route, Link, Prompt, Switch } from 'react-router-dom';



storiesOf('Mid level Templates/ Landing Section', module)
  .add('Landing card', () => {
    return (
      LandingCard
    )
  })
  .add('Landing Shapes', () => {
    return (
      LandingShapes
    )
  })
  .add('Landing Section', () => {
    return (
      LandingSec
    )
  });

storiesOf('Mid level Templates/ About Section', module)
  .add('About card', () => {
    return (
      AboutCard
    )
  })
  .add('About section', () => {
    return (
      AboutSec
    )
  });

storiesOf('Mid level Templates/ What is Urban Choreo Section', module)
  .add('What is UC Card', () => {
    return (
      WhatIsCard
    )
  })
  .add('What is UC section', () => {
    return (
      WhatIsSec
    )
  });

storiesOf('Mid level Templates/ Urban Choreo in the East Coast Section', module)
  .add('Choreo in the EC Card', () => {
    return (
      ChoreoECCard
    )
  })
  .add('Choreo in the EC section', () => {
    return (
      ChoreoECSec
    )
  });


  storiesOf('Mid level Templates/ Competitions in the East Coast Section', module)
  .add('Competitions Nav', () => {
    return (
      CompetitionNav
    )
  })
  .add('Choreo in the EC section', () => {
    return (
      CompetitionSec
    )
  });
