import { useLocation } from "react-router-dom";
import { getCoursePath } from "../engine/coursePathEngine";
import { getSkills } from "../engine/skillEngine";
import { getBackupCareers } from "../engine/backupCareerEngine";
import "./Dashboard.css";

export default function Dashboard() {

const location = useLocation();

const data = location.state || {};

const traits = data.traits || {
analytical:0,
creative:0,
social:0,
leadership:0
};

const career = data.career || "Not Available";
const stream = data.stream || "Not Available";
const roadmap = data.roadmap || [];

/* -------- FIT % -------- */

const totalTraits =
traits.analytical +
traits.creative +
traits.social +
traits.leadership;

const fitPercent = totalTraits
? Math.round((Math.max(...Object.values(traits)) / totalTraits) * 100)
: 0;

/* -------- Explanation -------- */

const explanation = `
Based on your assessment results, you show strong alignment with the ${career} career path.
Your personality traits indicate strong analytical thinking, structured decision making,
and problem solving ability which are essential for this field.
`;

/* -------- Data Engines -------- */

const coursePath = getCoursePath(career);
const skills = getSkills(career);
const backups = getBackupCareers(career);

return (

<div className="dashboard-page">

<div className="dashboard-card">

<h1 className="dashboard-title">
Career Intelligence Dashboard
</h1>

{/* Traits */}

<div className="trait-grid">

<div className="trait-box">
<h3>Analytical</h3>
<p>{traits.analytical}</p>
</div>

<div className="trait-box">
<h3>Creative</h3>
<p>{traits.creative}</p>
</div>

<div className="trait-box">
<h3>Social</h3>
<p>{traits.social}</p>
</div>

<div className="trait-box">
<h3>Leadership</h3>
<p>{traits.leadership}</p>
</div>

</div>


{/* Career + Stream */}

<div className="dashboard-grid">

<div className="dashboard-section">

<h2>Top Career Match</h2>

<p className="highlight">
{career}
</p>

<p>
Career Fit Score:
<span className="fit-score"> {fitPercent}%</span>
</p>

</div>

<div className="dashboard-section">

<h2>Recommended Stream</h2>

<p className="highlight">
{stream}
</p>

</div>

</div>


{/* Why Career */}

<div className="dashboard-section">

<h2>Why This Career Matches You</h2>

<p className="description">
{explanation}
</p>

</div>


{/* Course + Roadmap */}

<div className="dashboard-grid">

<div className="dashboard-section">

<h2>Course & Degree Path</h2>

<ul>
{coursePath.map((step,index)=>(
<li key={index}>{step}</li>
))}
</ul>

</div>

<div className="dashboard-section">

<h2>5-Year Career Plan</h2>

<ol>
{roadmap.map((step,index)=>(
<li key={index}>{step}</li>
))}
</ol>

</div>

</div>


{/* Skills + Backup */}

<div className="dashboard-grid">

<div className="dashboard-section">

<h2>Skills To Develop</h2>

<ul>
{skills.map((skill,index)=>(
<li key={index}>{skill}</li>
))}
</ul>

</div>

<div className="dashboard-section">

<h2>Backup Careers</h2>

<ul>
{backups.map((career,index)=>(
<li key={index}>{career}</li>
))}
</ul>

</div>

</div>

</div>

</div>

);
}