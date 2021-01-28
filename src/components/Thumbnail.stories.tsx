import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Thumbnail, ThumbnailProps } from './Thumbnail';

export default {
  title: 'Components/Thumbnail',
  component: Thumbnail,
} as Meta;

const Template: Story<ThumbnailProps> = (args) => <Thumbnail {...args} />

export const CrashLandingOnYou = Template.bind({});
CrashLandingOnYou.args = {
  imageUrl: 'https://image.tmdb.org/t/p/w500/bXo9sDqMmo4dEOPSPLR7sdYPTvz.jpg',
  title: 'Crash Landing on You',
};

export const RomanceIsABonusBook = Template.bind({});
RomanceIsABonusBook.args = {
  imageUrl: 'https://image.tmdb.org/t/p/w500/3cbvygVSgmxN2r4f3nKE7uAv4Vg.jpg',
  title: 'Romance is a Bonus Book',
};
