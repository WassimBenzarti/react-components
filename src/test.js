import React from "react";
import {Flex} from './'
import Enzyme, {shallow} from "enzyme"

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Flex', () => {
  it('should show the children', () => {
   expect(Flex).toBeTruthy();
  })

})
