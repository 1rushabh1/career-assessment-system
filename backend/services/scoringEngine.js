exports.calculateTraitScores = (answers) => {
  const traitScores = {
    analytical: 0,
    creative: 0,
    leadership: 0,
    social: 0,
    technical: 0
  };

  answers.forEach(answer => {
    Object.keys(answer.weightMap).forEach(trait => {
      traitScores[trait] += answer.weightMap[trait];
    });
  });

  return traitScores;
};