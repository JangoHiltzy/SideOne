// FUNCTION TO HANDLE AUCTION COUNTDOWN TIMER
function startCountdown(itemId, bidEndTime) {
  const user = localStorage.getItem("currentUser");
  const timerElement = document.getElementById(`timer-${itemId}`);
  const bidButton = document.getElementById(`bid-btn-${itemId}`);
  let items = JSON.parse(localStorage.getItem("items")) || [];
  let item = items.find((item) => item.id === itemId);

  function updateTimer() {
    const now = new Date().getTime();
    const timeLeft = bidEndTime - now;

    if (timeLeft <= 0) {
      timerElement.textContent = "Bidding Ended";
      bidButton.disabled = true;
      bidButton.style.opacity = "0.5";

      if (item && item.highestBidder === user) {
        let wonItems = JSON.parse(localStorage.getItem("wonItems")) || [];

        if (!wonItems.some((wonItem) => wonItem.id === item.id)) {
          wonItems.push(item);
          localStorage.setItem("wonItems", JSON.stringify(wonItems));
        }

        finalizeAuction();
        resetBidsAfterAuction();
      }

      return;
    }

    const minutes = Math.floor(timeLeft / 60000);
    const seconds = Math.floor((timeLeft % 60000) / 1000);
    timerElement.textContent = `${minutes}m ${seconds}s`;

    setTimeout(updateTimer, 1000);
  }

  updateTimer();
}
