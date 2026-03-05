export function getStreamRecommendation(score){

let stream = "";

if(
score.analytical >= score.creative &&
score.analytical >= score.social &&
score.analytical >= score.leadership
){
stream = "Science";
}

else if(
score.creative >= score.analytical &&
score.creative >= score.social &&
score.creative >= score.leadership
){
stream = "Arts";
}

else if(
score.social >= score.analytical &&
score.social >= score.creative &&
score.social >= score.leadership
){
stream = "Humanities";
}

else{
stream = "Commerce";
}

return stream;

}