import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../../components/Icon";
import { IconName } from "../../assets/icons";

const meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: { type: "select" },
      options: [
        "check",
        "close",
        "arrowRight",
        "doubleLeft",
        "doubleLeftThick",
        "doubleLeftSmall",
        "doubleLeftThickSmall",
        "circleCheck",
        "circleCheckFill",
        "circleExclamation",
        "circleExclamationFill",
        "circleInfo",
        "circleInfoFill",
        "circleClose",
        "circleCloseFill",
        "eye",
        "eyeFill",
        "eyeSlash",
        "eyeSlashFill",
        "chevronDown",
        "chevronDownThick",
        "chevronDownSmall",
        "chevronDownThickSmall",
        "chevronUp",
        "chevronUpThick",
        "chevronUpSmall",
        "chevronUpThickSmall",
      ] as IconName[],
    },
    size: {
      control: { type: "select" },
      options: ["xsmall", "small", "medium", "large"],
    },
    color: {
      control: "color",
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "check",
    size: "medium",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <div style={{ textAlign: "center" }}>
        <Icon name="check" size="xsmall" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>xsmall</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="check" size="small" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>small</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="check" size="medium" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>medium</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="check" size="large" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>large</div>
      </div>
    </div>
  ),
  args: {
    name: "check",
    size: "medium",
  },
};

export const CustomSize: Story = {
  args: {
    name: "check",
    size: 48,
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <div style={{ textAlign: "center" }}>
        <Icon name="check" size="medium" color="currentColor" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>currentColor</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="check" size="medium" color="#0066FF" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>blue</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="check" size="medium" color="#00BF40" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>green</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="check" size="medium" color="#FF4242" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>red</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="check" size="medium" color="#FF9200" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>orange</div>
      </div>
    </div>
  ),
  args: {
    name: "check",
    size: "medium",
  },
};

export const BasicIcons: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px", padding: "16px" }}>
      <div style={{ textAlign: "center" }}>
        <Icon name="check" size="medium" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>check</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="close" size="medium" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>close</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="arrowRight" size="medium" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>arrowRight</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="doubleLeft" size="medium" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>doubleLeft</div>
      </div>
    </div>
  ),
  args: {
    name: "check",
    size: "medium",
  },
};

export const CircleIcons: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px", padding: "16px" }}>
      <div style={{ textAlign: "center" }}>
        <Icon name="circleCheck" size="medium" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>circleCheck</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="circleCheckFill" size="medium" color="#00BF40" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>circleCheckFill</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="circleExclamation" size="medium" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>circleExclamation</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="circleExclamationFill" size="medium" color="#FF9200" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>circleExclamationFill</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="circleInfo" size="medium" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>circleInfo</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="circleInfoFill" size="medium" color="#0066FF" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>circleInfoFill</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="circleClose" size="medium" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>circleClose</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="circleCloseFill" size="medium" color="#FF4242" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>circleCloseFill</div>
      </div>
    </div>
  ),
  args: {
    name: "circleCheck",
    size: "medium",
  },
};

export const EyeIcons: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px", padding: "16px" }}>
      <div style={{ textAlign: "center" }}>
        <Icon name="eye" size="medium" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>eye</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="eyeFill" size="medium" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>eyeFill</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="eyeSlash" size="medium" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>eyeSlash</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="eyeSlashFill" size="medium" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>eyeSlashFill</div>
      </div>
    </div>
  ),
  args: {
    name: "eye",
    size: "medium",
  },
};

export const ChevronIcons: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px", padding: "16px" }}>
      <div style={{ textAlign: "center" }}>
        <Icon name="chevronDown" size="medium" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>chevronDown</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="chevronDownThick" size="medium" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>chevronDownThick</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="chevronDownSmall" size="medium" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>chevronDownSmall</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="chevronDownThickSmall" size="medium" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>chevronDownThickSmall</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="chevronUp" size="medium" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>chevronUp</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="chevronUpThick" size="medium" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>chevronUpThick</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="chevronUpSmall" size="medium" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>chevronUpSmall</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="chevronUpThickSmall" size="medium" />
        <div style={{ marginTop: "8px", fontSize: "12px" }}>chevronUpThickSmall</div>
      </div>
    </div>
  ),
  args: {
    name: "chevronDown",
    size: "medium",
  },
};

export const AllIcons: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "20px", padding: "16px" }}>
      {[
        "check",
        "close",
        "arrowRight",
        "doubleLeft",
        "doubleLeftThick",
        "doubleLeftSmall",
        "doubleLeftThickSmall",
        "circleCheck",
        "circleCheckFill",
        "circleExclamation",
        "circleExclamationFill",
        "circleInfo",
        "circleInfoFill",
        "circleClose",
        "circleCloseFill",
        "eye",
        "eyeFill",
        "eyeSlash",
        "eyeSlashFill",
        "chevronDown",
        "chevronDownThick",
        "chevronDownSmall",
        "chevronDownThickSmall",
        "chevronUp",
        "chevronUpThick",
        "chevronUpSmall",
        "chevronUpThickSmall",
      ].map((iconName) => (
        <div key={iconName} style={{ textAlign: "center" }}>
          <Icon name={iconName as IconName} size="medium" />
          <div style={{ marginTop: "8px", fontSize: "10px", wordBreak: "break-all" }}>
            {iconName}
          </div>
        </div>
      ))}
    </div>
  ),
  args: {
    name: "check",
    size: "medium",
  },
};

export const InteractiveIcon: Story = {
  render: () => {
    const iconNames: IconName[] = [
      "check",
      "close",
      "arrowRight",
      "circleCheck",
      "circleInfo",
      "eye",
      "eyeSlash",
      "chevronDown",
      "chevronUp",
    ];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          {iconNames.map((iconName) => (
            <button
              key={iconName}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 12px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "white",
                cursor: "pointer",
                fontSize: "14px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f5f5f5";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
              }}
            >
              <Icon name={iconName} size="small" />
              {iconName}
            </button>
          ))}
        </div>
      </div>
    );
  },
  args: {
    name: "check",
    size: "medium",
  },
};