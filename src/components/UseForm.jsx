import React from "react";
import { useForm } from "react-hook-form";
import "./UseForm.css";
function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.email));
        if (userData) { 
            if (userData.password === data.password) {
                console.log(userData.name + " You Are Successfully Logged In");
            } else {
                console.log("Email or Password is not matching with our record");
            }
        } else {
            console.log("Email or Password is not matching with our record");
        }
    };
    return (
        <div className="form w-screen h-screen border-2 flex flex-col justify-center rounded-lg items-center  gap-2 ">
            <p className="title text-blue-500 font-extrabold">Sing Up</p>

            <form className=" flex flex-col border-2 rounded-2xl bg-blue-300  justify-center  items-center p-2 gap-2 size-64 " onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="User Name" type="text" {...register("name", { required: true })} />
                <input placeholder="Email" pattern="@{1,}" type="email" {...register("email", { required: true })} />
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is error;
                     </span>}
                <input placeholder="Password" pattern=".{8,}" type="password" {...register("password")} />
                <input placeholder="Confirm Password" pattern=".{8,}"  type="password" {...register("confirmPassword")}/>
                <input className="rounded-lg text-white bg-red-700" type={"submit"} />
            </form>
        </div>
    );
}
export default Login;
