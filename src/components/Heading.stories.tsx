import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Heading, HeadingProps } from './Heading';

export default {
    title: 'Components/Heading',
    component: Heading,
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />

export const Discover = Template.bind({});
Discover.args = { heading: 'Discover' };

export const Favourite = Template.bind({});
Favourite.args = { heading: 'Favourite' };