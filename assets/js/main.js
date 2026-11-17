const searchInput = document.querySelector("#tool-search");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const cards = [...document.querySelectorAll(".tool-card")];
const emptyState = document.querySelector("#empty-state");
const toolCount = document.querySelector("#tool-count");

let activeFilter = "all";

function updateTools() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  let visible = 0;

  cards.forEach((card) => {
    const matchesCategory = activeFilter === "all" || card.dataset.category === activeFilter;
    const searchable = `${card.dataset.search} ${card.textContent}`.toLocaleLowerCase();
    const matchesQuery = searchable.includes(query);
    const show = matchesCategory && matchesQuery;

    card.hidden = !show;
    if (show) visible++;
  });

  emptyState.hidden = visible !== 0;
  toolCount.textContent = `${visible} TOOLS`;
}

searchInput.addEventListener("input", updateTools);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    updateTools();
  });
});

// "/" キーで検索欄にフォーカス（入力中は除く）
document.addEventListener("keydown", (event) => {
  const target = event.target;
  const isTyping = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement;
  if (event.key === "/" && !isTyping && !event.ctrlKey && !event.metaKey && !event.altKey) {
    event.preventDefault();
    searchInput.focus();
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();
