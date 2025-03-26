// FUNCTION TO HANDLE USER PLACING A BID
function placeBid(itemId) {
  const bidInputToast = document.createElement("div");
  bidInputToast.classList.add("bid-toast");
  bidInputToast.innerHTML = `
    <p>Enter your bid amount:</p>
    <input type="number" id="bidAmountInput" min="1" step="0.01">
    <button id="confirmBidBtn">Place Bid</button>
    <button id="cancelBidBtn">Cancel</button>
  `;

  document.body.appendChild(bidInputToast);

  document.getElementById("confirmBidBtn").onclick = function () {
    const bidAmount = parseFloat(
      document.getElementById("bidAmountInput").value
    );
    if (!isNaN(bidAmount)) {
      let items = JSON.parse(localStorage.getItem("items")) || [];
      const item = items.find((item) => item.id === itemId);
      const user = localStorage.getItem("currentUser");

      if (item && new Date().getTime() < item.bidEndTime) {
        if (bidAmount > item.currentBid) {
          item.currentBid = bidAmount;
          item.highestBidder = user;
          localStorage.setItem("items", JSON.stringify(items));

          showBidNotification("😊 Bid placed successfully!", "success");
          fetchItems();
        } else {
          showBidNotification(
            "⚠️ Bid must be higher than the current bid!",
            "error"
          );
        }
      } else {
        showBidNotification("😔 Bidding for this item has ended!", "error");
      }
    } else {
      showBidNotification("⚠️ Please enter a valid bid amount!", "error");
    }

    bidInputToast.remove();
  };

  document.getElementById("cancelBidBtn").onclick = function () {
    bidInputToast.remove();
  };
}
