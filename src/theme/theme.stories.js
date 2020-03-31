import React from 'react';
import { storiesOf } from '@storybook/react';

import theme from './index';

const boxStyle = {
    padding: '20px',
    paddingTop: '0px',
    marginBottom: '20px',
    borderBottom: '1px solid gray',
};

const Theme = () => {
    return (
        <div>
            <div style={boxStyle}>
                <p>Spacings</p>
                <div style={{ backgroundColor: 'gray', overflow: 'hidden' }}>
                    {Object.keys(theme.spacings).map((key) => (
                        <div
                            style={{
                                backgroundColor: 'white',
                                marginLeft: theme.spacings[key],
                                marginBottom: theme.spacings[key]
                            }}
                        >
                            {key} - {theme.spacings[key]}
                        </div>
                    ))}
                </div>
            </div>
            <div style={boxStyle}>
                <p>Colors</p>
                <table>
                    <tbody>
                        {Object.keys(theme.colors).map((key) => (
                            <tr>
                                <td
                                    style={{
                                        background: theme.colors[key],
                                        padding: '20px',
                                        width: '33%',
                                    }}
                                />
                                <td
                                    style={{
                                        color: theme.colors[key],
                                        padding: '20px',
                                    }}
                                >
                                    Aa
                                </td>
                                <td
                                    style={{
                                        padding: '20px',
                                    }}
                                >
                                    {key} - {theme.colors[key]}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div style={boxStyle}>
                <p>Font Size</p>
                {Object.keys(theme.font.size).map((key) => (
                    <div style={{ fontSize: theme.font.size[key] }}>
                        {key} - {theme.font.size[key]}
                    </div>
                ))}
            </div>
            <div style={boxStyle}>
                <p>Font Weights</p>
                {Object.keys(theme.font.weight).map((key) => (
                    <div style={{ fontWeight: theme.font.weight[key] }}>
                        {key} - {theme.font.weight[key]}
                    </div>
                ))}
            </div>
        </div>
    );
};

storiesOf('Styles', module).add('theme.js', () => {
    return <Theme />;
});
