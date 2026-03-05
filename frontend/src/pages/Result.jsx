import { useLocation, useNavigate } from "react-router-dom";
import { getCareerRecommendation } from "../engine/careerEngine";
import { getStreamRecommendation } from "../engine/streamEngine";
import { getRoadmap } from "../engine/roadmapEngine";
import "./Result.css";

export default function Result(){

const location = useLocation();
const navigate = useNavigate();

const answers = location.state || {};

const score={
analytical:0,
creative:0,
social:0,
leadership:0
};

// calculate trait scores
Object.values(answers).forEach(trait=>{
score[trait]+=1;
});

// generate recommendations
const career = getCareerRecommendation(score);
const stream = getStreamRecommendation(score);
const roadmap = getRoadmap(career);

const goToDashboard = () => {

navigate("/dashboard",{
state:{
traits:score,
career:career,
stream:stream,
roadmap:roadmap
}
});

};

return(

<div className="result-page">

<div className="result-card">

<h2>Your Personality Traits</h2>

<div className="trait-grid">

<div className="trait-box">
<h3>Analytical</h3>
<p>{score.analytical}</p>
</div>

<div className="trait-box">
<h3>Creative</h3>
<p>{score.creative}</p>
</div>

<div className="trait-box">
<h3>Social</h3>
<p>{score.social}</p>
</div>

<div className="trait-box">
<h3>Leadership</h3>
<p>{score.leadership}</p>
</div>

</div>

<h2>Recommended Career</h2>
<div className="result-highlight">
{career}
</div>

<h2>Recommended Stream</h2>
<div className="result-highlight">
{stream}
</div>

<h2>Career Roadmap</h2>

<ol className="roadmap-list">

{roadmap.map((step,index)=>(
<li key={index}>{step}</li>
))}

</ol>

<button className="dashboard-btn" onClick={goToDashboard}>
View Full Dashboard
</button>

</div>

</div>

);
}