// FUNCTION TO SHOW BID NOTIFICATION
function showBidNotification(message, type = "info", duration = 2000) {
  const notification = document.createElement("div");
  notification.classList.add("notification", "bid-notification", type);
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("fade-out");
    setTimeout(() => notification.remove(), 500);
  }, duration);
}

// FUNCTION TO SHOW AUCTION NOTIFICATION
function showAuctionNotification(message, type = "success", duration = 5000) {
  let containerClass = type === "success" ? "won" : "lost";

  let container = document.querySelector(
    `.auction-notifications.${containerClass}`
  );
  if (!container) {
    container = document.createElement("div");
    container.classList.add("auction-notifications", containerClass);
    document.body.appendChild(container);
  }

  const notification = document.createElement("div");
  notification.classList.add("notification", type);
  notification.textContent = message;

  container.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("fade-out");
    setTimeout(() => notification.remove(), 500);
  }, duration);
}
