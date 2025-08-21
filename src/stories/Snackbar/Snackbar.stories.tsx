import type { Meta, StoryObj } from "@storybook/react";
import { Snackbar } from "../../components/Snackbar";
import { IconName } from "../../assets/icons";

const meta = {
  title: "Components/Snackbar",
  component: Snackbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    heading: {
      control: "text",
    },
    description: {
      control: "text",
    },
    icon: {
      control: { type: "select" },
      options: [
        undefined,
        "circleCheckFill",
        "circleExclamationFill",
        "circleInfoFill",
        "circleCloseFill",
        "triangleExclamationFill",
        "check",
        "close",
        "eye",
        "eyeSlash",
      ] as (IconName | undefined)[],
    },
    actionLabel: {
      control: "text",
    },
    onActionClick: { action: "action clicked" },
  },
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: "기본 스낵바 메시지입니다.",
  },
};

export const WithHeading: Story = {
  args: {
    heading: "알림",
    description: "제목이 있는 스낵바 메시지입니다.",
  },
};

export const WithIcon: Story = {
  args: {
    description: "아이콘이 있는 스낵바 메시지입니다.",
    icon: "circleInfoFill",
  },
};

export const WithAction: Story = {
  args: {
    description: "액션 버튼이 있는 스낵바 메시지입니다.",
    actionLabel: "실행",
  },
};

export const Complete: Story = {
  args: {
    heading: "업데이트 완료",
    description: "새로운 버전으로 성공적으로 업데이트되었습니다.",
    icon: "circleCheckFill",
    actionLabel: "확인",
  },
};

export const Warning: Story = {
  args: {
    heading: "주의 필요",
    description: "일부 설정이 변경될 수 있습니다. 계속하시겠습니까?",
    icon: "triangleExclamationFill",
    actionLabel: "계속",
  },
};

export const Error: Story = {
  args: {
    heading: "연결 실패",
    description: "네트워크 연결에 문제가 있습니다.",
    icon: "circleCloseFill",
    actionLabel: "다시 시도",
  },
};

export const LongText: Story = {
  args: {
    heading: "긴 메시지 예시",
    description: "이것은 매우 긴 텍스트를 포함한 스낵바 메시지입니다. 텍스트가 길어질 경우 자동으로 줄바꿈이 발생하며, 스낵바의 최대 너비 내에서 적절히 표시됩니다. 사용자가 메시지를 쉽게 읽을 수 있도록 도와줍니다.",
    icon: "circleInfoFill",
    actionLabel: "자세히 보기",
  },
};

export const OnlyDescription: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Snackbar description="간단한 알림 메시지" />
      <Snackbar description="파일이 성공적으로 저장되었습니다." />
      <Snackbar description="변경사항이 적용되었습니다." />
    </div>
  ),
  args: {
    description: "Only description examples",
  },
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Snackbar 
        description="성공적으로 완료되었습니다."
        icon="circleCheckFill"
      />
      <Snackbar 
        description="주의가 필요한 사항이 있습니다."
        icon="triangleExclamationFill"
      />
      <Snackbar 
        description="정보를 확인해주세요."
        icon="circleInfoFill"
      />
      <Snackbar 
        description="오류가 발생했습니다."
        icon="circleCloseFill"
      />
    </div>
  ),
  args: {
    description: "Icons examples",
  },
};

export const WithActions: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Snackbar 
        description="파일을 삭제하시겠습니까?"
        actionLabel="삭제"
        onActionClick={() => console.log('Delete clicked')}
      />
      <Snackbar 
        description="업데이트가 가능합니다."
        actionLabel="업데이트"
        onActionClick={() => console.log('Update clicked')}
      />
      <Snackbar 
        description="변경사항을 저장하시겠습니까?"
        actionLabel="저장"
        onActionClick={() => console.log('Save clicked')}
      />
    </div>
  ),
  args: {
    description: "Actions examples",
  },
};

export const CompleteExamples: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Snackbar 
        heading="다운로드 완료"
        description="파일이 성공적으로 다운로드되었습니다."
        icon="circleCheckFill"
        actionLabel="열기"
        onActionClick={() => console.log('Open clicked')}
      />
      <Snackbar 
        heading="권한 요청"
        description="이 기능을 사용하려면 카메라 권한이 필요합니다."
        icon="circleExclamationFill"
        actionLabel="허용"
        onActionClick={() => console.log('Allow clicked')}
      />
      <Snackbar 
        heading="백업 실패"
        description="클라우드 백업 중 오류가 발생했습니다."
        icon="circleCloseFill"
        actionLabel="다시 시도"
        onActionClick={() => console.log('Retry clicked')}
      />
    </div>
  ),
  args: {
    description: "Complete examples",
  },
};

export const Interactive: Story = {
  render: (args) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
          <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600 }}>
            인터랙티브 스낵바
          </h3>
          <p style={{ margin: 0, fontSize: "14px", color: "#666", textAlign: "center" }}>
            아래 컨트롤을 사용하여 스낵바의 다양한 옵션을 테스트해보세요.
          </p>
        </div>
        
        <Snackbar {...args} />
        
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
          <h4 style={{ margin: 0, fontSize: "14px", fontWeight: 600, textAlign: "center" }}>
            다양한 조합 예시
          </h4>
          <div style={{ display: "grid", gap: "16px" }}>
            <Snackbar description="기본 메시지" />
            <Snackbar heading="제목" description="제목과 설명이 함께" />
            <Snackbar description="아이콘 포함" icon="circleCheckFill" />
            <Snackbar description="액션 버튼" actionLabel="확인" />
          </div>
        </div>
      </div>
    );
  },
  args: {
    heading: "설정 변경",
    description: "설정을 변경하여 테스트해보세요!",
    icon: "circleInfoFill",
    actionLabel: "적용",
  },
};