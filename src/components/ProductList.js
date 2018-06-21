import React from 'react';
import PropTypes from 'prop-types';
import { Button, Table, Popconfirm } from 'antd';

const ProductList = ({ onDelete, products }) => {
  
  const columns = [{
    title: '姓名',
    dataIndex: 'name'
  },{
    title: '操作',
    render: (text, record) => {
      return (
        <Popconfirm title="删除？" onConfirm={() => onDelete(record.id)}>
          <Button type="danger">删除</Button>
        </Popconfirm>
      )
    }
  }];

  return (
    <Table
      dataSource={products}
      columns={columns}
      pagination={false}
    />
  )
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ProductList;