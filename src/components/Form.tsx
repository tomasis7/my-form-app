import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

const schema = yup.object().shape({
  name: yup.string().required("Namn är obligatoriskt"),
  email: yup.string().email("Ogiltig e-post").required("E-post är obligatoriskt"),
});

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("Formulärdata:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField label="Namn" name="name" register={register} error={errors.name?.message} />
      <InputField label="E-post" name="email" register={register} error={errors.email?.message} />
      <SubmitButton text="Skicka" />
    </form>
  );
};

export default Form;
