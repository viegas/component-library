import React from "react";
import renderer from 'react-test-renderer';
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';

import 'jest-styled-components';


const renderStyledComponent = node => (
    renderer.create(<ThemeProvider theme={theme}>{node}</ThemeProvider>).toJSON()
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
