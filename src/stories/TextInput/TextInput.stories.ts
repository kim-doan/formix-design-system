import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "storybook/test";
import { TextInput } from "../../components/TextInput";

const meta = {
  title: "Components/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onChange: fn() },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    status: "normal",
  },
};

export const Positive: Story = {
  args: {
    status: "positive",
  },
};

export const Negative: Story = {
  args: {
    status: "negative",
  },
};

export const Disabled: Story = {
  args: {
    status: "normal",
    disabled: true,
  },
};
