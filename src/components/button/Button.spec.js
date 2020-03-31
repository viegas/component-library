import Button from './Button';
import * as Styled from './Button.styles';
import theme from '../../../theme';

describe('<Button />', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<Button>Test</Button>);

        expect(wrapper).toMatchSnapshot();
    });

    styledComponentsSnapshots(Styled, ['Icon', 'BusyLoader']);
});
