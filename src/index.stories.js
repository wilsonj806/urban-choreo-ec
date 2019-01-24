// NOTE below two imports are REQUIRED

import React from 'react';
import { storiesOf } from '@storybook/react';

// NOTE import the component itself into the storybook index file you want to test
import { Button } from '@storybook/react/demo';

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));