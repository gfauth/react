import React from 'react';
import { storiesOf } from '@storybook/react';

import ImageComponent from '.';

storiesOf('ImageComponent', module)
  .addWithInfo(
    'default',
    '',
    () => (
      <ImageComponent />
    ),
  );
