//eventlistener assignment for deposit amount
const submitDepositButton = document.querySelector('.amount-deposit-button')
submitDepositButton.addEventListener('click', editAccountDeposit)



function toggleModalDeposit() {
    modalDepoist.classList.toggle("show-modal");   
}
function toggleModalWithdraw() {
   modalWithdraw.classList.toggle("show-modal");

}


//eventlistener assignment for modal 
let depositButton = document.querySelector('#deposit')
let withdrawButton = document.querySelector('#withdraw')

let modalDepoist = document.querySelector(".modal-depoist")
let modalWithdraw = document.querySelector(".modal-withdraw")

depositButton.addEventListener("click", toggleModalDeposit);
withdrawButton.addEventListener("click", toggleModalWithdraw);

let closeButtonDeposit = document.querySelector(".close-button-deposit")
closeButtonDeposit.addEventListener("click", toggleModalDeposit);


let closeButtonWithdraw = document.querySelector(".close-button-withdraw")
closeButtonWithdraw.addEventListener("click", toggleModalWithdraw);



function editAccountDeposit(event) {
    const theButtonDeposit = event.target
    const amountDeposit = document.querySelector('#amountDeposit').value; // Fund name
    
    const accountBalanceBeforeDeposit = accountHeaderBalance.innerText
    accountHeaderBalance.innerText = document.querySelector('#amountDeposit').value


    console.log(amountDeposit)

    const xhrDeposit = new XMLHttpRequest()
    xhrDeposit.onreadystatechange = function() {
        if (xhrDeposit.readyState === 4 && xhrDeposit.status === 200) {
            console.log(xhrDeposit)
            const res = JSON.parse(xhrDeposit.response)

        }

    }
    xhrDeposit.open('PUT', '/edit-account/account/1?amountDeposit='+ encodeURI(amountDeposit), true)
    xhrDeposit.send()

}











