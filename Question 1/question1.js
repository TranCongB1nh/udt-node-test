function sort(listings) {
  for (let i = 0; i < listings.length - 1; i++) {
    for (let j = 0; j < listings.length - 1 - i; j++) {
      const currentRatio = listings[j].totalCost / listings[j].container;
      const nextRatio = listings[j + 1].totalCost / listings[j + 1].container;

      if (currentRatio > nextRatio) {
        [listings[j], listings[j + 1]] = [listings[j + 1], listings[j]];
      }
    }
  }
  return listings;
}

function rentContainers(neededContainer, listings) {
  sort(listings); 

  let totalCost = 0;
  let totalContainers = 0;
  const contracts = [];

  for (const listing of listings) {
    if (totalContainers >= neededContainer) break;

    const availableContainers = listing.container;
    const remainingContainers = neededContainer - totalContainers;

    if (availableContainers >= remainingContainers) {
      contracts.push(
        `[Contract with] ${
          listing.name
        } ${remainingContainers} container, price: ${
          listing.totalCost * (remainingContainers / availableContainers)
        }`
      );
      totalCost +=
        listing.totalCost * (remainingContainers / availableContainers);
      totalContainers += remainingContainers;
    } else {
      contracts.push(
        `[Contract with] ${listing.name} ${availableContainers} container, price: ${listing.totalCost}`
      );
      totalCost += listing.totalCost;
      totalContainers += availableContainers;
    }
  }

  if (totalContainers < neededContainer) {
    contracts.push("Not enough containers");
  }
  contracts.push(`[Summary] total cost ${totalCost}`);

  return contracts;
}

//Case 1
// const neededContainer = 3;
// const listings = [
//   { name: "Container renter A", container: 1, totalCost: 1 },
//   { name: "Container renter B", container: 2, totalCost: 1 },
//   { name: "Container renter C", container: 3, totalCost: 3 },
// ];

// console.log(rentContainers(neededContainer, listings));

//Case 2
// const neededContainer = 10;
// const listings = [
//     { name: "Container renter A", container: 5, totalCost: 5 },
//     { name: "Container renter B", container: 2, totalCost: 10 },
//     { name: "Container renter C", container: 2, totalCost: 3 }
// ];

// console.log(rentContainers(neededContainer, listings));

//Case 3
const neededContainer = 10;
const listings = [
    { name: "Container renter A", container: 5, totalCost: 5 },
    { name: "Container renter B", container: 2, totalCost: 10 },
    { name: "Container renter C", container: 10, totalCost: 3 }
];

console.log(rentContainers(neededContainer, listings));