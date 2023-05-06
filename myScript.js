$(document).ready(onReady);
function onReady() {
    console.log('TEST: jQuery is connected!');
    $('#submitButton').on('click', addToTable);
    $("#tableBody").on("click", '#delete-btn', removeTable);
}

let sal = 0
let sumTotal = 0

function addToTable(event) {
        let inputOne = $("#firstName").val();
        let inputTwo = $("#lastName").val();
        let inputThree = $('#IDNumber').val();
        let inputFour = $('#titleName').val();
        let inputFive = $('#annualSalary').val();
            
        event.preventDefault();
        
        $("#tableBody").append(`      
      <tr>
          <td>${inputOne}</td>
          <td>${inputTwo}</td>
          <td>${inputThree}</td>
          <td>${inputFour}</td>
          <td>${inputFive}</td>
          <td><button id="delete-btn">DELETE</button></td
      </tr>
        `)

        sal = Number($('#annualSalary').val());
        sumTotal += sal;
        console.log('TEST sum total:', sumTotal);
        $('#totalMonthlyCost').append((sumTotal / 12));

        $('#firstName').val('');
        $('#lastName').val('');
        $('#IDNumber').val('');
        $('#titleName').val(''); 
        $('#annualSalary').val('');
}

function removeTable(){
    $(this).parent().parent().remove();
}
