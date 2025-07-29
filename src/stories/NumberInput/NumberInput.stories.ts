import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "storybook/test";
import { NumberInput } from "../../components/NumberInput";

const meta = {
  title: "Components/NumberInput",
  component: NumberInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "number" },
    },
    min: {
      control: { type: "number" },
    },
    max: {
      control: { type: "number" },
    },
    step: {
      control: { type: "number" },
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    status: "normal",
    placeholder: "숫자를 입력해 주세요.",
  },
};

export const Positive: Story = {
  args: {
    status: "positive",
    value: 100,
  },
};

export const Negative: Story = {
  args: {
    status: "negative",
    value: -50,
  },
};

export const Disabled: Story = {
  args: {
    status: "normal",
    disabled: true,
    value: 42,
  },
};

export const WithMinMax: Story = {
  args: {
    status: "normal",
    min: 0,
    max: 100,
    value: 50,
    description: "0에서 100 사이의 값을 입력하세요.",
  },
};

export const WithStep: Story = {
  args: {
    status: "normal",
    step: 0.1,
    value: 5.5,
    placeholder: "소수점 입력 가능",
  },
};

export const WithIcon: Story = {
  args: {
    status: "normal",
    icon: "circleInfo",
    value: 123,
  },
};

export const WithDeleteIcon: Story = {
  args: {
    status: "normal",
    showDelete: true,
    value: 456,
    description: "포커스 시 삭제 아이콘이 표시됩니다",
  },
};

export const WithHeadingLabel: Story = {
  args: {
    status: "normal",
    headingLabel: "나이",
    value: 25,
    min: 0,
    max: 120,
  },
};

export const WithThousandSeparator: Story = {
  args: {
    status: "normal",
    value: 1234567,
    showThousandSeparator: true,
    description: "blur 시 천 단위 구분자가 표시됩니다",
  },
};

export const WithoutThousandSeparator: Story = {
  args: {
    status: "normal",
    value: 1234567,
    showThousandSeparator: false,
    description: "천 단위 구분자가 비활성화됩니다",
  },
};