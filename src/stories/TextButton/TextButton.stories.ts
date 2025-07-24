import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "storybook/test";
import { TextButton } from "../../components/TextButton";
import { icons } from "../../assets/icons";

const meta = {
  title: "Components/TextButton",
  component: TextButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "assistive"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    leadingIcon: {
      control: { type: "select" },
      options: [undefined, ...Object.keys(icons)],
    },
    trailingIcon: {
      control: { type: "select" },
      options: [undefined, ...Object.keys(icons)],
    },
    icon: {
      control: { type: "select" },
      options: [undefined, ...Object.keys(icons)],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "버튼",
  },
};

export const Assistive: Story = {
  args: {
    variant: "assistive",
    children: "버튼",
  },
};

export const IconButton: Story = {
  args: {
    variant: "primary",
    icon: "check",
    iconOnly: true,
  },
};

export const Large: Story = {
  args: {
    size: "large",
    variant: "primary",
    children: "텍스트",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    variant: "primary",
    children: "텍스트",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    disabled: true,
    children: "텍스트",
  },
};
