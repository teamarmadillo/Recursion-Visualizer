import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render, configure } from 'enzyme';
import TreeVisualizer from '../client/components/TreeVisualizer.jsx';
import Tree from 'react-tree-graph';

configure({ adapter: new Adapter() });

describe('<TreeVisualizer />', ()=>{

  const wrapper = shallow(<TreeVisualizer />);

  it('Renders a div element', ()=>{
    expect(wrapper.type()).toEqual('div');
  });

  it ('Contains a Tree Component', () => {
    expect(wrapper.contains(<Tree />)).toEqual(true);
  });

});

// tree component test isn't working correctly right now.. something about not having required props on it...?