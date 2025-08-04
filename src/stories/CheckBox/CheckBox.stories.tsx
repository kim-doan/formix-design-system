import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import CheckBox from "../../components/CheckBox/CheckBox";

const meta = {
  title: "Components/CheckBox",
  component: CheckBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    $size: {
      control: { type: "select" },
      options: ["small", "medium"],
    },
    state: {
      control: { type: "select" },
      options: ["unchecked", "checked", "indeterminate"],
    },
    disabled: {
      control: "boolean",
    },
    bold: {
      control: "boolean",
    },
    label: {
      control: "text",
    },
    typography: {
      control: "text",
    },
    typographyColor: {
      control: "text",
    },
  },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <CheckBox
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
  args: {
    label: "기본 체크박스",
  },
};

export const Small: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <CheckBox
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
  args: {
    $size: "small",
    label: "작은 체크박스",
  },
};

export const Medium: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <CheckBox
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
  args: {
    $size: "medium",
    label: "중간 체크박스",
  },
};

export const Checked: Story = {
  args: {
    state: "checked",
    label: "체크된 상태",
  },
};

export const Indeterminate: Story = {
  args: {
    state: "indeterminate",
    label: "중간 상태",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "비활성화된 체크박스",
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    state: "checked",
    label: "비활성화된 체크 상태",
  },
};

export const Bold: Story = {
  args: {
    bold: true,
    label: "굵은 글씨",
  },
};

export const WithoutLabel: Story = {
  args: {},
};

export const CustomTypography: Story = {
  args: {
    label: "커스텀 타이포그래피",
    typography: {
      fontSize: "14px",
    },
    typographyColor: "#007bff",
  },
};

export const Interactive: Story = {
  render: () => {
    const [states, setStates] = useState({
      checkbox1: false,
      checkbox2: false,
      checkbox3: "indeterminate" as "indeterminate",
    });

    const handleCheckbox1 = (e: React.ChangeEvent<HTMLInputElement>) => {
      setStates((prev) => ({ ...prev, checkbox1: e.target.checked }));
    };

    const handleCheckbox2 = (e: React.ChangeEvent<HTMLInputElement>) => {
      setStates((prev) => ({ ...prev, checkbox2: e.target.checked }));
    };

    const handleParentCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newState = e.target.checked;
      setStates({
        checkbox1: newState,
        checkbox2: newState,
        checkbox3: "indeterminate" as "indeterminate",
      });
    };

    // 부모 체크박스의 상태 결정
    const getParentState = () => {
      if (states.checkbox1 && states.checkbox2) return "checked";
      if (!states.checkbox1 && !states.checkbox2) return "unchecked";
      return "indeterminate";
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <CheckBox
          label="전체 선택"
          state={getParentState()}
          onChange={handleParentCheckbox}
        />
        <div
          style={{
            marginLeft: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <CheckBox
            label="옵션 1"
            checked={states.checkbox1}
            onChange={handleCheckbox1}
          />
          <CheckBox
            label="옵션 2"
            checked={states.checkbox2}
            onChange={handleCheckbox2}
          />
        </div>
      </div>
    );
  },
};

export const AllSizes: Story = {
  render: () => {
    const [smallChecked, setSmallChecked] = useState(false);
    const [mediumChecked, setMediumChecked] = useState(false);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <CheckBox
          $size="small"
          label="작은 크기"
          checked={smallChecked}
          onChange={(e) => setSmallChecked(e.target.checked)}
        />
        <CheckBox
          $size="medium"
          label="중간 크기"
          checked={mediumChecked}
          onChange={(e) => setMediumChecked(e.target.checked)}
        />
      </div>
    );
  },
};
