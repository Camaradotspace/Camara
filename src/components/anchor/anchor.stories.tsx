import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Anchor, AnchorProps } from '.'

export default {
  title: 'Components/Anchor',
  component: Anchor,
  args: {
    href: 'https://source.unsplash.com/8TQUF6UbpAk/1600x900',
    children: 'Click me'
  }
} as Meta

const Template: Story<AnchorProps> = (args) => <Anchor {...args} />

// Base default anchor
export const Base = Template.bind({})

// open link in new tab
export const External = (args: AnchorProps) => <Anchor {...args} external />

// link appear as Button
export const asButton = (args: AnchorProps) => <Anchor {...args} asBtn />
