// FUNCTION TO HANDLE CPU PLACING A BID
function cpuBid(itemId) {
  let items = JSON.parse(localStorage.getItem("items")) || [];
  const item = items.find((item) => item.id === itemId);
  const user = localStorage.getItem("currentUser");

  if (!item || new Date().getTime() > item.bidEndTime) return;

  cpuMaxBid(item);

  if (!item.highestBidder || item.highestBidder === "CPU_Bidder") return;

  const userBid = item.currentBid;
  let cpuBidAmount = userBid + Math.floor(Math.random() * 10) + 1;

  if (cpuBidAmount <= item.cpuMaxBid) {
    item.currentBid = cpuBidAmount;
    item.highestBidder = "CPU_Bidder";

    if (item.highestBidder === "CPU_Bidder") {
      let lostItems = JSON.parse(localStorage.getItem("lostItems")) || [];
      if (!lostItems.some((lostItem) => lostItem.id === item.id)) {
        lostItems.push(item);
        localStorage.setItem("lostItems", JSON.stringify(lostItems));
      }
    }

    localStorage.setItem("items", JSON.stringify(items));
    fetchItems();
  }
}

// FUNCTION TO SCHEDULE THE CPU COUNTER BID
function cpuCounterBid(itemId) {
  const randomDelay = Math.floor(Math.random() * (25000 - 5000 + 1)) + 5000;

  setTimeout(() => {
    cpuBid(itemId);
  }, randomDelay);
}

// FUNCTION TO HANDLE CPU MAX BID
function cpuMaxBid(item) {
  if (!item.cpuMaxBid) {
    item.cpuMaxBid = item.startingPrice + Math.floor(Math.random() * 100) + 50;
  }
}
