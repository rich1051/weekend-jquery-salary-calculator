$(document).ready(onReady);
function onReady() {
    console.log('TEST: jQuery is connected!');

    let employeeList = [];
    let totalMonthlyCost = 0;

    $('#submitButton').on('click', function() {
        let firstName = $('#firstName').val();
		let lastName = $('#lastName').val();
		let idNumber = $('#IDNumber').val();
		let jobTitle = $('#titleName').val();
		let annualSalary = $('#annualSalary').val();
        console.log('click!');
    });
}
