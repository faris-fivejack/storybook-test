import React from 'react';
import { withDesign } from 'storybook-addon-designs'


import { Button } from './Button';
export default {
  title: 'Search Button',
  component: Button,
  decorators: [withDesign],
  argTypes: {
    backgroundColor: { control: 'color' }
  },
}

export const myStory = (args) => <Button {...args}  />
  myStory.parameters = {
    design:{
      type: 'figma',
      url: 'https://www.figma.com/file/6pWgh84KJ6NZSp37AU2zwb/Component'
    }
  }