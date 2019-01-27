import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { AboutCard, AboutSec } from '../templates/AboutSec';
import { WhatIsCard, WhatIsSec } from '../templates/WhatIsUC';


import { BrowserRouter as BrowserRouter, Route, Link, Prompt, Switch } from 'react-router-dom';



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
