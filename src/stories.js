import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';

import './config/stylesheets/application.scss';

setAddon(infoAddon);

const req = require.context('../src/', true, /.stories.js$/);

configure(
  () => req.keys().forEach(filename => req(filename)),
  module,
);
