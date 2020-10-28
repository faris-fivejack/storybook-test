import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { OutlineButton } from '../../../components/atoms/Button/OutlineButton'

export default {
  title: 'itemku/atoms/OutlineButton',
  component: OutlineButton,
  decorators: [withDesign],
  argTypes:{
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    disabled: { control: 'boolean'},
    differentiator:{ control:{
      type: 'inline-radio',
      options:[
        'Regular',
        'Other'
      ]
    }},
    width_type: { control:{
      type: 'radio',
      options:[
        'Short',
        'Full'
      ]
    }},
    height_type: { control:{
      type: 'radio',
      options:[
        'Small',
        'Big'
      ]
    }},
  } 
}

const buttonStory = (args) => <OutlineButton {...args} />
buttonStory.parameters = {
  design:{
    type: 'figma',
    url: 'https://www.figma.com/file/6pWgh84KJ6NZSp37AU2zwb/Component?node-id=5%3A6'
  }
}

export const Outline_Button = buttonStory.bind({})
Outline_Button.args = {
  label: 'Title',
}