import { Table, Popconfirm, Button, Input, Form } from 'antd';

import React, { useState, useReducer } from "react";

// const originData = [];

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`
            }
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const ProductList = ({ onEdit, onDelete, products }) => {
  const [form] = Form.useForm();
  const [data, setState] = useState(products.products);

  // const [data, dispatch] = useState(products.products);

  const [editingKey, setEditingKey] = useState("");
  const isEditing = record => {
    return record.key === editingKey;
  };
  const edit = record => {
    form.setFieldsValue({
      // name: "",
      // age: "",
      // address: "",
      // price: "",
      // palce: "",
      ...record
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async key => {
    try {
      const row = await form.validateFields();
      // const datas = data.payload;
      const newData = [...data];
      const index = newData.findIndex(item => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        // dispatch.setData(newData);
        // dispatch({
        //   type: `products/setData`,
        //   payload: newData,
        // });
        setEditingKey("");

        onEdit(newData);        
      } else {
        // newData.push(row);
        // setData(newData);
        // setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      editable: false
    },
    {
      title: 'ID',
      dataIndex: 'id',
      editable: false
    },
    {
      title: 'Time Created',
      dataIndex: 'createTime',
      editable: false
    },
    {
      title: 'Creator',
      dataIndex: 'creator',
      editable: false
    },
    {
      title: 'Price',
      dataIndex: 'price',
      editable: true,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      editable: false
    },
    {
      title: 'Place',
      dataIndex: 'palce',
      editable: true,
    },
    {
      title: 'Actions',
      render: (text, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              onClick={() => save(record.key)}
              style={{
                marginRight: 8
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <span>
            <Button disabled={editingKey !== ""} onClick={() => edit(record)}>
              Edit
            </Button>
            <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
              <Button>Delete</Button>
            </Popconfirm>
          </span>
        );
      },
    },
  ];

  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: record => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record)
      })
    };
  });

  return (
    <Form form={form} component={false}>
      <Table 
        // bordered
        components={{
          body: {
            cell: EditableCell
          }
        }}
        dataSource={products.products} 
        columns={mergedColumns}
        // columns={columns} 
      />
    </Form>
  );
};

export default ProductList;