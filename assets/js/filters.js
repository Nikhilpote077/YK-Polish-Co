function getFilters() {
  const p = new URLSearchParams(location.search);
  return {
    style: p.get("style") || "",
    colour: p.get("colour") || "",
    q: (p.get("q") || "").toLowerCase(),
    collection: p.get("collection") || "",
    sort: p.get("sort") || "featured",
  };
}
function applyProductFilters(items, filters) {
  let out = items.filter(
    (x) =>
      (!filters.style || x.styles.includes(filters.style)) &&
      (!filters.colour || x.colours.includes(filters.colour)) &&
      (!filters.collection || x.collection.includes(filters.collection)) &&
      (!filters.q ||
        [x.name, x.description, ...x.styles, ...x.colours, ...x.collection]
          .join(" ")
          .toLowerCase()
          .includes(filters.q)),
  );
  if (filters.sort === "price-low") out.sort((a, b) => a.price - b.price);
  if (filters.sort === "price-high") out.sort((a, b) => b.price - a.price);
  if (filters.sort === "new")
    out.sort((a, b) => Number(b.isNew) - Number(a.isNew));
  return out;
}
function renderProducts(target, items) {
  const el = document.querySelector(target);
  if (!el) return;
  el.innerHTML = items.length
    ? items.map(productCard).join("")
    : `<div class="empty-state"><h3>No sets found</h3><p>Try another style, colour or search term.</p><a class="btn btn-primary" href="shop.html">View all designs</a></div>`;
}
function initShop() {
  const grid = document.querySelector("[data-product-grid]");
  if (!grid) return;
  const filters = getFilters();
  let items = applyProductFilters(PRODUCTS, filters);
  const sort = document.querySelector("#sortProducts");
  if (sort) {
    sort.value = filters.sort;
    sort.addEventListener("change", () => {
      const p = new URLSearchParams(location.search);
      p.set("sort", sort.value);
      location.search = p.toString();
    });
  }
  document
    .querySelector("[data-results-count]")
    ?.replaceChildren(
      document.createTextNode(
        `${items.length} ${items.length === 1 ? "design" : "designs"}`,
      ),
    );
  renderProducts("[data-product-grid]", items);
  document.querySelectorAll("[data-filter-link]").forEach((a) => {
    const u = new URL(a.href);
    if (
      filters.style === u.searchParams.get("style") ||
      filters.colour === u.searchParams.get("colour")
    )
      a.classList.add("is-selected");
  });
}
document.addEventListener("DOMContentLoaded", initShop);
