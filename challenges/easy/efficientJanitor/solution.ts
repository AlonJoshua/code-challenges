export function minimumJanitorTrips(N: number[]): number {

  if (N.length === 1) {
    return 1;
  }

  const sortedBags = N.sort((a, b) => a - b);

  let leftBag = 0;
  let rightBag = sortedBags.length - 1;
  let tripsAmount = 0;

  while (leftBag <= rightBag) {
    if (leftBag === rightBag) {
      tripsAmount++;
      break;
    }

    if ((sortedBags[leftBag] + sortedBags[rightBag]) <= 3) {
      tripsAmount++;
    } else {
      tripsAmount += 2;
    }
    
    leftBag++;
    rightBag--;
  }

  return tripsAmount;
  // Time: O(n log n)
  // Space: O(n)
};