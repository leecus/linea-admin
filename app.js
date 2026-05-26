const todayText = document.querySelector("#todayText");
const topLinks = document.querySelectorAll(".top-links a");
const componentSearch = document.querySelector("#componentSearch");
const sections = document.querySelectorAll(".component-section");
const segmentedButtons = document.querySelectorAll(".segmented button");
const tabButtons = document.querySelectorAll(".underline-tabs button");
const menuButton = document.querySelector("#menuButton");
const actionMenu = document.querySelector("#actionMenu");
const tableSearch = document.querySelector("#tableSearch");
const tableStatus = document.querySelector("#tableStatus");
const tableRows = Array.from(document.querySelectorAll("#componentTable tr"));
const riskRange = document.querySelector("#riskRange");
const rangeValue = document.querySelector("#rangeValue");
const toast = document.querySelector("#toast");
const modalBackdrop = document.querySelector("#modalBackdrop");
const openModal = document.querySelector("#openModal");
const closeModal = document.querySelector("#closeModal");
const cancelModal = document.querySelector("#cancelModal");
const openPalette = document.querySelector("#openPalette");
const commandPalette = document.querySelector("#commandPalette");
const accordionButtons = document.querySelectorAll(".accordion > button");
const openDrawer = document.querySelector("#openDrawer");
const closeDrawer = document.querySelector("#closeDrawer");
const drawerBackdrop = document.querySelector("#drawerBackdrop");
const popoverButton = document.querySelector("#popoverButton");
const popoverCard = document.querySelector("#popoverCard");

let toastTimer;

todayText.textContent = new Intl.DateTimeFormat("zh-CN", {
  month: "long",
  day: "numeric",
  weekday: "long",
}).format(new Date());

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-open");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-open"), 2200);
}

function closeModalDialog() {
  modalBackdrop.classList.remove("is-open");
  modalBackdrop.setAttribute("aria-hidden", "true");
}

function closeDrawerPanel() {
  drawerBackdrop.classList.remove("is-open");
  drawerBackdrop.setAttribute("aria-hidden", "true");
}

function filterTable() {
  const query = tableSearch.value.trim().toLowerCase();
  const state = tableStatus.value;

  tableRows.forEach((row) => {
    const stateMatches = state === "all" || row.dataset.state === state;
    const textMatches = row.textContent.toLowerCase().includes(query);
    row.classList.toggle("is-hidden", !stateMatches || !textMatches);
  });
}

topLinks.forEach((link) => {
  link.addEventListener("click", () => {
    topLinks.forEach((item) => item.classList.toggle("is-active", item === link));
  });
});

componentSearch.addEventListener("input", () => {
  const query = componentSearch.value.trim().toLowerCase();
  sections.forEach((section) => {
    section.classList.toggle("is-hidden", Boolean(query) && !section.dataset.search.includes(query));
  });
});

segmentedButtons.forEach((button) => {
  button.addEventListener("click", () => {
    segmentedButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
      item.setAttribute("aria-selected", item === button ? "true" : "false");
    });
  });
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
      item.setAttribute("aria-selected", item === button ? "true" : "false");
    });
    document.querySelectorAll(".tab-panel").forEach((panel) => {
      panel.classList.toggle("is-active", panel.id === button.dataset.panel);
    });
  });
});

menuButton.addEventListener("click", () => {
  const isOpen = actionMenu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".menu-specimen")) {
    actionMenu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }

  if (!event.target.closest(".popover-specimen")) {
    popoverCard.classList.remove("is-open");
    popoverButton.setAttribute("aria-expanded", "false");
  }
});

tableSearch.addEventListener("input", filterTable);
tableStatus.addEventListener("change", filterTable);

riskRange.addEventListener("input", () => {
  rangeValue.textContent = riskRange.value;
});

document.querySelectorAll("[data-toast]").forEach((button) => {
  button.addEventListener("click", () => {
    showToast(button.dataset.toast);
    closeModalDialog();
  });
});

openModal.addEventListener("click", () => {
  modalBackdrop.classList.add("is-open");
  modalBackdrop.setAttribute("aria-hidden", "false");
});

closeModal.addEventListener("click", closeModalDialog);
cancelModal.addEventListener("click", closeModalDialog);

modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) {
    closeModalDialog();
  }
});

openDrawer.addEventListener("click", () => {
  drawerBackdrop.classList.add("is-open");
  drawerBackdrop.setAttribute("aria-hidden", "false");
});

closeDrawer.addEventListener("click", closeDrawerPanel);

drawerBackdrop.addEventListener("click", (event) => {
  if (event.target === drawerBackdrop) {
    closeDrawerPanel();
  }
});

popoverButton.addEventListener("click", () => {
  const isOpen = popoverCard.classList.toggle("is-open");
  popoverButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

openPalette.addEventListener("click", () => {
  commandPalette.classList.add("is-open");
  commandPalette.setAttribute("aria-hidden", "false");
});

commandPalette.addEventListener("click", (event) => {
  if (event.target === commandPalette || event.target.tagName === "A") {
    commandPalette.classList.remove("is-open");
    commandPalette.setAttribute("aria-hidden", "true");
  }
});

accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const panel = button.nextElementSibling;
    const isOpen = panel.classList.toggle("is-open");
    button.setAttribute("aria-expanded", isOpen ? "true" : "false");
    button.querySelector("span").textContent = isOpen ? "−" : "＋";
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModalDialog();
    closeDrawerPanel();
    popoverCard.classList.remove("is-open");
    popoverButton.setAttribute("aria-expanded", "false");
    commandPalette.classList.remove("is-open");
    commandPalette.setAttribute("aria-hidden", "true");
  }
});
