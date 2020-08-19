import Button from './Button';
import * as Styled from './Button.styles';

import theme from '../../theme';

describe('<Button />', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<Button>Test</Button>);

        expect(wrapper).toMatchSnapshot();
    });
    it('Should render correctly with disabled prop', () => {
        const wrapper = shallow(<Button disabled>Test</Button>);

        expect(wrapper).toMatchSnapshot();
    });

    it('Should render correctly the busy loader', () => {
        const wrapper = shallow(<Button busy>Test</Button>);

        expect(wrapper).toMatchSnapshot();
    });

    describe('<Styled.Button />', () => {
        it('Check primary type', () => {
            const wrapper = renderStyledComponent(<Styled.Button type="primary" />);

            expect(wrapper).toHaveStyleRule('border', `solid 2px ${theme.colors.blue}`);
            expect(wrapper).toHaveStyleRule('background-color', theme.colors.blue);
            expect(wrapper).toHaveStyleRule('color', theme.colors.white);

            expect(wrapper).toMatchSnapshot();
        });

        it('Check secondary type', () => {
            const wrapper = renderStyledComponent(<Styled.Button type="secondary" />);

            expect(wrapper).toHaveStyleRule('border', `solid 2px ${theme.colors.blue}`);
            expect(wrapper).toHaveStyleRule('background-color', theme.colors.white);
            expect(wrapper).toHaveStyleRule('color', theme.colors.blue);

            expect(wrapper).toMatchSnapshot();
        });

        it('Check disabled type', () => {
            const wrapper = renderStyledComponent(<Styled.Button type="disabled" />);

            expect(wrapper).toHaveStyleRule('border', `solid 2px ${theme.colors['silver-darker']}`);
            expect(wrapper).toHaveStyleRule('background-color', theme.colors['silver-lighter']);
            expect(wrapper).toHaveStyleRule('cursor', 'not-allowed');

            expect(wrapper).toMatchSnapshot();
        });
    });

    styledComponentsSnapshots(Styled, ['LoaderWrapper']);
});
