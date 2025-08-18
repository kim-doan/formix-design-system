import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import RadioGroup from "../../components/RadioGroup/RadioGroup";

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
    },
    options: {
      control: "object",
    },
    disabled: {
      control: "boolean",
    },
    bold: {
      control: "boolean",
    },
    typography: {
      control: "object",
    },
    typographyColor: {
      control: "color",
    },
    name: {
      control: "text",
    },
    direction: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { key: "option1", label: "옵션 1", value: "option1" },
  { key: "option2", label: "옵션 2", value: "option2" },
  { key: "option3", label: "옵션 3", value: "option3" },
];

export const Default: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string | number | boolean>("option1");
    
    return (
      <RadioGroup
        {...args}
        value={selectedValue}
        $onChange={setSelectedValue}
      />
    );
  },
  args: {
    name: "defaultGroup",
    options: defaultOptions,
  },
};

export const Small: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string | number | boolean>("option1");
    
    return (
      <RadioGroup
        {...args}
        value={selectedValue}
        $onChange={setSelectedValue}
      />
    );
  },
  args: {
    size: "small",
    name: "smallGroup",
    options: defaultOptions,
  },
};

export const Medium: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string | number | boolean>("option1");
    
    return (
      <RadioGroup
        {...args}
        value={selectedValue}
        $onChange={setSelectedValue}
      />
    );
  },
  args: {
    size: "medium",
    name: "mediumGroup",
    options: defaultOptions,
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string | number | boolean>("option2");
    
    return (
      <RadioGroup
        {...args}
        value={selectedValue}
        $onChange={setSelectedValue}
      />
    );
  },
  args: {
    disabled: true,
    name: "disabledGroup",
    options: defaultOptions,
  },
};

export const Bold: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string | number | boolean>("option1");
    
    return (
      <RadioGroup
        {...args}
        value={selectedValue}
        $onChange={setSelectedValue}
      />
    );
  },
  args: {
    bold: true,
    name: "boldGroup",
    options: defaultOptions,
  },
};

export const CustomTypography: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string | number | boolean>("medium");
    
    return (
      <RadioGroup
        {...args}
        value={selectedValue}
        $onChange={setSelectedValue}
      />
    );
  },
  args: {
    typography: {
      fontSize: "14px",
    },
    typographyColor: "#007bff",
    name: "customGroup",
    options: [
      { key: "xs", label: "XS", value: "xs" },
      { key: "s", label: "S", value: "s" },
      { key: "m", label: "M", value: "medium" },
      { key: "l", label: "L", value: "l" },
      { key: "xl", label: "XL", value: "xl" },
    ],
  },
};

export const Interactive: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string | number | boolean>("frontend");
    
    const options = [
      { key: "frontend", label: "프론트엔드 개발", value: "frontend" },
      { key: "backend", label: "백엔드 개발", value: "backend" },
      { key: "design", label: "UI/UX 디자인", value: "design" },
      { key: "pm", label: "프로덕트 매니저", value: "pm" },
    ];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div>
          <h3>선호하는 직무를 선택해주세요:</h3>
          <RadioGroup
            name="jobGroup"
            options={options}
            value={selectedValue}
            $onChange={setSelectedValue}
          />
        </div>
        
        <div>
          <strong>선택된 항목:</strong>
          <span style={{ marginLeft: "8px" }}>
            {options.find(opt => opt.value === selectedValue)?.label}
          </span>
        </div>
      </div>
    );
  },
};

export const Horizontal: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string | number | boolean>("medium");
    
    return (
      <RadioGroup
        {...args}
        value={selectedValue}
        $onChange={setSelectedValue}
      />
    );
  },
  args: {
    direction: "horizontal",
    name: "horizontalGroup",
    options: [
      { key: "xs", label: "XS", value: "xs" },
      { key: "s", label: "S", value: "s" },
      { key: "m", label: "M", value: "medium" },
      { key: "l", label: "L", value: "l" },
      { key: "xl", label: "XL", value: "xl" },
    ],
  },
};

export const Vertical: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string | number | boolean>("option2");
    
    return (
      <RadioGroup
        {...args}
        value={selectedValue}
        $onChange={setSelectedValue}
      />
    );
  },
  args: {
    direction: "vertical",
    name: "verticalGroup",
    options: defaultOptions,
  },
};

export const MultipleGroups: Story = {
  render: () => {
    const [genderValue, setGenderValue] = useState<string | number | boolean>("male");
    const [ageValue, setAgeValue] = useState<string | number | boolean>("20s");
    
    const genderOptions = [
      { key: "male", label: "남성", value: "male" },
      { key: "female", label: "여성", value: "female" },
      { key: "other", label: "기타", value: "other" },
    ];

    const ageOptions = [
      { key: "teens", label: "10대", value: "teens" },
      { key: "20s", label: "20대", value: "20s" },
      { key: "30s", label: "30대", value: "30s" },
      { key: "40s", label: "40대", value: "40s" },
      { key: "50plus", label: "50대 이상", value: "50plus" },
    ];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div>
          <h3>성별:</h3>
          <RadioGroup
            name="genderGroup"
            direction="horizontal"
            options={genderOptions}
            value={genderValue}
            $onChange={setGenderValue}
          />
        </div>
        
        <div>
          <h3>연령대:</h3>
          <RadioGroup
            name="ageGroup"
            direction="vertical"
            options={ageOptions}
            value={ageValue}
            $onChange={setAgeValue}
          />
        </div>

        <div style={{ padding: "16px", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
          <strong>선택된 정보:</strong>
          <div>성별: {genderOptions.find(opt => opt.value === genderValue)?.label}</div>
          <div>연령대: {ageOptions.find(opt => opt.value === ageValue)?.label}</div>
        </div>
      </div>
    );
  },
};