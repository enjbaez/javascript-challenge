// from data.js
var tableData = data;

// reference the tbody
var tbody = d3.select("tbody");

function buildTable(data) {
tbody.html("");
data.forEach((dataRow )=>{
    var Row = tbody.append('tr');
    Object.values(dataRow).forEach((value)=>{
        var cell = Row.append('td');
        cell.text(value)
    });
});
}

buildTable(tableData)

//Submit Button handler
function handleclick() {
    
    // Select the date input value from the form
    var date = d3.select("#datetime").property("value");
    console.log(date);
    
    // Select the city input value from the form
    var city = d3.select("#city").property("value");
    console.log(city);   

  
    if (date !== "" && city !== "") {
        // Filter the data if there was a date input
        filteredData = tableData.filter(tableData => (tableData.datetime === date && tableData.city === city));
    }
    else {
        filteredData = tableData;
    };

buildTable(filteredData);
}
d3.selectAll("#filter-btn").on("click", handleclick);
