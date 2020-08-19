import Tag from './Tag';
import * as Styled from './Tag.styles';

describe('<Tag />', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<Tag text={'Some text'} />);
        expect(wrapper).toMatchSnapshot();
    });

    styledComponentsSnapshots(Styled, '*');
});
