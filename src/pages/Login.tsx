import { useEffect } from "react";
import { actAuthLogin, resetUI } from "@store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useSearchParams, useNavigate, Navigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, type signInType } from "@validations/signInSchema";
import { Input } from "@components/Form";
import {Form, Button, Row, Col, Alert, Spinner} from "react-bootstrap";
import { Heading } from "@components/common";


const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();

    const {loading, error, accessToken} = useAppSelector((state)=>state.auth);

    const { register, handleSubmit, formState: {errors} } = useForm<signInType>({
        mode: "onBlur",
        resolver: zodResolver(signInSchema)
    });
    const submitForm: SubmitHandler<signInType> = (data)=>{
        if(searchParams.get("message")==="account_created") setSearchParams("")
        dispatch(actAuthLogin(data)).unwrap().then(()=>navigate("/"));
    }

    useEffect(()=>{
        return ()=>{
            dispatch(resetUI());
        };
    },[dispatch]);

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
                        <Input label="Email address" name = "email" register={register} error={errors.email?.message as string}/>
                        <Input label="Password" type="password" name = "password" register={register} error={errors.password?.message as string}/>
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
