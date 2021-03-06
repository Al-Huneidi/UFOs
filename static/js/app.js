// import the data from data.js
const tableData = data;
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");
  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");
    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}

/// Challenge: update filter to include all columns headers in dataset and update handleClick (now called updateFilters) function.

// Keep track of filters for updated handleClick (now called updateFilters) function.
var filters = {};

function updateFilters(){
// Save the element, value, and id of filter that changed due to user input.
  let input = d3.select(this);
  let elementid = input.attr("id");
  let values = input.property("value");

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object.
  if (values !== ""){
    filters[elementid] = values;
  }

  else {
    deletefilters[elementid];
  }
};

// Call the function to apply filters and rebuild the table.
filterTable();

// Set the filteredData to the tableData
var filteredData = tableData

function filterTable() {

  // Loop through all of the filters and keep any data that matches the filter values.
  Object.entries(filters).forEach((key, value) => {
    filteredData = filteredData.filter((row) => row[key] === value)
    }
  );
};



// Attach an event to listen for the input of the user.
d3.selectAll("li").on("change", updateFilters);

// Build the table when the page loads.
buildTable(tableData);





