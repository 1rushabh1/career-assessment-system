export function getCoursePath(career){

const paths = {

"Software Engineer":[
"Choose Science stream (PCM)",
"Focus on Mathematics and Computer Science",
"Learn Programming (C, JavaScript, Python)",
"Pursue B.Tech / B.Sc Computer Science",
"Build real-world software projects",
"Get internship as Software Developer"
],

"UI/UX Designer":[
"Choose Arts / Design oriented stream",
"Learn Design Fundamentals",
"Master tools like Figma, Adobe XD",
"Study UI/UX Design / Interaction Design",
"Build design portfolio",
"Work as UI/UX Designer"
],

"Psychologist":[
"Choose Humanities stream",
"Study Psychology in graduation",
"Pursue B.A / B.Sc Psychology",
"Complete M.A / M.Sc Psychology",
"Get clinical training",
"Become licensed psychologist"
],

"Business Manager":[
"Choose Commerce stream",
"Study Business Studies & Economics",
"Pursue BBA / B.Com",
"Learn leadership & management",
"Gain corporate internship",
"Become business manager"
]

};

return paths[career] || [
"Choose suitable stream",
"Pursue relevant degree",
"Develop domain skills",
"Gain internship experience",
"Start professional career"
];

}