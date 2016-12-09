import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Application from '../index';

const { describe, it } = global;

describe('Application', () => {
  it('should has text: Welcome to React', () => {
    const wrapper = mount(
      <div>
        <Application />
      </div>,
    );
    expect(wrapper.find('h2').text()).to.be.equal('Welcome to React');
  });
});
