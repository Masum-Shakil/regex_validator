let trigger = document.querySelector('#triggerButton');
trigger.addEventListener('click', funcName);
let divElement = document.createElement("div");
let out = document.querySelector('#output');

function funcName() {
    let selectedValue = document.querySelector('input[name="myRadioGroup"]:checked').value;
    let inputValue = document.querySelector('#inputValue').value;
    
    switch(selectedValue) {

        case 'email':
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (emailRegex.test(inputValue)) {
                divElement.className = "alert alert-success";
                divElement.textContent = "Inputted email pattern is valid";
                out.appendChild(divElement);
            } else {
                divElement.className = "alert alert-danger";
                divElement.textContent = "Inputted email pattern is invalid";
                out.appendChild(divElement);
            }

            break;

        case 'phone':
            let phoneRegex = /^(?:\+?88)?01[3-9]\d{8}$/;

            if (phoneRegex.test(inputValue)) {
                divElement.className = "alert alert-success";
                divElement.textContent = "Inputted mobile number pattern is valid";
                out.appendChild(divElement);
            } else {
                divElement.className = "alert alert-danger";
                divElement.textContent = "Inputted mobile number pattern is invalid";
                out.appendChild(divElement);
            }

            break;

        case 'postCode':
            let postalCodeRegex = /^\d{4}$/;

            if (postalCodeRegex.test(inputValue)) {
                divElement.className = "alert alert-success";
                divElement.textContent = "Inputted postal code pattern is valid";
                out.appendChild(divElement);
            } else {
                divElement.className = "alert alert-danger";
                divElement.textContent = "Inputted postal code pattern is invalid";
                out.appendChild(divElement);
            }

            break;

        default:
            divElement.className = "alert alert-warning";
            divElement.textContent = "Invalid choice or entry";
            out.appendChild(divElement);
    }
}