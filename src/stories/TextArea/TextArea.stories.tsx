import type { Meta, StoryObj } from "@storybook/react";
import TextArea from "../../components/TextArea/TextArea";

const meta = {
  title: "Components/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: { type: "select" },
      options: ["normal", "positive", "negative"],
    },
    resize: {
      control: { type: "select" },
      options: ["none", "vertical", "horizontal", "both"],
    },
    disabled: {
      control: "boolean",
    },
    showCharacterCount: {
      control: "boolean",
    },
    maxLength: {
      control: "number",
    },
    rows: {
      control: "number",
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "텍스트를 입력해 주세요.",
  },
};

export const WithLabel: Story = {
  args: {
    headingLabel: "내용",
    placeholder: "내용을 입력해 주세요.",
  },
};

export const WithLabelAndRequired: Story = {
  args: {
    headingLabel: "필수 입력 사항",
    requiredBadge: true,
    placeholder: "필수로 입력해야 하는 내용입니다.",
  },
};

export const WithDescription: Story = {
  args: {
    headingLabel: "메모",
    description: "최대 500자까지 입력할 수 있습니다.",
    placeholder: "메모를 입력해 주세요.",
  },
};

export const WithCharacterCount: Story = {
  args: {
    headingLabel: "자기소개",
    showCharacterCount: true,
    maxLength: 200,
    placeholder: "자기소개를 입력해 주세요.",
    description: "간단한 자기소개를 작성해 주세요.",
  },
};

export const PositiveStatus: Story = {
  args: {
    headingLabel: "피드백",
    status: "positive",
    description: "좋은 피드백입니다!",
    placeholder: "피드백을 입력해 주세요.",
  },
};

export const NegativeStatus: Story = {
  args: {
    headingLabel: "오류 내용",
    status: "negative",
    description: "필수 입력 항목입니다.",
    placeholder: "오류 내용을 상세히 입력해 주세요.",
  },
};

export const Disabled: Story = {
  args: {
    headingLabel: "비활성화된 입력",
    disabled: true,
    placeholder: "입력할 수 없습니다.",
  },
};

export const NoResize: Story = {
  args: {
    headingLabel: "고정 크기",
    resize: "none",
    placeholder: "크기를 조절할 수 없습니다.",
    rows: 6,
  },
};

export const HorizontalResize: Story = {
  args: {
    headingLabel: "가로 크기 조절",
    resize: "horizontal",
    placeholder: "가로 크기만 조절할 수 있습니다.",
  },
};

export const LongContent: Story = {
  args: {
    headingLabel: "긴 내용",
    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    showCharacterCount: true,
    rows: 8,
  },
};