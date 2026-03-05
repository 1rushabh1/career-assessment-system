export function getRoadmap(career){

const roadmaps = {

"Software Engineer / Data Scientist":[
"Choose Science Stream in school",
"Study Mathematics and Computer Science",
"Learn Programming (Python / JavaScript)",
"Do B.Tech / B.Sc Computer Science / Data Science",
"Build real-world projects and internships",
"Apply for Software Engineer / Data Scientist jobs"
],

"UI/UX Designer":[
"Choose Arts or Design related stream",
"Learn Design Fundamentals",
"Master tools like Figma and Adobe XD",
"Study UI/UX Design or Graphic Design",
"Build a design portfolio",
"Work as UI/UX Designer"
],

"Psychologist / Teacher":[
"Choose Humanities stream",
"Study Psychology and Sociology",
"Complete BA in Psychology",
"Do Masters in Psychology / Education",
"Gain practical training",
"Become Psychologist or Teacher"
],

"Entrepreneur / Manager":[
"Choose Commerce stream",
"Study Business and Economics",
"Complete BBA or B.Com",
"Learn Business Strategy and Leadership",
"Start a business or join management role"
]

};

return roadmaps[career] || ["Roadmap not available"];

}