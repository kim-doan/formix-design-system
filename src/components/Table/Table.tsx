import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  OnChangeFn,
  Row,
  RowSelectionState,
  Table,
  useReactTable,
} from "@tanstack/react-table";
import BodyCell from "./components/BodyCell/BodyCell";
import { BodyRow } from "./components/BodyRow";
import { HeaderCell } from "./components/HeaderCell";
import { HeaderRow } from "./components/HeaderRow";
import * as styles from "./Table.css";

export interface TableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  option: TableOption;
  rowOption?: TableRowOption<T>;
}

export interface TableOption {
  scroll?: boolean;
  height?: string;
  maxWidth?: string;
  columnResizing?: boolean;
  columnResizeMode?: "onChange" | "onEnd";
}

export interface TableRowOption<T> {
  interaction?: boolean;
  enableRowSelection?: boolean;
  rowSelection?: RowSelectionState;
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
  onRowClick?: (row: Row<T>) => void;
}

export default function Table<T extends { id: string }>({
  columns,
  data,
  option: {
    scroll = false,
    height = "100%",
    maxWidth = "100%",
    columnResizing = false,
    columnResizeMode = "onChange",
  },
  rowOption = {
    rowSelection: {},
    interaction: false,
  },
}: TableProps<T>) {
  const table = useReactTable({
    columns,
    data,
    state: {
      rowSelection: rowOption.rowSelection,
    },
    enableRowSelection: rowOption.enableRowSelection,
    onRowSelectionChange: rowOption.onRowSelectionChange,
    enableColumnResizing: columnResizing,
    columnResizeMode: columnResizeMode,
    getCoreRowModel: getCoreRowModel(),
  });

  const wrapperClass = [
    maxWidth === "100%" ? styles.wrapper : styles.wrapperWithHorizontalScroll,
  ]
    .filter(Boolean)
    .join(" ");

  if (scroll) {
    return (
      <div className={wrapperClass} style={{ maxWidth, height }}>
        <table className={styles.table}>
          <TableHead table={table} columnResizing={columnResizing} />
        </table>
        <div className={styles.scrollContainer}>
          <table className={styles.table}>
            <TableBody table={table} rowOption={rowOption} />
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className={wrapperClass} style={{ maxWidth, height }}>
      <table className={styles.table}>
        <TableHead table={table} columnResizing={columnResizing} />
        <TableBody table={table} rowOption={rowOption} />
      </table>
    </div>
  );
}

interface TableHeadProps<T> {
  table: Table<T>;
  columnResizing?: boolean;
}

function TableHead<T>({ table, columnResizing }: TableHeadProps<T>) {
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <HeaderRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <HeaderCell
              key={header.id}
              style={{
                ...header.column.columnDef.meta?.columnStyle,
                width: header.column.getSize(),
              }}
              columnResizing={columnResizing}
              onResizeStart={header.getResizeHandler()}
              isResizing={header.column.getIsResizing()}
            >
              {flexRender(header.column.columnDef.header, header.getContext())}
            </HeaderCell>
          ))}
        </HeaderRow>
      ))}
    </thead>
  );
}

interface TableBodyProps<T> {
  table: Table<T>;
  rowOption: TableRowOption<T>;
}

function TableBody<T>({
  table,
  rowOption: { interaction, onRowClick },
}: TableBodyProps<T>) {
  return (
    <tbody className={styles.tbody}>
      {table.getRowModel().rows.map((row) => (
        <BodyRow
          key={row.id}
          interaction={interaction}
          selected={row.getIsSelected()}
          onClick={onRowClick ? () => onRowClick(row) : undefined}
        >
          {row.getVisibleCells().map((cell) => (
            <BodyCell
              key={cell.id}
              style={{
                ...cell.column.columnDef.meta?.cellStyle,
                width: cell.column.getSize(),
              }}
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </BodyCell>
          ))}
        </BodyRow>
      ))}
    </tbody>
  );
}
