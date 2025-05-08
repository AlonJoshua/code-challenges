/* 
  The janitor of a high scholl is extremely efficient.
  By the end of each day, all of the school's waste is in plastic bags weighting between 1.01 pounds and 3.00 pounds.
  All plastic bags are then taken to the trash bins outside.
  One trip is described as selecting a number of bags which together do not weight more then 3.00 pounds.
  Dumping them in the outside trash can and returning to the school.
  Given the number of plastic bags N and the weight of each bag,
  determine and return the minimum number of trips the janitor has to make.

  Example:
  N = 5
  weight = [1.01, 1.99, 2.5, 1.01]

  Answer:
  return = 3
  The janitor can carry all plastic bags out in 3 trips: [1.01 + 1.99, 2.5, 1.5 + 1.01]


  Constraints
  1 =< n =< 1000
  1.01 =< weight =< 3.00
*/

// Uncomment the function the code inside, run 'npm run test' to test your code
export function minimunJanitorTrips(N: number[]): number {

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
};