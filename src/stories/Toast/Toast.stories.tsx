import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "../../components/Toast";
import { IconName } from "../../assets/icons";

const meta = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["normal", "positive", "cautionary", "negative"],
    },
    leadingIcon: {
      control: "boolean",
    },
    customIcon: {
      control: { type: "select" },
      options: [
        undefined,
        "check",
        "close",
        "circleCheck",
        "circleCheckFill",
        "circleExclamation",
        "circleExclamationFill",
        "circleInfo",
        "circleInfoFill",
        "circleClose",
        "circleCloseFill",
        "eye",
        "eyeSlash",
      ] as (IconName | undefined)[],
    },
    text: {
      control: "text",
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "기본 토스트 메시지입니다.",
    variant: "normal",
    leadingIcon: false,
  },
};

export const WithIcon: Story = {
  args: {
    text: "아이콘이 있는 토스트 메시지입니다.",
    variant: "normal",
    leadingIcon: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Toast variant="normal" leadingIcon text="일반 메시지입니다." />
      <Toast variant="positive" leadingIcon text="성공적으로 완료되었습니다!" />
      <Toast variant="cautionary" leadingIcon text="주의가 필요합니다." />
      <Toast variant="negative" leadingIcon text="오류가 발생했습니다." />
    </div>
  ),
  args: {
    text: "All variants example",
  },
};

export const Positive: Story = {
  args: {
    variant: "positive",
    leadingIcon: true,
    text: "성공적으로 저장되었습니다!",
  },
};

export const Cautionary: Story = {
  args: {
    variant: "cautionary",
    leadingIcon: true,
    text: "확인이 필요한 항목이 있습니다.",
  },
};

export const Negative: Story = {
  args: {
    variant: "negative",
    leadingIcon: true,
    text: "처리 중 오류가 발생했습니다.",
  },
};

export const CustomIcon: Story = {
  args: {
    variant: "normal",
    leadingIcon: true,
    customIcon: "eye",
    text: "커스텀 아이콘을 사용한 메시지입니다.",
  },
};

export const LongText: Story = {
  args: {
    variant: "normal",
    leadingIcon: true,
    text: "이것은 매우 긴 텍스트를 포함한 토스트 메시지입니다. 텍스트가 길어질 경우 자동으로 줄바꿈이 발생하며, 최대 너비는 400px로 제한됩니다. 이를 통해 사용자가 메시지를 쉽게 읽을 수 있도록 도와줍니다.",
  },
};

export const WithoutIcon: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Toast variant="normal" text="아이콘 없는 일반 메시지" />
      <Toast variant="positive" text="아이콘 없는 성공 메시지" />
      <Toast variant="cautionary" text="아이콘 없는 경고 메시지" />
      <Toast variant="negative" text="아이콘 없는 에러 메시지" />
    </div>
  ),
  args: {
    text: "Without icons example",
  },
};

export const DifferentCustomIcons: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Toast 
        variant="positive" 
        leadingIcon 
        customIcon="check" 
        text="체크 아이콘을 사용한 메시지" 
      />
      <Toast 
        variant="cautionary" 
        leadingIcon 
        customIcon="eye" 
        text="눈 아이콘을 사용한 메시지" 
      />
      <Toast 
        variant="negative" 
        leadingIcon 
        customIcon="close" 
        text="닫기 아이콘을 사용한 메시지" 
      />
      <Toast 
        variant="normal" 
        leadingIcon 
        customIcon="circleInfo" 
        text="정보 아이콘을 사용한 메시지" 
      />
    </div>
  ),
  args: {
    text: "Different custom icons example",
  },
};

export const Interactive: Story = {
  render: (args) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
          <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600 }}>
            인터랙티브 토스트
          </h3>
          <p style={{ margin: 0, fontSize: "14px", color: "#666", textAlign: "center" }}>
            아래 컨트롤을 사용하여 토스트의 다양한 옵션을 테스트해보세요.
          </p>
        </div>
        
        <Toast {...args} />
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px", width: "100%" }}>
          <Toast variant="normal" leadingIcon text="일반" />
          <Toast variant="positive" leadingIcon text="성공" />
          <Toast variant="cautionary" leadingIcon text="경고" />
          <Toast variant="negative" leadingIcon text="오류" />
        </div>
      </div>
    );
  },
  args: {
    variant: "normal",
    leadingIcon: true,
    text: "설정을 변경하여 테스트해보세요!",
  },
};