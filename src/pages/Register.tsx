import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {signUpSchema, type signUpType} from "@validations/signUpSchema";
import { Heading } from "@components/common";
import { Input } from "@components/Form";
import {Form, Button, Row, Col} from "react-bootstrap";

const Register = () => {
    const { register, handleSubmit, formState: {errors} } = useForm<signUpType>({
        mode: "onBlur",
        resolver: zodResolver(signUpSchema)
    }); //links recat hook form to my form

    const submitForm: SubmitHandler<signUpType> = (data)=>{
        console.log(data);
    }

    return (
        <>
            <Heading title="User Registeration"/>
            <Row>
                <Col md={{span: 6, offset: 3}}>
                    <Form onSubmit={handleSubmit(submitForm)}>
                        <Input label="First Name" name = "firstName" register={register} error={errors.firstName?.message as string}/>
                        <Input label="Last Name" name = "lastName" register={register} error={errors.lastName?.message as string}/>
                        <Input label="Email address" name = "email" register={register} error={errors.email?.message as string}/>
                        <Input label="Password" type="password" name = "password" register={register} error={errors.password?.message as string}/>
                        <Input label="Confirm Password" type="password" name = "confirmPassword" register={register} error={errors.confirmPassword?.message as string}/>

                        <Button variant="info" type="submit" style={{color: "white"}}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default Register;
