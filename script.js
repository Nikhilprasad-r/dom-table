
const table = document.createElement("table");
table.className = "table";


const thead = document.createElement("thead");
thead.className = "thead-dark";
const trHead = document.createElement("tr");


const headers = ["#", "First", "Last", "Handle"];
headers.forEach((headerText) => {
  const th = document.createElement("th");
  th.scope = "col";
  th.textContent = headerText;
  trHead.appendChild(th);
});
thead.appendChild(trHead);


const tbody = document.createElement("tbody");


const data = [
  { num: "1", first: "Mark", last: "Otto", handle: "@mdo" },
  { num: "2", first: "Jacob", last: "Thornton", handle: "@fat" },
  { num: "3", first: "Larry", last: "the Bird", handle: "@twitter" },
];


data.forEach((rowData) => {
  const tr = document.createElement("tr");

  Object.values(rowData).forEach((cellData) => {
    const td = document.createElement("td");
    td.textContent = cellData;
    tr.appendChild(td);
  });

  tbody.appendChild(tr);
});


table.appendChild(thead);
table.appendChild(tbody);


document.body.appendChild(table);
