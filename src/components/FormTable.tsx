/**
 * Created by aio on 2023/3/28 10:17
 */
import React from "react";
import { Table, TableColumnItem } from "@hi-ui/table";
import { useEffect, useState } from "react";
import { Input } from "@hi-ui/input";
import { FormItem } from "@hi-ui/form";

const data = [
  {
    name: "小米9",
    type: "手机",
    size: "6G+64G",
    price: "3299.00",
    address: "华润五彩城店",
    stock: "29,000",
    key: 1,
  },
  {
    name: "小米9 SE",
    type: "手机",
    size: "6G+64G 幻彩蓝",
    price: "1999.00",
    address: "清河店",
    stock: "10,000",
    key: 2,
  },
  {
    name: "小米8",
    type: "手机",
    size: "6G+64G 幻彩蓝",
    price: "2599.00",
    address: "双安店",
    stock: "12,000",
    key: 3,
  },
  {
    name: "Redmi Note7",
    type: "手机",
    size: "6G+64G 幻彩蓝",
    price: "999.00",
    address: "华润五彩城店",
    stock: "140,000",
    key: 4,
  },
  {
    name: "小米8 SE",
    type: "手机",
    size: "6G+64G 幻彩蓝",
    price: "699.00",
    address: "双安店",
    stock: "12,000",
    key: 5,
  },
];
const FormTable = ({ formRef }: any) => {
  const [tableData, setTableData] = useState<any>([]);
  const columns = (): TableColumnItem[] => {
    const renderInput = (rowIndex: string | number, key: string | number) => {
      return (
        <FormItem field={["tableList", rowIndex, key]}>
          <Input />
        </FormItem>
      );
    };
    return [
      {
        title: "商品名",
        dataKey: "name",
        render: (text, row) => {
          return text + "*";
        },
      },
      {
        title: "品类",
        dataKey: "type",
      },
      {
        title: "规格",
        dataKey: "size",
      },
      {
        title: "单价",
        dataKey: "price",
        render: (text, row, rowIndex) => {
          return renderInput(rowIndex, "price");
        },
      },
      {
        title: "库存",
        dataKey: "stock",
        render: (text, row, rowIndex) => {
          return renderInput(rowIndex, "stock");
        },
      },
      {
        title: "总和",
        dataKey: "total",
        render: (text, row) => {
          console.log(text, row);
          return row.price * row.stock;
        },
      },
    ];
  };

  const creatTableData = () => {
    setTableData(data);
    formRef?.current?.setFieldsValue({
      tableList: data,
    });

  };
  useEffect(() => {
    creatTableData();
  }, []);
  return <Table data={tableData} columns={columns()} />;
};

export default FormTable;
