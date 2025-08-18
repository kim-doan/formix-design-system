import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Radio from "../../components/Radio/Radio";

const meta = {
  title: "Components/Radio",
  component: Radio,
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
      options: ["unchecked", "checked"],
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
      control: "object",
    },
    typographyColor: {
      control: "color",
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string>("");
    
    return (
      <Radio
        {...args}
        checked={selectedValue === "default"}
        onChange={(e) => setSelectedValue(e.target.checked ? "default" : "")}
      />
    );
  },
  args: {
    label: "기본 라디오",
    value: "default",
  },
};

export const Small: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string>("");
    
    return (
      <Radio
        {...args}
        checked={selectedValue === "small"}
        onChange={(e) => setSelectedValue(e.target.checked ? "small" : "")}
      />
    );
  },
  args: {
    $size: "small",
    label: "작은 라디오",
    value: "small",
  },
};

export const Medium: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string>("");
    
    return (
      <Radio
        {...args}
        checked={selectedValue === "medium"}
        onChange={(e) => setSelectedValue(e.target.checked ? "medium" : "")}
      />
    );
  },
  args: {
    $size: "medium",
    label: "중간 라디오",
    value: "medium",
  },
};

export const Checked: Story = {
  args: {
    state: "checked",
    label: "체크된 상태",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "비활성화된 라디오",
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
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string>("");
    
    return (
      <Radio
        {...args}
        checked={selectedValue === "bold"}
        onChange={(e) => setSelectedValue(e.target.checked ? "bold" : "")}
      />
    );
  },
  args: {
    bold: true,
    label: "굵은 글씨",
    value: "bold",
  },
};

export const WithoutLabel: Story = {
  args: {},
};

export const CustomTypography: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string>("");
    
    return (
      <Radio
        {...args}
        checked={selectedValue === "custom"}
        onChange={(e) => setSelectedValue(e.target.checked ? "custom" : "")}
      />
    );
  },
  args: {
    label: "커스텀 타이포그래피",
    typography: {
      fontSize: "14px",
    },
    typographyColor: "#007bff",
    value: "custom",
  },
};

export const RadioGroup: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string>("option1");
    
    const options = [
      { value: "option1", label: "옵션 1" },
      { value: "option2", label: "옵션 2" },
      { value: "option3", label: "옵션 3" },
      { value: "option4", label: "옵션 4 (비활성화)", disabled: true },
    ];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <h3>라디오 그룹 예제:</h3>
        {options.map((option) => (
          <Radio
            key={option.value}
            name="radioGroup"
            value={option.value}
            label={option.label}
            checked={selectedValue === option.value}
            disabled={option.disabled}
            onChange={(e) => setSelectedValue(e.target.value)}
          />
        ))}
        <div style={{ marginTop: "16px" }}>
          <strong>선택된 값:</strong> {selectedValue}
        </div>
      </div>
    );
  },
};

export const DifferentSizes: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string>("medium");
    
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h3>다양한 크기:</h3>
        <Radio
          name="sizeGroup"
          $size="small"
          value="small"
          label="작은 라디오"
          checked={selectedValue === "small"}
          onChange={(e) => setSelectedValue(e.target.value)}
        />
        <Radio
          name="sizeGroup"
          $size="medium"
          value="medium"
          label="중간 라디오"
          checked={selectedValue === "medium"}
          onChange={(e) => setSelectedValue(e.target.value)}
        />
      </div>
    );
  },
};