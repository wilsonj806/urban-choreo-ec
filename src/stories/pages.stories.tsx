// NOTE This set of stories does NOT include the Nav Bar

import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { About } from '../pages/About';


import { BrowserRouter as BrowserRouter, Route, Link, Prompt, Switch } from 'react-router-dom';



storiesOf('Pages/ About', module)
  .add('About page with two sections', () => {
    return (
      <About/>
    )
  });
