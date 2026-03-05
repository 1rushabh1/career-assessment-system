export function getSkills(career) {

const skillMap = {

"Software Engineer":[
"Programming",
"Data Structures",
"Algorithms",
"System Design",
"Problem Solving",
"Debugging"
],

"Data Scientist":[
"Python",
"Statistics",
"Machine Learning",
"Data Visualization",
"SQL",
"Critical Thinking"
],

"UI/UX Designer":[
"User Research",
"Wireframing",
"Figma",
"Visual Design",
"Creativity",
"Usability Testing"
],

"Product Manager":[
"Product Strategy",
"Market Research",
"Leadership",
"Communication",
"Analytics",
"Decision Making"
],

"Entrepreneur":[
"Leadership",
"Risk Taking",
"Business Strategy",
"Marketing",
"Financial Planning",
"Innovation"
]

};

return skillMap[career] || [
"Problem Solving",
"Communication",
"Critical Thinking"
];

}