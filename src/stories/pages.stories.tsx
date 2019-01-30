// NOTE This set of stories does NOT include the Nav Bar

import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { About } from '../pages/About';
import { EastCoastChoreo } from '../pages/EastCoastChoreo';


import { BrowserRouter as BrowserRouter, Route, Link, Prompt, Switch } from 'react-router-dom';



storiesOf('Pages/ About', module)
  .add('About page with two sections', () => {
    return (
      <About/>
    )
  });
storiesOf('Pages/ East Coast Choreo Scene', module)
  .add('East Coast Choreo page with two sections so far', () => {
    return (
      <EastCoastChoreo/>
    )
  });
