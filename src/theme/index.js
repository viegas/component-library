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
        white: '#fff',
        black: '#0c0d0e',
        orange: '#f48024',
        blue: '#0077cc',
        'blue-100': '#cfeafe',
        'blue-200': '#addafc',
        'blue-300': '#6cbbf7',
        'blue-400': '#379fef',
        'blue-500': '#0095ff',
        'blue-600': '#0077cc',
        'blue-700': '#0064bd',
        'blue-800': '#0054a3',
        'blue-900': '#004487',
        powder: '#e1ecf4',
        'powder-050': '#f4f8fb',
        'powder-100': '#e1ecf4',
        'powder-200': '#d1e5f1',
        'powder-300': '#b3d3ea',
        'powder-400': '#a0c7e4',
        'powder-500': '#7aa7c7',
        'powder-600': '#5b8db1',
        'powder-700': '#39739d',
        'powder-800': '#2c5777',
        'powder-900': '#1e3c52',
        green: '#5eba7d',
        'green-025': '#eef8f1',
        'green-050': '#dcf0e2',
        'green-100': '#cae8d4',
        'green-200': '#a6d9b7',
        'green-300': '#82ca9a',
        'green-400': '#5eba7d',
        'green-500': '#48a868',
        'green-600': '#3d8f58',
        'green-700': '#2f6f44',
        'green-800': '#29603b',
        'green-900': '#1e472c',
        yellow: '#fbf2d4',
        'yellow-050': '#fdf7e3',
        'yellow-100': '#fbf2d4',
        'yellow-200': '#f1e5bc',
        'yellow-300': '#e6d178',
        'yellow-400': '#e9c63f',
        'yellow-500': '#ddb624',
        'yellow-600': '#cea51b',
        'yellow-700': '#b89516',
        'yellow-800': '#9f8010',
        'yellow-900': '#826a0b',
        red: '#d1383d',
        'red-050': '#fdf3f4',
        'red-100': '#f9d3d7',
        'red-200': '#f4b4bb',
        'red-300': '#e87c87',
        'red-400': '#de535e',
        'red-500': '#d1383d',
        'red-600': '#c02d2e',
        'red-700': '#ac2726',
        'red-800': '#942121',
        'red-900': '#7a1819',
        gold: '#ffcc01',
        'gold-lighter': '#fff4d1',
        'gold-darker': '#f1b600',
        silver: '#b4b8bc',
        'silver-lighter': '#e8e8e8',
        'silver-darker': '#9a9c9f',
        bronze: '#caa789',
        'bronze-lighter': '#f2e9e1',
        'bronze-darker': '#ab825f',
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
