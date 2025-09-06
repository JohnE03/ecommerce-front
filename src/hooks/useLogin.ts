import { useEffect } from "react";
import { actAuthLogin, resetUI } from "@store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, type signInType } from "@validations/signInSchema";

const useLogin = () => {
        const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();

    const {loading, error, accessToken} = useAppSelector((state)=>state.auth);

    const { register, handleSubmit, formState: {errors: formErrors} } = useForm<signInType>({
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

    return {loading, error, accessToken, formErrors, searchParams, register, handleSubmit, submitForm};
}

export default useLogin
