
import React from 'react'
import { User, Col, Row, Tooltip, Text, Table as NUTable } from '@nextui-org/react';
import Table from '@components/ui/table';
import { DeleteIcon } from '@components/ui/table/components/delete-icon';
import { EditIcon } from '@components/ui/table/components/edit-icon';
import { EyeIcon } from '@components/ui/table/components/eye-icon';
import Badge from '@components/ui/table/styled/badge';
import Icon from '@components/ui/table/styled/icon';
import { Column } from '@components/ui/table/types';

const users: UserType[] = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Technical Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Senior Developer",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "Community Manager",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "Sales Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
];

const columns = [
  { name: "NAME", uid: "name" },
  { name: "ROLE", uid: "role" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions", hideHeader: true },
];

type UserType = {
  id: string | number,
  name?: string,
  email?: string,
  role?: string,
  team?: string,
  status: "active" | "paused" | "vacation",
  age?: string,
  avatar?: string,
};

const AccountTable = () => {

  const renderCell = (user: UserType, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof (UserType)];
    switch (columnKey) {
      case "name":
        return (
          <User squared src={user?.avatar} name={cellValue} css={{ p: 0 }}>
            {user?.email}
          </User>
        );
      case "role":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ tt: "capitalize", color: "$accents3" }}>
                {user?.team}
              </Text>
            </Row>
          </Col>
        );
      case "status":
        return <Badge type={user?.status}>{cellValue}</Badge>;

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Details">
                <Icon onClick={() => console.log("View user", user?.id)}>
                  <EyeIcon size={20} fill="#979797" />
                </Icon>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Edit user">
                <Icon onClick={() => console.log("Edit user", user?.id)}>
                  <EditIcon size={20} fill="#979797" />
                </Icon>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete user"
                color="error"
                onClick={() => console.log("Delete user", user?.id)}
              >
                <Icon>
                  <DeleteIcon size={20} fill="#FF0080" />
                </Icon>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };

  const renderColumn = (column: Column) => (
    <NUTable.Column
      key={column.uid}
      hideHeader={column.uid === "actions"}
      align={column.uid === "actions" ? "center" : "start"}
    >
      {column.name}
    </NUTable.Column>
  )
  return (
    <Table columns={columns} data={users} renderCell={renderCell}
      renderColumn={renderColumn} />
  )
}

export default AccountTable;