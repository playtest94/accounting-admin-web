import React, { ReactNode } from "react";

export type Column = {
  name: string;
  uid: string;
  hideHeader?: boolean;
  align?: 'start' | 'center' | 'end';
}

export type Props = {
  columns: Column[];
  data: any;
  renderCell: (item: any, columnKey: React.Key) => ReactNode;
  renderColumn: (column: Column) => ReactNode;
}