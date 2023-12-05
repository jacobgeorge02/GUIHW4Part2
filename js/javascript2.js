function processForm() {
    // Getting the values from user
    var firstNumber = parseInt(document.getElementById('firstNumber').value);
    var secondNumber = parseInt(document.getElementById('secondNumber').value);
    var thirdNumber = parseInt(document.getElementById('thirdNumber').value);
    var fourthNumber = parseInt(document.getElementById('fourthNumber').value);

    // Clear previous table content
    var tbody = document.querySelector('#multiplicationTable tbody');
    tbody.innerHTML = '';

    var errorMessage = document.getElementById('error-message');
    errorMessage.textContent = ''; // Clear any previous messages

    let headerRow = tbody.insertRow();
    headerRow.insertCell().textContent = '  '; // this is the top-left-most data cell, used for formating
    
    for (let x = firstNumber; x <= secondNumber; x++) { // this for loop creates the top row of values
        headerRow.insertCell().textContent = x;
        for (let y = thirdNumber; y <= fourthNumber; y++) { // this for loop creates the values going down
            let row = tbody.insertRow();
            row.insertCell().textContent = y;
                for (let z = firstNumber; z <= secondNumber; z++) { // this for loop multiple each value of X and Y as they increment and insert them in the correct spot
                   row.insertCell().textContent = z * y;
            }
        }
    }
}

$(document).ready(function() {
    $("#firstSlide").slider({ // slider will get the number based on range that has a min and max
        range: "min",
        min: -50,
        max: 50,
        slide: function(event, ui) {
            $("#firstNumber").val(ui.value);
        }
    });

    $("#firstNumber").on(function() { // will dynamically try to change value for each number
        $("#firstSlide").slider("value", $("#firstNumber").val());
    });



    $("#secondSlide").slider({ // slider will get the number based on range that has a min and max
        range: "min",
        min: -50,
        max: 50,
        slide: function(event, ui) {
            $("#secondNumber").val(ui.value);
        }
    });

    $("#secondNumber").on(function() { // will dynamically try to change value for each number
        $("#secondSlide").slider("value", $("#secondNumber").val()); 
    });



    $("#thirdSlide").slider({ // slider will get the number based on range that has a min and max
        range: "min",
        min: -50,
        max: 50,
        slide: function(event, ui) {
            $("#thirdNumber").val(ui.value);
        }
    });

    $("#thirdNumber").on(function() { // will dynamically try to change value for each number
        $("#thirdSlide").slider("value", $("#thirdNumber").val());
    });




    $("#fourthSlide").slider({ // slider will get the number based on range that has a min and max
        range: "min",
        min: -50,
        max: 50,
        slide: function(event, ui) { // will dynamically try to change value for each number
            $("#fourthNumber").val(ui.value);
        }
    });

    $("#fourthNumber").on(function() {
        $("#fourthSlide").slider("value", $("#fourthNumber").val());
    });


    // a way to delete individual tabs
    $('#tabs').tabs('destroy').tabs();
    $('#tabs').tabs('remove', 1);
});