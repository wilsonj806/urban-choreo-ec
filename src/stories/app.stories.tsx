import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { AboutCard, AboutSec } from '../templates/AboutSec';
import { WhatIsCard, WhatIsSec } from '../templates/WhatIsUC';


import { BrowserRouter as BrowserRouter, Route, Link, Prompt, Switch } from 'react-router-dom';

import { App } from '../App';

storiesOf('Full app', module)
  .add('full app', () => {
    return (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    )
  })