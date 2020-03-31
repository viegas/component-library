import React from "react";
import renderer from 'react-test-renderer';
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import 'jest-styled-components';


const renderStyledComponent = node => (
    renderer.create(node).toJSON()
);

const styledComponentsSnapshots = (Styled, components, blacklist = []) => {
    const componentsArray = components === '*' ?
        Object.keys(Styled).filter(component => !blacklist.includes(component))
        : components;

    componentsArray.forEach((component) => {
        describe(`<Styled.${component} />`, () => {
            it('Should render correctly', () => {
                const Comp = Styled[component];
                const wrapper = renderStyledComponent(<Comp />);

                expect(wrapper).toMatchSnapshot();
            });
        });
    });
};

global.React = React;
global.shallow = shallow;

global.renderStyledComponent = renderStyledComponent;
global.styledComponentsSnapshots = styledComponentsSnapshots;

configure({ adapter: new Adapter() });
