import { useState } from "react";
import { questions } from "../data/questions";
import { useNavigate } from "react-router-dom";
import "./Assessment.css";

export default function Assessment(){

const [answers,setAnswers] = useState({});
const navigate = useNavigate();

const handleSelect=(qid,trait)=>{
setAnswers({...answers,[qid]:trait});
};

const handleSubmit=(e)=>{
e.preventDefault();
navigate("/result",{state:answers});
};

return(

<div className="assessment-page">

<div className="assessment-card">

<h2>Career Assessment</h2>

<form onSubmit={handleSubmit}>

{questions.map(q=>(

<div key={q.id} className="question-card">

<p className="question-text">{q.question}</p>

{q.options.map((opt,i)=>(

<label key={i} className="option-row">

<input
type="radio"
name={q.id}
onChange={()=>handleSelect(q.id,opt.trait)}
/>

<span>{opt.text}</span>

</label>

))}

</div>

))}

<button className="submit-btn" type="submit">
Submit Assessment
</button>

</form>

</div>

</div>

);
}