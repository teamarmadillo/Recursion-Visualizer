import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render, configure } from 'enzyme';
import TitleBar from '../client/components/TitleBar.jsx';

configure({ adapter: new Adapter() });


describe('<TitleBar />', ()=>{

  const wrapper = shallow(<TitleBar />);

  it('Renders a <div> element', () => {
    expect(wrapper.type()).toEqual('div');
  });

  it('Has a nested <h1> tag', ()=>{
    expect(wrapper.contains(<h1>Recursion Visualizer</h1>));
  });
  
  it('Has a nested <p> tag', () => {
    expect(wrapper.contains(<p>
      Enter a function or use one of our pre-loaded functions
      to visualize recursive calls.  
    </p>)).toEqual(true);
  });

});