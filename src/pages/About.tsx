import * as React from 'react';
 import { AboutSec } from '../templates/AboutSec';
import { WhatIsSec } from '../templates/WhatIsUC';



export class About extends React.Component<any, any> {
  render() {
    return (
      <article>
        {AboutSec}
        {WhatIsSec}
      </article>
    )
  }
}