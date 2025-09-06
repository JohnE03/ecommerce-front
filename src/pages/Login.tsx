import { Navigate } from "react-router-dom";
import useLogin from "@hooks/useLogin";
import { Input } from "@components/Form";
import {Form, Button, Row, Col, Alert, Spinner} from "react-bootstrap";
import { Heading } from "@components/common";


const Login = () => {
    const {loading, error, accessToken, formErrors, searchParams, register, handleSubmit, submitForm} = useLogin();

    if(accessToken){
        return <Navigate to="/" />;
    }

    return (
        <>
            <Heading title="User Login"/>
            <Row>
                <Col md={{span: 6, offset: 3}}>
                {searchParams.get("message") === "login_required" && (<Alert variant="success">You need to login to view this content</Alert>)}
                {searchParams.get("message") === "account_created" && (<Alert variant="success">Your account was successfully created</Alert>)}
                    <Form onSubmit={handleSubmit(submitForm)}>
                        <Input label="Email address" name = "email" register={register} error={formErrors.email?.message as string}/>
                        <Input label="Password" type="password" name = "password" register={register} error={formErrors.password?.message as string}/>
                        <Button variant="info"
                        type="submit"
                        style={{color: "white"}}>
                        {loading==="pending"
                        ?<><Spinner animation="border" size="sm"></Spinner> Loading...</>
                        :"Submit"}
                        </Button>
                        {error && <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>}                        
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default Login;
