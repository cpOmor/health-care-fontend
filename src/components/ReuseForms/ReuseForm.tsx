import React, { ReactNode } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

interface ReuseFormProps {
  children: ReactNode;
  onSubmit: (data: any) => void;
}

const ReuseForm: React.FC<ReuseFormProps> =  ({ children, onSubmit }) => {
  const methods =  useForm();

  const submit: SubmitHandler<any>  = (data) => {
    onSubmit(data);
    // console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default ReuseForm;
