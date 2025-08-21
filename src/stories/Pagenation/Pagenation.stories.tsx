import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Pagenation from "../../components/Pagenation/Pagenation";

const meta = {
  title: "Components/Pagenation",
  component: Pagenation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    currentPage: {
      control: { type: "number", min: 1 },
    },
    totalPages: {
      control: { type: "number", min: 1 },
    },
    disabled: {
      control: "boolean",
    },
    onPageChange: { action: "page changed" },
  },
} satisfies Meta<typeof Pagenation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
    return (
      <Pagenation
        {...args}
        currentPage={currentPage}
        onPageChange={(page) => {
          setCurrentPage(page);
          args.onPageChange?.(page);
        }}
      />
    );
  },
  args: {
    currentPage: 1,
    totalPages: 10,
  },
};

export const FewPages: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
    return (
      <Pagenation
        {...args}
        currentPage={currentPage}
        onPageChange={(page) => {
          setCurrentPage(page);
          args.onPageChange?.(page);
        }}
      />
    );
  },
  args: {
    currentPage: 2,
    totalPages: 5,
  },
};

export const ManyPages: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
    return (
      <Pagenation
        {...args}
        currentPage={currentPage}
        onPageChange={(page) => {
          setCurrentPage(page);
          args.onPageChange?.(page);
        }}
      />
    );
  },
  args: {
    currentPage: 15,
    totalPages: 50,
  },
};

export const MaxVisible: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
    return (
      <Pagenation
        {...args}
        currentPage={currentPage}
        onPageChange={(page) => {
          setCurrentPage(page);
          args.onPageChange?.(page);
        }}
      />
    );
  },
  args: {
    currentPage: 5,
    totalPages: 10,
  },
};

export const FirstPage: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
    return (
      <Pagenation
        {...args}
        currentPage={currentPage}
        onPageChange={(page) => {
          setCurrentPage(page);
          args.onPageChange?.(page);
        }}
      />
    );
  },
  args: {
    currentPage: 1,
    totalPages: 20,
  },
};

export const LastPage: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
    return (
      <Pagenation
        {...args}
        currentPage={currentPage}
        onPageChange={(page) => {
          setCurrentPage(page);
          args.onPageChange?.(page);
        }}
      />
    );
  },
  args: {
    currentPage: 20,
    totalPages: 20,
  },
};

export const Disabled: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    disabled: true,
  },
};

export const SinglePage: Story = {
  args: {
    currentPage: 1,
    totalPages: 1,
  },
};

export const Interactive: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(15);
    const [disabled, setDisabled] = useState(false);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <label>
            총 페이지:
            <input
              type="number"
              value={totalPages}
              onChange={(e) => {
                const newTotal = Math.max(1, parseInt(e.target.value) || 1);
                setTotalPages(newTotal);
                if (currentPage > newTotal) {
                  setCurrentPage(newTotal);
                }
              }}
              min="1"
              style={{ marginLeft: "8px", width: "60px" }}
            />
          </label>
          <label>
            <input
              type="checkbox"
              checked={disabled}
              onChange={(e) => setDisabled(e.target.checked)}
            />
            비활성화
          </label>
        </div>
        
        <Pagenation
          currentPage={currentPage}
          totalPages={totalPages}
          disabled={disabled}
          onPageChange={setCurrentPage}
        />
        
        <div>현재 페이지: {currentPage}</div>
      </div>
    );
  },
};