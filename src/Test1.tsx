import React, { FC, ReactElement } from "react";
import { Button } from "antd";
import "./test.less";

interface ToList {
  testClick: (name: string) => void;
}

interface ToList1 {
  name: string;
}

const Test1: FC<ToList> = (props): ReactElement => {
  // const test1 = () => {
  //     testClick('1231');
  // }
  const test2 = (name: ToList1) => {
    console.log(name);
    console.log(props);
  };
  // const test2 = function test3<T>(): T {
  //     console.log(name);
  //     return name;
  // }
  return (
    <div className="testPage" onClick={() => test2({ name: "123" })}>
      <Button type="primary">Button</Button>
      <div className="a">123</div>
    </div>
  );
};
export default Test1;
