import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "../../components/Table";
import { ColumnDef, RowSelectionState } from "@tanstack/react-table";
import { CheckBox } from "../../components";
import { useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  role: string;
  status: "active" | "inactive";
}

const sampleData: User[] = [
  {
    id: "1",
    name: "김철수",
    email: "kim@example.com",
    age: 30,
    role: "개발자",
    status: "active",
  },
  {
    id: "2",
    name: "이영희",
    email: "lee@example.com",
    age: 28,
    role: "디자이너",
    status: "active",
  },
  {
    id: "3",
    name: "박민수",
    email: "park@example.com",
    age: 35,
    role: "매니저",
    status: "inactive",
  },
  {
    id: "4",
    name: "최지현",
    email: "choi@example.com",
    age: 32,
    role: "개발자",
    status: "active",
  },
  {
    id: "5",
    name: "정수민",
    email: "jung@example.com",
    age: 29,
    role: "기획자",
    status: "active",
  },
];

const basicColumns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "이름",
    size: 100,
    meta: {
      columnStyle: {
        textAlign: "center",
      },
      cellStyle: {
        textAlign: "center",
      },
    },
  },
  {
    accessorKey: "email",
    header: "이메일",
  },
  {
    accessorKey: "age",
    header: "나이",
  },
  {
    accessorKey: "role",
    header: "역할",
  },
];

const fullColumns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <CheckBox
        $size="small"
        state={table.getIsAllRowsSelected() ? "checked" : "unchecked"}
        onChange={table.getToggleAllRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <CheckBox
        $size="small"
        state={row.getIsSelected() ? "checked" : "unchecked"}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
    size: 24,
  },
  {
    accessorKey: "name",
    header: "이름",
    size: 100,
  },
  {
    accessorKey: "email",
    header: "이메일",
  },
  {
    accessorKey: "age",
    header: "나이",
    cell: (info) => `${info.getValue()}세`,
  },
  {
    accessorKey: "role",
    header: "역할",
  },
  {
    accessorKey: "status",
    header: "상태",
    cell: (info) => (
      <span
        style={{
          padding: "4px 8px",
          borderRadius: "4px",
          fontSize: "12px",
          fontWeight: "bold",
          backgroundColor: info.getValue() === "active" ? "#e7f5e7" : "#f5e7e7",
          color: info.getValue() === "active" ? "#2d7d2d" : "#7d2d2d",
        }}
      >
        {info.getValue() === "active" ? "활성" : "비활성"}
      </span>
    ),
  },
];

const meta = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    columns: { control: false },
    data: { control: false },
    option: { control: "object" },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: basicColumns as any,
    data: sampleData,
    option: {},
  },
};

export const WithCustomCell: Story = {
  args: {
    columns: fullColumns as any,
    data: sampleData,
    option: {},
  },
};

export const EmptyData: Story = {
  args: {
    columns: basicColumns as any,
    data: [],
    option: {},
  },
};

export const SingleRow: Story = {
  args: {
    columns: basicColumns as any,
    data: sampleData.slice(0, 1),
    option: {},
  },
};

export const MinimalColumns: Story = {
  args: {
    columns: [
      {
        accessorKey: "name",
        header: "이름",
      },
      {
        accessorKey: "email",
        header: "이메일",
      },
    ],
    data: sampleData,
    option: {},
  },
};

export const LargeDataset: Story = {
  args: {
    columns: fullColumns as any,
    data: Array.from({ length: 50 }, (_, index) => ({
      id: `${index + 1}`,
      name: `사용자 ${index + 1}`,
      email: `user${index + 1}@example.com`,
      age: 20 + (index % 40),
      role: ["개발자", "디자이너", "매니저", "기획자"][index % 4] || "개발자",
      status: index % 3 === 0 ? ("inactive" as const) : ("active" as const),
    })),
    option: {
      scroll: true,
      height: "300px",
      maxWidth: "100%",
    },
    rowOption: {
      interaction: true,
      rowSelection: {},
      onRowClick: (row) => {
        alert(`Row clicked: ${row.getValue("name")}`);
      },
    },
  },
};

// Interactive story with row selection
export const WithRowSelection = () => {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const data = Array.from({ length: 10 }, (_, index) => ({
    id: `${index + 1}`,
    name: `사용자 ${index + 1}`,
    email: `user${index + 1}@example.com`,
    age: 20 + (index % 40),
    role: ["개발자", "디자이너", "매니저", "기획자"][index % 4] || "개발자",
    status: index % 3 === 0 ? ("inactive" as const) : ("active" as const),
  }));

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        Selected rows:{" "}
        {Object.keys(rowSelection)
          .filter((key) => rowSelection[key])
          .join(", ") || "None"}
      </div>
      <Table
        columns={fullColumns as any}
        data={data}
        option={{
          scroll: true,
          height: "400px",
          maxWidth: "100%",
        }}
        rowOption={{
          interaction: true,
          enableRowSelection: true,
          rowSelection,
          onRowSelectionChange: setRowSelection,
          onRowClick: (row) => {
            setRowSelection((prev) => ({
              ...prev,
              [row.id]: !prev[row.id],
            }));
          },
        }}
      />
    </div>
  );
};

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

const productData: Product[] = [
  {
    id: "p1",
    name: "노트북",
    price: 1200000,
    category: "전자제품",
    inStock: true,
  },
  {
    id: "p2",
    name: "마우스",
    price: 50000,
    category: "전자제품",
    inStock: true,
  },
  {
    id: "p3",
    name: "키보드",
    price: 150000,
    category: "전자제품",
    inStock: false,
  },
  {
    id: "p4",
    name: "모니터",
    price: 400000,
    category: "전자제품",
    inStock: true,
  },
];

const productColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "상품명",
  },
  {
    accessorKey: "price",
    header: "가격",
    cell: (info) => `${(info.getValue() as number).toLocaleString()}원`,
  },
  {
    accessorKey: "category",
    header: "카테고리",
  },
  {
    accessorKey: "inStock",
    header: "재고",
    cell: (info) => (
      <span style={{ color: info.getValue() ? "green" : "red" }}>
        {info.getValue() ? "재고 있음" : "품절"}
      </span>
    ),
  },
];

export const ProductTable: Story = {
  args: {
    columns: productColumns as any,
    data: productData,
    option: {},
  },
};

export const WithColumnResizing: Story = {
  args: {
    columns: basicColumns as any,
    data: sampleData,
    option: {
      columnResizing: true,
      columnResizeMode: "onChange",
    },
  },
};

export const ResizableWithSelection: Story = {
  args: {
    columns: fullColumns as any,
    data: sampleData,
    option: {
      columnResizing: true,
      columnResizeMode: "onEnd",
    },
  },
};
