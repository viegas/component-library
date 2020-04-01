const theme = {
    spacings: {
        small: '5px',
        medium: '10px',
        large: '20px',
    },
    font: {
        size: {
            info: '12px',
            text: '16px',
            subTitle: '18px',
            title: '24px',
        },
        weight: {
            ligth: 300,
            regular: 400,
            semibold: 600,
            bold: 700,
            extraBold: 800,
        },
    },
    colors: {
        neutral: '#bbbbbb',
        'light-neutral': '#e4e4e4',
        'dark-red': '#e7040f',
        red: '#ff4136',
        'light-red': '#ff725c',
        orange: '#ff6300',
        gold: '#ffb700',
        yellow: '#ffde37',
        'light-yellow': '#fbf1a9',
        purple: '#5e2ca5',
        'light-purple': '#a463f2',
        'dark-pink': '#d5008f',
        'hot-pink': '#ff41b4',
        pink: '#ff80cc',
        'light-pink': '#ffa3d7',
        'dark-green': '#137752',
        green: '#19a974',
        'light-green': '#9eebcf',
        navy: '#001b44',
        'dark-blue': '#00449e',
        blue: '#357edd',
        'light-blue': '#96ccff',
        'lightest-blue': '#cdecff',
        'washed-blue': '#f6fffe',
        'washed-green': '#e8fdf5',
        'washed-yellow': '#fffceb',
        'washed-red': '#ffdfdf',
        white: '#ffffff',
        black: '#000000',
        transparent: '#ffffff00',
    },
    media: {
        breakpoints: {
            md: 768,
            lg: 1024,
        },
    },
};

export const mediaQueriesGenerator = (breakpoints) =>
    Object.keys(breakpoints).reduce((acc, breakpoint) => {
        const size = theme.media.breakpoints[breakpoint];
        const mediaQuery = `(min-width: ${size}px)`;

        acc[breakpoint] = `@media ${mediaQuery}`;
        return acc;
    }, {});

theme.media.query = mediaQueriesGenerator(theme.media.breakpoints);

export default theme;
