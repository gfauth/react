import React from 'react';
import { storiesOf } from '@storybook/react';

import HelloTitle from '.';

storiesOf('HelloTitle', module)
  .addWithInfo(
    'default',
    '',
    () => (
      <HelloTitle />
    ),
  );
