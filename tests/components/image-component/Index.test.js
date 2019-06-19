import React from 'react';
import { shallow } from 'enzyme';
import ImageComponent from './../../../src/components/image-component';

describe('ImageComponent', () => {

  it('Loads the "component.jpg" image', () => {
    const wrapper = shallow(<ImageComponent />);

    expect(
      wrapper.contains(<img role="presentation" src="test-file-stub" />)
    ).toEqual(true);
  });

});

