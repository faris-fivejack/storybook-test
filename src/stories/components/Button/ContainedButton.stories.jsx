import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { ContainedButton } from '../../../components/atoms/Button/ContainedButton'

export default {
  title: 'itemku/atoms/ContainedButton',
  component: ContainedButton,
  decorators: [withDesign],
  argTypes:{
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    disabled: { control: 'boolean'},
    differentiator:{ control:{
      type: 'inline-radio',
      options:[
        'Purchasing',
        'NonPurchasing'
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

const buttonStory = (args) => <ContainedButton {...args} />
buttonStory.parameters = {
  design:{
    type: 'figma',
    url: 'https://www.figma.com/file/6pWgh84KJ6NZSp37AU2zwb/Component?node-id=5%3A6'
  }
}

export const Contained_Button = buttonStory.bind({})
Contained_Button.args = {
  label: 'Title',
}