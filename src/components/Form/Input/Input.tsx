import { Form } from "react-bootstrap"
import type{ Path, FieldValues, UseFormRegister } from "react-hook-form"

type TInputProps<TFieldValue extends FieldValues> = {
    label: string;
    name: Path<TFieldValue>;
    type?: string;
    register: UseFormRegister<TFieldValue>;
    error: string;
}

const Input =<TFieldValue extends FieldValues> ({
    label, type="text", register, name, error
    }: TInputProps<TFieldValue>) => {
  return (
    <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control type={type} {...register(name)}
        isInvalid={error ? true: false}/>
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  )
}

export default Input
