import theme, { mediaQueriesGenerator } from './index';

describe('Theme', () => {
    describe('mediaQueriesGenerator', () => {
        it('Generate correctly the media query object', () => {
            const generatedObject = mediaQueriesGenerator(theme.media.breakpoints);

            const expected = {
                lg: '@media (min-width: 1024px)',
                md: '@media (min-width: 768px)',
            };

            expect(generatedObject).toEqual(expected);
        });
    });
});
