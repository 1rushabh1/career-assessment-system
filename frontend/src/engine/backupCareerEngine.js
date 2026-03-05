export function getBackupCareers(career){

const backupMap = {

"Software Engineer":[
"Data Analyst",
"DevOps Engineer",
"Cyber Security Analyst",
"Cloud Engineer"
],

"Data Scientist":[
"Data Analyst",
"Machine Learning Engineer",
"AI Engineer",
"Business Analyst"
],

"UI/UX Designer":[
"Graphic Designer",
"Product Designer",
"UX Researcher",
"Frontend Developer"
],

"Product Manager":[
"Business Analyst",
"Startup Founder",
"Consultant",
"Operations Manager"
],

"Entrepreneur":[
"Startup Founder",
"Business Consultant",
"Product Manager",
"Marketing Strategist"
]

};

return backupMap[career] || [
"Business Analyst",
"Consultant",
"Researcher"
];

}