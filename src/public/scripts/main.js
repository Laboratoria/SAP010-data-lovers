const alpha_order = document.querySelector("#alphabetical_order");
const route = window.location.pathname;

const t_alpha_order = document.querySelector("#targaryan_order");
const t_route = window.location.pathname;

function redirect() {
    if(alpha_order.checked) {
        // console.log("checked");
        alpha_order.value = 'true';
        window.location.href = `/alphabetical`;
    }
    else if(t_alpha_order.checked){
        // console.log("targaryan checked");
        t_alpha_order.value = 'true';
        window.location.href = `/targaryan`;
    }
    else{
        // console.log("unchecked");
        alpha_order.value = 'false';
        window.location.href = `/`;
    }
}

function manipulatingInputsCheckbox(){
    if(route == '/alphabetical') {
        alpha_order.checked = true;
    }
    else if( route == '/targaryan'){
        alpha_order.checked = true;
    }
}


manipulatingInputsCheckbox();
