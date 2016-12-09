import { configure } from '@kadira/storybook';

const req = require.context('../src', true, /\/(.*)\/stories\/index.js$/)

function loadStories() {
  require('../themes/material.css');
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
