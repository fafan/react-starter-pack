import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Application from '../index';

storiesOf('Application', module)
  .add('default view', () => (
    <Application />
  ));
