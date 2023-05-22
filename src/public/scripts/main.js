const alpha_order = document.querySelector("#alphabetical_order");
const route = window.location.pathname;

function redirect() {
    if(alpha_order.checked) {
        // console.log("checked");
        alpha_order.value = 'true';
        window.location.href = `/alphabetical`;
    }
    else {
        // console.log("unchecked");
        alpha_order.value = 'false';
        window.location.href = `/`;
    }
}

function manipulatingInputsCheckbox(){
    if(route == '/alphabetical') {
        alpha_order.checked = true;
    }
}


manipulatingInputsCheckbox();