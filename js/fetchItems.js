// FUNCTION TO DISPLAY AND FETCH VINYL ITEMS
document.addEventListener("DOMContentLoaded", () => {
  fetchItems();
});

function fetchItems() {
  let itemsList = document.getElementById("items-list");

  if (!itemsList) {
    console.error("❌ Error: #items-list not found in the DOM!");
    return;
  }

  itemsList.innerHTML = "";

  let items = JSON.parse(localStorage.getItem("items")) || [];

  let updated = false;

  items.forEach((item) => {
    if (!item.bidEndTime || new Date().getTime() > item.bidEndTime) {
      item.bidEndTime = new Date().getTime() + 5 * 60 * 1000;
      updated = true;
    }

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    itemDiv.innerHTML = `
        <div class="item-details">
            <img src="/images/${item.image}" alt="${item.name}" class="album-cover">
            <div class="item-info">
                <h2>${item.name}</h2>
                <p><strong>Artist:</strong> ${item.artist}</p>
                <p><strong>Starting Price:</strong> €${item.startingPrice}</p>
                <p><strong>Current Bid:</strong> €${item.currentBid}</p>
                <p><strong>Time Left:</strong> <span id="timer-${item.id}">Loading...</span></p>
            </div>
        </div>
        <button id="bid-btn-${item.id}" onclick="placeBid(${item.id})">Place Bid</button>
    `;

    itemsList.appendChild(itemDiv);

    startCountdown(item.id, item.bidEndTime);
  });

  if (updated) {
    localStorage.setItem("items", JSON.stringify(items));
  }
}
