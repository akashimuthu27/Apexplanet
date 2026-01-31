let items = [
    { name: "Laptop", price: 60000, category: "electronics" },
    { name: "Book", price: 500, category: "books" },
    { name: "Mobile", price: 20000, category: "electronics" }
];

let container = document.getElementById("products");

function display(data) {
    container.innerHTML = "";
    data.forEach(i => {
        container.innerHTML += `<p>${i.name} - ₹${i.price}</p>`;
    });
}
display(items);

function filterProducts(cat) {
    if (cat === "all") display(items);
    else display(items.filter(i => i.category === cat));
}

function sortProducts(order) {
    let sorted = [...items].sort((a, b) =>
        order === "low" ? a.price - b.price : b.price - a.price
    );
    display(sorted);
}
