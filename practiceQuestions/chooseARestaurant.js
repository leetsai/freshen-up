const solution = (friendRankings) => {
  const rankings = Array(friendRankings[0].length).fill(0);
  for (let i = 0; i < friendRankings.length; i++) {
    for (let j = 1; j < friendRankings[i].length; j++) {
      const currRestaurantNum = friendRankings[i][j] - 1;
      // j is rank (lower is better), currRestaurantNum is the restaurant num converted to zero index

      rankings[currRestaurantNum] += j;
    }
  }

  let topRankedRestaurant;
  let topRanking = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < rankings.length; i++) {
    if (rankings[i] < topRanking) {
      // find top ranking (lower is better) and top ranked restaurant num (still in zero index)
      topRankedRestaurant = i;
      topRanking = rankings[i];
    }
  }

  let topRankingAppearances = 0;

  // check to see that top ranking is unique
  for (let i = 0; i < rankings.length; i++) {
    if (rankings[i] === topRanking) {
      topRankingAppearances++;
    }
  }

  // convert restaurant num back to one index
  return topRankingAppearances === 1 ? topRankedRestaurant + 1 : -1;
};

let preferences = [
  [1, 2, 3, 4],
  [3, 1, 4, 2],
  [4, 2, 1, 3],
];
console.log(solution(preferences));
// 1
preferences = [
  [1, 2, 3],
  [2, 3, 1],
  [3, 1, 2],
];
console.log(solution(preferences));
// -1
preferences = [
  [1, 4, 5, 3, 2, 6],
  [2, 5, 6, 1, 3, 4],
  [3, 6, 5, 2, 1, 4],
];
console.log(solution(preferences));
// 5
preferences = [[], [], []];
console.log(solution(preferences));
// -1
