// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");
console.log("hello world")
button.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var matches = data.filter(data => data.datetime === inputValue);

    var table_body = d3.select("tbody")

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