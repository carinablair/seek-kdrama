import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { DramaRow, DramaRowProps } from './DramaRow';

export default {
    title: 'Components/DramaRow',
    component: DramaRow,
} as Meta;

const Template: Story<DramaRowProps> = (args) => <DramaRow {...args} />

export const Dramas = Template.bind({});
Dramas.args = {
    dramas: [
        {
            imageUrl: 'https://image.tmdb.org/t/p/w500/bXo9sDqMmo4dEOPSPLR7sdYPTvz.jpg',
            title: 'Crash Landing on You',
        },
        {
            imageUrl: 'https://image.tmdb.org/t/p/w500/nr4BB5JoTyxrtaNVMECinuMzTMA.jpg',
            title: 'Her Private Life',
        },
        {
            imageUrl: 'https://image.tmdb.org/t/p/w500/urxYgfofFH2ZRl8DoUve2YipPFi.jpg',
            title: 'One Spring Night'
        },
        {
            imageUrl: 'https://image.tmdb.org/t/p/w500/3cbvygVSgmxN2r4f3nKE7uAv4Vg.jpg',
            title: 'Romance is a Bonus Book'
        },
        {
            imageUrl: 'https://image.tmdb.org/t/p/w500/sTNXMCASbNn7cSzcQ7DVazixnAc.jpg',
            title: 'Something in the Rain'
        },
        {
            imageUrl: 'https://image.tmdb.org/t/p/w500/7SLlbkzOJb8v9wXVYIcqozx2hxe.jpg',
            title: 'The King: Eternal Monarch'
        },
        {
            imageUrl: 'https://image.tmdb.org/t/p/w500/w6muIYgrx1XZFombs3N8owfgLwf.jpg',
            title: 'What\'s Wrong with Secretary Kim'
        }
    ]
};