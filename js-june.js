//June 3

var twoCitySchedCost = function(costs) {

  let totalCost = 0;
  let costsDiffs = {};
  let costsB = 0;
  let costsA = 0;
  
  
  for (let x = 0; x < costs.length; x++) {
      costsDiffs[x] = Math.abs(costs[x][0] - costs[x][1]);
  }
                        
  let idxs = Object.keys(costsDiffs);

  idxs.sort(function(a,b) {
      return costsDiffs[b] - costsDiffs[a];
  })
  
  for (let i = 0; i < idxs.length; i++) {
      let currIdx = idxs[i]

      if (costsB === idxs.length/2) {
          totalCost += costs[currIdx][0];
          costsA += 1;
          continue;
      } else if (costsA === idxs.length/2) {
          totalCost += costs[currIdx][1];
          costsB += 1;   
          continue;
      }
      
      if (costsB === idxs.length/2 && costsA === idxs.length/2 ) {
          break;
      }
       
      if (costs[currIdx][0] < costs[currIdx][1]) {
          totalCost += costs[currIdx][0];
          costsA += 1;
      } else {
          totalCost += costs[currIdx][1];
          costsB += 1;
      }
  }

  return totalCost;
};