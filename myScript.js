$(document).ready(onReady);
function onReady() {
    console.log('TEST: jQuery is connected!');

    let totalMonthlyCost = 0;

    $('#submitButton').on('click', addToTable)
    $("#tableBody").on("click", '#delete-btn', removeTable);

}

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
        
        let employee = {
            firstName: inputOne,
            lastName: inputTwo,
            idNumber: inputThree,
            jobTitle: inputFour,
            annualSalary: parseFloat(inputFive)
            };
        
        // this calculates monthly cost of most recent salary only
        totalMonthlyCost = employee.annualSalary / 12

        $('#firstName').val('');
        $('#lastName').val('');
        $('#IDNumber').val('');
        $('#titleName').val(''); 
        $('#annualSalary').val('');

    // // $('#firstName').append();
    // // let lastName = $('#lastName').val();
    // // let idNumber = $('#IDNumber').val();
    // // let jobTitle = $('#titleName').val();
    // // let annualSalary = $('#annualSalary').val();
    // console.log('click!');
}

function removeTable(){
    $(this).parent().parent().remove();
}