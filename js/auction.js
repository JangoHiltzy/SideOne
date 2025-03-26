// FUNCTION TO FINALIZE AUCTION
function finalizeAuction() {
  let items = JSON.parse(localStorage.getItem("items")) || [];
  const user = localStorage.getItem("currentUser");

  let wonItems = [];
  let lostItems = [];

  items.forEach((item) => {
    if (item.bidEndTime && new Date().getTime() > item.bidEndTime) {
      if (item.highestBidder === user) {
        wonItems.push(item);
      } else if (item.highestBidder === "CPU_Bidder") {
        lostItems.push(item);
      }

      item.bidEndTime = new Date().getTime() + 5 * 60 * 1000;
      item.highestBidder = null;
      item.currentBid = item.startingPrice;
    }
  });

  localStorage.setItem("items", JSON.stringify(items));
  localStorage.setItem("wonItems", JSON.stringify(wonItems));
  localStorage.setItem("lostItems", JSON.stringify(lostItems));

  if (wonItems.length > 0) {
    const wonItemNames = wonItems.map((item) => item.name).join(", ");
    showAuctionNotification(`😊 You won: ${wonItemNames}!`, "success", 5000);
  }

  if (lostItems.length > 0) {
    const lostItemNames = lostItems.map((item) => item.name).join(", ");
    showAuctionNotification(`😔 You lost: ${lostItemNames}.`, "error", 5000);
  }
}
