$(document).ready(onReady);
function onReady() {
    console.log('TEST: jQuery is connected!');

    let employeeList = [];
    let totalMonthlyCost = 0;

    $('#submitButton').on('click', addToTable)

}

function addToTable(event) {
        let inputOne = $("#firstName").val();
        let inputTwo = $("#lastName").val();
        let inputThree = $('#IDNumber').val();
        let inputFour = $('#titleName').val();
        let inputFive = $('#annualSalary').val();
        console.log(inputOne, inputTwo, inputThree, inputFour, inputFive);
        
        event.preventDefault();
        $("#tableBody").append(`      
      <tr>
          <td>${inputOne}</td>
          <td>${inputTwo}</td>
          <td>${inputThree}</td>
          <td>${inputFour}</td>
          <td>${inputFive}</td>
      </tr>
        `)
    // // $('#firstName').append();
    // // let lastName = $('#lastName').val();
    // // let idNumber = $('#IDNumber').val();
    // // let jobTitle = $('#titleName').val();
    // // let annualSalary = $('#annualSalary').val();
    // console.log('click!');
}
