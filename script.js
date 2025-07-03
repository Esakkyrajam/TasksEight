// const indianNames = [
//   "Aarav",
//   "Vivaan",
//   "Aditya",
//   "Vihaan",
//   "Krishna",
//   "Arjun",
//   "Sai",
//   "Rohan",
//   "Karan",
//   "Om",
//   "Ishaan",
//   "Anirudh",
//   "Rudra",
//   "Harsha",
//   "Yash",
//   "Neeraj",
//   "Dhruv",
//   "Kabir",
//   "Manav",
//   "Rahul",
//   "Laksh",
//   "Nikhil",
//   "Varun",
//   "Siddharth",
//   "Ayaan",
//   "Tanish",
//   "Raj",
//   "Naveen",
//   "Kunal",
//   "Vikram",
//   "Rakesh",
//   "Akhil",
//   "Nitin",
//   "Abhinav",
//   "Sagar",
//   "Tarun",
//   "Rishi",
//   "Ajay",
//   "Sathish",
//   "Ashwin",
//   "Balaji",
//   "Vignesh",
//   "Karthik",
//   "Srinivas",
//   "Deepak",
//   "Pranav",
//   "Suresh",
//   "Ravi",
//   "Ramesh",
//   "Gopal",
// ];

// const data = [];

// for (let i = 1; i <= 100; i++) {
//   const name = indianNames[i % indianNames.length] + " " + i;
//   const email = `${indianNames[
//     i % indianNames.length
//   ].toLowerCase()}${i}@example.in`;
//   data.push({ id: i, name, email });
// }

// const app = document.getElementById("app");

// // Title
// const title = document.createElement("h1");
// title.id = "title";
// title.textContent = "Pagination using DOM Manipulation";
// app.appendChild(title);

// // Description
// const description = document.createElement("p");
// description.id = "description";
// description.textContent =
//   "This is a simple pagination example using DOM manipulation.";
// app.appendChild(description);

// // Create <div class="table-responsive">
// const tableContainer = document.createElement("div");
// tableContainer.className = "table-responsive";

// // Create <table class="table table-bordered">
// const table = document.createElement("table");
// table.className = "table table-bordered";

// // Create <thead>
// const thead = document.createElement("thead");
// thead.innerHTML = `
//   <tr>
//     <th>ID</th>
//     <th>Name</th>
//     <th>Email</th>
//   </tr>
// `;

// // Create <tbody> where data rows will go
// const tbody = document.createElement("tbody");
// tbody.id = "data-list";

// // Append all together
// table.appendChild(thead);
// table.appendChild(tbody);
// tableContainer.appendChild(table);
// app.appendChild(tableContainer);

// // Pagination buttons container
// const buttonContainer = document.createElement("div");
// buttonContainer.id = "buttons";
// buttonContainer.className = "d-flex justify-content-center";
// app.appendChild(buttonContainer);

// let currentPage = 1;
// const rowsPerPage = 10;

// function displayList(items, wrapper, rowsPerPage, page) {
//   wrapper.innerHTML = "";
//   page--;

//   const start = page * rowsPerPage;
//   const end = start + rowsPerPage;
//   const paginatedItems = items.slice(start, end);

//   for (let i = 0; i < paginatedItems.length; i++) {
//     const item = paginatedItems[i];
//     const tr = document.createElement("tr");

//     tr.innerHTML = `
//       <td>${item.id}</td>
//       <td>${item.name}</td>
//       <td>${item.email}</td>
//     `;
//     wrapper.appendChild(tr);
//   }
// }

// function setupPaginationButtons(items, wrapper, rowsPerPage) {
//   wrapper.innerHTML = "";

//   const totalPages = Math.ceil(items.length / rowsPerPage);

//   // First
//   const firstBtn = document.createElement("button");
//   firstBtn.textContent = "First";
//   firstBtn.addEventListener("click", () => {
//     currentPage = 1;
//     updatePagination();
//   });
//   wrapper.appendChild(firstBtn);

//   // Prev
//   const prevBtn = document.createElement("button");
//   prevBtn.textContent = "Previous";
//   prevBtn.addEventListener("click", () => {
//     if (currentPage > 1) {
//       currentPage--;
//       updatePagination();
//     }
//   });
//   wrapper.appendChild(prevBtn);

//   // Numbered buttons
//   for (let i = 1; i <= totalPages; i++) {
//     const pageBtn = document.createElement("button");
//     pageBtn.textContent = i;
//     if (i === currentPage) pageBtn.classList.add("active");

//     pageBtn.addEventListener("click", () => {
//       currentPage = i;
//       updatePagination();
//     });

//     wrapper.appendChild(pageBtn);
//   }

