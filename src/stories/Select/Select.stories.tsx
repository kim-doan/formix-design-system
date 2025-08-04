import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { fn } from "storybook/test";
import { Select } from "../../components/Select";

const sampleOptions = [
  { key: "option1", value: "option1", label: "옵션 1" },
  { key: "option2", value: "option2", label: "옵션 2" },
  { key: "option3", value: "option3", label: "옵션 3" },
  { key: "option4", value: "option4", label: "옵션 4" },
];

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    onChange: fn() as (value: string) => void,
    options: sampleOptions,
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    status: "normal",
    placeholder: "선택해 주세요.",
  },
};

export const Negative: Story = {
  args: {
    status: "negative",
    placeholder: "선택해 주세요.",
  },
};

export const Disabled: Story = {
  args: {
    status: "normal",
    disabled: true,
    placeholder: "선택해 주세요.",
  },
};

export const WithLabel: Story = {
  args: {
    status: "normal",
    headingLabel: "선택 항목",
    placeholder: "선택해 주세요.",
  },
};

export const WithRequiredBadge: Story = {
  args: {
    status: "normal",
    headingLabel: "필수 선택 항목",
    requiredBadge: true,
    placeholder: "선택해 주세요.",
  },
};

export const WithDescription: Story = {
  args: {
    status: "normal",
    headingLabel: "선택 항목",
    description: "원하는 옵션을 선택해 주세요.",
    placeholder: "선택해 주세요.",
  },
};

export const WithIcon: Story = {
  args: {
    status: "normal",
    headingLabel: "아이콘이 있는 선택",
    // icon: "star",
    placeholder: "선택해 주세요.",
  },
};

export const Selected: Story = {
  args: {
    status: "normal",
    headingLabel: "선택됨",
    value: "option2",
    placeholder: "선택해 주세요.",
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value || "");
    
    return (
      <Select
        {...args}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          args.onChange?.(newValue);
        }}
      />
    );
  },
  args: {
    status: "normal",
    headingLabel: "컨트롤드 컴포넌트",
    placeholder: "선택해 주세요.",
  },
};
