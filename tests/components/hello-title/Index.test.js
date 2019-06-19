import React from 'react';
import { shallow } from 'enzyme';
import HelloTitle from './../../../src/components/hello-title';

describe('HelloTitle', () => {

  it('Welcome renders hello world', () => {
    const helloTitle = shallow(<HelloTitle />);

    expect(helloTitle.find('h1').text()).toEqual('Hello fillet.');
  });

});
