import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, type signInType } from "@validations/signInSchema";
import { Input } from "@components/Form";
import {Form, Button, Row, Col} from "react-bootstrap";
import { Heading } from "@components/common";


const Login = () => {
    const { register, handleSubmit, formState: {errors} } = useForm<signInType>({
        mode: "onBlur",
        resolver: zodResolver(signInSchema)
    });
    const submitForm: SubmitHandler<signInType> = (data)=>{
        console.log(data);
    }    

    return (
        <>
            <Heading title="User Login"/>
            <Row>
                <Col md={{span: 6, offset: 3}}>
                    <Form onSubmit={handleSubmit(submitForm)}>
                        <Input label="Email address" name = "email" register={register} error={errors.email?.message as string}/>
                        <Input label="Password" type="password" name = "password" register={register} error={errors.password?.message as string}/>
                        <Button variant="info" type="submit" style={{color: "white"}}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default Login;
