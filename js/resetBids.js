// FUNCTION TO RESET ALL BIDS AFTER AUCTION ENDS
function resetBidsAfterAuction() {
  let items = JSON.parse(localStorage.getItem("items")) || [];

  items.forEach((item) => {
    if (item.bidEndTime && new Date().getTime() > item.bidEndTime) {
      item.currentBid = item.startingPrice;
      item.highestBidder = null;
      item.cpuMaxBid = null;
    }
  });

  localStorage.setItem("items", JSON.stringify(items));
}
