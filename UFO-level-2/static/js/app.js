// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");
console.log("hello world")
button.on("click", function() {

    // Select the input element and get the raw HTML node
    var dateElement = d3.select("#datetime");
    // Get the value property of the input element
    var dateValue = dateElement.property("value");


    // Select the input element and get the raw HTML node
    var cityElement = d3.select("#city");
    // Get the value property of the input element
    var cityValue = cityElement.property("value");

    // Select the input element and get the raw HTML node
    var stateElement = d3.select("#state");
    // Get the value property of the input element
    var stateValue = stateElement.property("value");

    // Select the input element and get the raw HTML node
    var countryElement = d3.select("#country");
    // Get the value property of the input element
    var countryValue = countryElement.property("value");

    // Select the input element and get the raw HTML node
    var shapeElement = d3.select("#shape");
    // Get the value property of the input element
    var shapeValue = shapeElement.property("value");

    // Filter data based on
    var matches = data.filter(data => (data.datetime === dateValue || dateValue.length === 0 ) 
      && (data.city === cityValue || cityValue.length === 0) 
      && (data.state === stateValue || stateValue.length === 0)
      && (data.country === countryValue || countryValue.length === 0)
      && (data.shape === shapeValue || shapeValue.length === 0)
      
      );

    var table_body = d3.select("tbody");

    //Clear previous table
    table_body.selectAll("tr").remove();

    matches.forEach(match => {
        //Date	City	State	Country	Shape	Duration	Comments
        newrow = table_body.append("tr");
        newrow.append("td").text(match.datetime);
        newrow.append("td").text(match.city);
        newrow.append("td").text(match.state);
        newrow.append("td").text(match.country);
        newrow.append("td").text(match.shape);
        newrow.append("td").text(match.duration);
        newrow.append("td").text(match.comments);
      });

    table_body.append("tr")

});