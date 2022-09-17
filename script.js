const loginBtn= document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea= document.getElementById("area-login");
    loginArea.style.display= "none";
    const transactionArea= document.getElementById("transaction-area");
    transactionArea.style.display= "block";
});
const depositBtn= document.getElementById("btnDeposit");
depositBtn.addEventListener("click",function(){
    calculateAmount("depositInput", "currentDeposit", 1);
    document.getElementById("depositInput").value="";  
});
const withdrawBtn= document.getElementById("btnWithdraw");
withdrawBtn.addEventListener("click",function(){
    calculateAmount("withdrawInput", "currentWithdraw", -1);
    document.getElementById("withdrawInput").value="";  
});
function calculateAmount(updateId, currentId, multiplier){
    const number= getInputNumber(updateId);
    updateSpanText(currentId, number, 1);
    updateSpanText("currentBalance", number, multiplier);
}
function getInputNumber(id){
    const amount= document.getElementById(id).value;
    const number= parseFloat(amount);
    return number;
}
function updateSpanText(id, depositNumber, multiplier){
    const currentBalance= document.getElementById(id).innerText;
    const currentBalanceNumber= parseFloat(currentBalance);
    const totalBalance= currentBalanceNumber + depositNumber*multiplier;
    document.getElementById(id).innerText= totalBalance;
}