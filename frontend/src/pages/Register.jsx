import { useState, useContext } from "react";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {

const [form, setForm] = useState({
name:"",
email:"",
password:""
});

const { login } = useContext(AuthContext);

const navigate = useNavigate();

const handleSubmit = async (e) => {

e.preventDefault();

await API.post("/auth/register", form);

const res = await API.post("/auth/login", {
email: form.email,
password: form.password
});

login(res.data);

navigate("/profile");

};

return (

<div className="register-page">

<div className="register-card">

<h2>Create Account</h2>

<form onSubmit={handleSubmit}>

<input
placeholder="Name"
value={form.name}
onChange={(e)=>
setForm({...form, name:e.target.value})
}
/>

<input
placeholder="Email"
value={form.email}
onChange={(e)=>
setForm({...form, email:e.target.value})
}
/>

<input
type="password"
placeholder="Password"
value={form.password}
onChange={(e)=>
setForm({...form, password:e.target.value})
}
/>

<button type="submit">
Register
</button>

</form>

</div>

</div>

);

}