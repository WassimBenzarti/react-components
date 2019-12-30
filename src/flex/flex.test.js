import React from "react";
import Flex from "."
import Enzyme, {shallow} from "enzyme"

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Flex', () => {
  it('should show the children', () => {
    expect(Flex).toBeTruthy()
    const text = "Hello world";
    let element = shallow(<Flex>{text}</Flex>);
    expect(element.text()).toEqual(text);
  })

  it("should set the style correctly", ()=>{
    let element = shallow(<Flex justifyContent="center" alignItems="center" row></Flex>);
    expect(element.html()).toMatchSnapshot();
  })

})
