import Loader from './Loader';
import * as Styled from './Loader.styles';

describe('<Loader />', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<Loader />);
        expect(wrapper).toMatchSnapshot();
    });

    styledComponentsSnapshots(Styled, '*');
});
