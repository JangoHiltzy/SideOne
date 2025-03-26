document.addEventListener("DOMContentLoaded", () => {
  initializeUser();
  initializeItems();
  fetchItems();
  finalizeAuction();
  resetBidsAfterAuction();
});
