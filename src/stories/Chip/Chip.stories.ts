import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "storybook/test";
import { Chip } from "../../components/Chip";
import { icons } from "../../assets/icons";

const meta = {
  title: "Components/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["solid", "outlined"],
    },
    size: {
      control: { type: "select" },
      options: ["xsmall", "small", "medium", "large"],
    },
    leadingIcon: {
      control: { type: "select" },
      options: [undefined, ...Object.keys(icons)],
    },
    trailingIcon: {
      control: { type: "select" },
      options: [undefined, ...Object.keys(icons)],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
    children: "Chip",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Chip",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    variant: "solid",
    children: "텍스트",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    variant: "solid",
    children: "텍스트",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    variant: "solid",
    children: "텍스트",
  },
};

export const XSmall: Story = {
  args: {
    size: "xsmall",
    variant: "solid",
    children: "텍스트",
  },
};

export const Disabled: Story = {
  args: {
    variant: "solid",
    disabled: true,
    children: "텍스트",
  },
};