//   // Next
//   const nextBtn = document.createElement("button");
//   nextBtn.textContent = "Next";
//   nextBtn.addEventListener("click", () => {
//     if (currentPage < totalPages) {
//       currentPage++;
//       updatePagination();
//     }
//   });
//   wrapper.appendChild(nextBtn);

//   // Last
//   const lastBtn = document.createElement("button");
//   lastBtn.textContent = "Last";
//   lastBtn.addEventListener("click", () => {
//     currentPage = totalPages;
//     updatePagination();
//   });
//   wrapper.appendChild(lastBtn);
// }

// function updatePagination() {
//   displayList(data, tbody, rowsPerPage, currentPage);
//   setupPaginationButtons(data);
// }

// updatePagination(); // Call initially

const indianNames = [
  "Aarav",
  "Vivaan",
  "Aditya",
  "Vihaan",
  "Krishna",
  "Arjun",
  "Sai",
  "Rohan",
  "Karan",
  "Om",
  "Ishaan",
  "Anirudh",
  "Rudra",
  "Harsha",
  "Yash",
  "Neeraj",
  "Dhruv",
  "Kabir",
  "Manav",
  "Rahul",
  "Laksh",
  "Nikhil",
  "Varun",
  "Siddharth",
  "Ayaan",
  "Tanish",
  "Raj",
  "Naveen",
  "Kunal",
  "Vikram",
  "Rakesh",
  "Akhil",
  "Nitin",
  "Abhinav",
  "Sagar",
  "Tarun",
  "Rishi",
  "Ajay",
  "Sathish",
  "Ashwin",
  "Balaji",
  "Vignesh",
  "Karthik",
  "Srinivas",
  "Deepak",
  "Pranav",
  "Suresh",
  "Ravi",
  "Ramesh",
  "Gopal",
];

const data = [];
for (let i = 1; i <= 100; i++) {
  const name = indianNames[i % indianNames.length] + " " + i;
  const email = `${indianNames[
    i % indianNames.length
  ].toLowerCase()}${i}@example.in`;
  data.push({ id: i, name, email });
}

const app = document.getElementById("app");

const title = document.createElement("h1");
title.id = "title";
title.textContent = "Pagination using DOM Manipulation";
app.appendChild(title);

const description = document.createElement("p");
description.id = "description";
description.textContent =
  "This is a simple pagination example using DOM manipulation.";
app.appendChild(description);

// Table structure
const tableContainer = document.createElement("div");
tableContainer.className = "table-responsive";

const table = document.createElement("table");
table.className = "table table-bordered";
table.id = "table"; 

const thead = document.createElement("thead");
thead.innerHTML = `
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
  </tr>
`;

const tbody = document.createElement("tbody");
tbody.id = "data-list";

table.appendChild(thead);
table.appendChild(tbody);
tableContainer.appendChild(table);
app.appendChild(tableContainer);

// Pagination buttons
const buttonContainer = document.createElement("div");
buttonContainer.id = "buttons";
buttonContainer.className =
  "d-flex justify-content-center flex-wrap gap-2 mt-3";
app.appendChild(buttonContainer);

let currentPage = 1;
const rowsPerPage = 10;

function displayList(items, wrapper, rowsPerPage, page) {
  wrapper.innerHTML = "";
  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const paginatedItems = items.slice(start, end);

  paginatedItems.forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.email}</td>
    `;
    wrapper.appendChild(tr);
  });
}

function setupPagination(items) {
  buttonContainer.innerHTML = "";

  const totalPages = Math.ceil(items.length / rowsPerPage);

  const firstBtn = createButton("First", () => {
    currentPage = 1;
    updatePagination();
  });

  const prevBtn = createButton("Previous", () => {
    if (currentPage > 1) {
      currentPage--;
      updatePagination();
    }
  });

  const nextBtn = createButton("Next", () => {
    if (currentPage < totalPages) {
      currentPage++;
      updatePagination();
    }
  });

  const lastBtn = createButton("Last", () => {
    currentPage = totalPages;
    updatePagination();
  });

  buttonContainer.appendChild(firstBtn);
  buttonContainer.appendChild(prevBtn);

  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = createButton(i, () => {
      currentPage = i;
      updatePagination();
    });
    if (i === currentPage) {
      pageBtn.classList.add("btn-primary");
    }
    buttonContainer.appendChild(pageBtn);
  }

  buttonContainer.appendChild(nextBtn);
  buttonContainer.appendChild(lastBtn);
}

function createButton(label, onClick) {
  const btn = document.createElement("button");
  btn.textContent = label;
  btn.className = "btn btn-outline-primary";
  btn.addEventListener("click", onClick);
  return btn;
}

function updatePagination() {
  displayList(data, tbody, rowsPerPage, currentPage);
  setupPagination(data);
}

updatePagination();
