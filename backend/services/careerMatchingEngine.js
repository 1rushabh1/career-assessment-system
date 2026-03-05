exports.matchCareers = (traitScores, careers) => {
  return careers.map(career => {
    let fitScore = 0;

    Object.keys(traitScores).forEach(trait => {
      fitScore += traitScores[trait] * career.traitWeightage[trait];
    });

    fitScore = (fitScore * 0.8) + (career.futureScopeScore * 0.2);

    return {
      careerId: career._id,
      careerName: career.careerName,
      fitScore: Math.round(fitScore)
    };
  }).sort((a, b) => b.fitScore - a.fitScore);
};