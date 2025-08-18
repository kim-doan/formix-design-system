import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import CheckBoxGroup from "../../components/CheckBoxGroup/CheckBoxGroup";

const meta = {
  title: "Components/CheckBoxGroup",
  component: CheckBoxGroup,
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
    useAllCheckBox: {
      control: "boolean",
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
  },
} satisfies Meta<typeof CheckBoxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { key: "option1", label: "옵션 1", value: "option1" },
  { key: "option2", label: "옵션 2", value: "option2" },
  { key: "option3", label: "옵션 3", value: "option3" },
];

export const Default: Story = {
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState<(string | number | boolean)[]>([]);
    
    return (
      <CheckBoxGroup
        {...args}
        value={selectedValues}
        $onChange={setSelectedValues}
      />
    );
  },
  args: {
    options: defaultOptions,
  },
};

export const Small: Story = {
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState<(string | number | boolean)[]>([]);
    
    return (
      <CheckBoxGroup
        {...args}
        value={selectedValues}
        $onChange={setSelectedValues}
      />
    );
  },
  args: {
    size: "small",
    options: defaultOptions,
  },
};

export const Medium: Story = {
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState<(string | number | boolean)[]>([]);
    
    return (
      <CheckBoxGroup
        {...args}
        value={selectedValues}
        $onChange={setSelectedValues}
      />
    );
  },
  args: {
    size: "medium",
    options: defaultOptions,
  },
};

export const WithCustomOptions: Story = {
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState<(string | number | boolean)[]>([]);
    
    return (
      <CheckBoxGroup
        {...args}
        value={selectedValues}
        $onChange={setSelectedValues}
      />
    );
  },
  args: {
    options: [
      { key: "apple", label: "사과", value: "apple" },
      { key: "banana", label: "바나나", value: "banana" },
      { key: "orange", label: "오렌지", value: "orange" },
      { key: "grape", label: "포도", value: "grape" },
    ],
  },
};

export const Interactive: Story = {
  render: () => {
    const [selectedValues, setSelectedValues] = useState<(string | number | boolean)[]>([]);
    
    const options = [
      { key: "frontend", label: "프론트엔드 개발", value: "frontend" },
      { key: "backend", label: "백엔드 개발", value: "backend" },
      { key: "design", label: "UI/UX 디자인", value: "design" },
      { key: "pm", label: "프로덕트 매니저", value: "pm" },
    ];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div>
          <h3>관심 분야를 선택해주세요:</h3>
          <CheckBoxGroup
            options={options}
            value={selectedValues}
            $onChange={setSelectedValues}
          />
        </div>
        
        <div>
          <strong>선택된 항목:</strong>
          <ul>
            {selectedValues.map(value => {
              const option = options.find(opt => opt.value === value);
              return <li key={String(value)}>{option?.label}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  },
};

export const WithAllCheckBox: Story = {
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState<(string | number | boolean)[]>([]);
    
    return (
      <CheckBoxGroup
        {...args}
        value={selectedValues}
        $onChange={setSelectedValues}
      />
    );
  },
  args: {
    useAllCheckBox: true,
    options: [
      { key: "terms", label: "이용약관에 동의합니다", value: "terms" },
      { key: "privacy", label: "개인정보 처리방침에 동의합니다", value: "privacy" },
      { key: "marketing", label: "마케팅 정보 수신에 동의합니다 (선택)", value: "marketing" },
    ],
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState<(string | number | boolean)[]>(["option2"]);
    
    return (
      <CheckBoxGroup
        {...args}
        value={selectedValues}
        $onChange={setSelectedValues}
      />
    );
  },
  args: {
    disabled: true,
    options: defaultOptions,
  },
};

export const Bold: Story = {
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState<(string | number | boolean)[]>([]);
    
    return (
      <CheckBoxGroup
        {...args}
        value={selectedValues}
        $onChange={setSelectedValues}
      />
    );
  },
  args: {
    bold: true,
    options: defaultOptions,
  },
};

export const CustomTypography: Story = {
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState<(string | number | boolean)[]>([]);
    
    return (
      <CheckBoxGroup
        {...args}
        value={selectedValues}
        $onChange={setSelectedValues}
      />
    );
  },
  args: {
    typography: {
      fontSize: "14px",
    },
    typographyColor: "#007bff",
    options: [
      { key: "xs", label: "XS", value: "xs" },
      { key: "s", label: "S", value: "s" },
      { key: "m", label: "M", value: "m" },
      { key: "l", label: "L", value: "l" },
      { key: "xl", label: "XL", value: "xl" },
    ],
  },
};