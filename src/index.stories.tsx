/* NOTE below two imports are REQUIRED
ALSO for tsconfig.json you DON'T want
  {
  "noemit": true,
}
Either remove it or set it to false
*/

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Nav } from './components/Nav';
import { App } from './App';

// NOTE import the component itself into the storybook index file you want to test
// So Node's module.exports, exports an object that you need to call???
const Button =  require('@storybook/react/demo').Button;

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));

storiesOf('Nav', module)
    .add('default', () => <Nav></Nav>);

storiesOf('App', module)
.add('default', () => <App/>);