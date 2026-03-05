export function getCareerRecommendation(score){

let career="";

if(score.analytical >= score.creative &&
   score.analytical >= score.social &&
   score.analytical >= score.leadership){

career="Software Engineer / Data Scientist";

}

else if(score.creative >= score.analytical &&
        score.creative >= score.social &&
        score.creative >= score.leadership){

career="UI/UX Designer";

}

else if(score.social >= score.analytical &&
        score.social >= score.creative &&
        score.social >= score.leadership){

career="Psychologist / Teacher";

}

else{

career="Entrepreneur / Manager";

}

return career;

}