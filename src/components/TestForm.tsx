/**
 * Created by aio on 2023/3/28 10:15
 */
import React from "react";
import { FormHelpers } from "@hi-ui/form";
import { Form } from "@hi-ui/form";
import { useRef } from "react";
import FormTable from "./FormTable";

const TestForm = () => {
    const formRef = useRef<FormHelpers>(null)
  return (
    <Form
        innerRef={formRef}
      onValuesChange={(a, values) => {
        console.log(values);
      }}
      initialValues={{}}
    >
      <FormTable  formRef={formRef}/>
    </Form>
  );
};

export default TestForm;
