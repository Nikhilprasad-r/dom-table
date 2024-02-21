// Create table element
const table = document.createElement("table");
table.className = "table";

// Create table head element
const thead = document.createElement("thead");
thead.className = "thead-dark";
const trHead = document.createElement("tr");

// Create table head cells
const headers = ["#", "First", "Last", "Handle"];
headers.forEach((headerText) => {
  const th = document.createElement("th");
  th.scope = "col";
  th.textContent = headerText;
  trHead.appendChild(th);
});
thead.appendChild(trHead);

// Create table body element
const tbody = document.createElement("tbody");

// Data for the table
const data = [
  { num: "1", first: "Mark", last: "Otto", handle: "@mdo" },
  { num: "2", first: "Jacob", last: "Thornton", handle: "@fat" },
  { num: "3", first: "Larry", last: "the Bird", handle: "@twitter" },
];

// Create table body rows
data.forEach((rowData) => {
  const tr = document.createElement("tr");

  Object.values(rowData).forEach((cellData) => {
    const td = document.createElement("td");
    td.textContent = cellData;
    tr.appendChild(td);
  });

  tbody.appendChild(tr);
});

// Append thead and tbody to the table
table.appendChild(thead);
table.appendChild(tbody);

// Append the table to the document body
document.body.appendChild(table);
