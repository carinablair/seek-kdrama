import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Section, SectionProps } from './Section';

export default {
    title: 'Components/Section',
    component: Section,
} as Meta;

const Template: Story<SectionProps> = (args) => <Section {...args} />

export const Discover = Template.bind({});
Discover.args = {
    sectionName: 'Discover',
    dramas: [{
        imageUrl: 'https://image.tmdb.org/t/p/w500/7SLlbkzOJb8v9wXVYIcqozx2hxe.jpg',
        title: 'The King: Eternal Monarch'
    },
    {
        imageUrl: 'https://image.tmdb.org/t/p/w500/4CrTjZ5MYdF5dtSockIStCkiX5C.jpg',
        title: 'Weightlifting Fairy Kim Bok-Joo'
    }
    ],
};

export const Favourites = Template.bind({});
Favourites.args = {
    sectionName: 'Favourites',
    dramas: [
        {
            imageUrl: 'https://image.tmdb.org/t/p/w500/bXo9sDqMmo4dEOPSPLR7sdYPTvz.jpg',
            title: 'Crash Landing on You',
        },
        {
            imageUrl: 'https://image.tmdb.org/t/p/w500/3cbvygVSgmxN2r4f3nKE7uAv4Vg.jpg',
            title: 'Romance is a Bonus Book'
        },
        {
            imageUrl: 'https://image.tmdb.org/t/p/w500/urxYgfofFH2ZRl8DoUve2YipPFi.jpg',
            title: 'One Spring Night'
        }
    ]
};