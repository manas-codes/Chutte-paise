const billInput=document.querySelector("#bill-amount");
const CashInput= document.querySelector("#cash-given");
const check=document.querySelector("#check-btn");
const next=document.querySelector("#next-btn");

function giveChange() {
    if(!billInput.value){
        alert("please enter the Bill amount") ;
    }
     else if(!CashInput.value) {
        alert("please enter the cash given by customer");

    }
    else if(parseInt(billInput.value <= 0)){
        alert("Bill amount cannot be less than or equal to 0");
    }
    else if(parseInt(CashInput.value<0)){
        alert("Cash given by customer cannot be less than 0");
    }
    else if(parseInt(CashInput.value===0)){
        alert("Cash given cannot be 0");
    }
    else{
        var billInputAmount=parseInt(billInput.value);
        var cashInputAmount=parseInt(CashInput.value);

        document.querySelector("#bill-detail").textContent= "Bill Amount is ₹"+billInputAmount;
        document.querySelector("#cash-detail").textContent= "Cash Given by customer is ₹"+cashInputAmount;

        if(billInputAmount > cashInputAmount){
            document.querySelector("#return-detail").textContent="You have to take ₹"+ Math.abs(cashInputAmount-billInputAmount)+" from the customer 🙂";
            document.querySelector('#result').classList.add('hidden');
            return
        }
        else if(billInputAmount === cashInputAmount){
            document.querySelector("#return-detail").textContent="All accounts clear 😊 ";
           
           return
        }
        else{
            document.querySelector('#result').classList.remove('hidden');
            document.querySelector("#return-detail").textContent="You have to give ₹"+ Math.abs(cashInputAmount-billInputAmount)+" to the customer 🙂";
            
            let cashCount=0;
            let AmountLeft=(CashInput.value-billInput.value);
        
            while(AmountLeft>=2000){
                AmountLeft=AmountLeft-2000;
                cashCount++;
            }
            document.querySelector("#result2000").textContent = cashCount;
            cashCount=0;
            while(AmountLeft>=500){
                AmountLeft=AmountLeft-500;

                cashCount++;
            }
            document.querySelector("#result500").textContent = cashCount;
            cashCount=0;
            while(AmountLeft>=100){
                AmountLeft=AmountLeft-100;
                cashCount++;
            }
            document.querySelector("#result100").textContent = cashCount;
            cashCount=0;
            while(AmountLeft>=50){
                AmountLeft=AmountLeft-50;
                cashCount++;
            }
            document.querySelector("#result50").textContent = cashCount;
            cashCount=0;
            while(AmountLeft>=20){
                AmountLeft=AmountLeft-20;
                cashCount++;
            }
            document.querySelector("#result20").textContent = cashCount;
            cashCount=0;
            while(AmountLeft>=10){
                AmountLeft=AmountLeft-10;
                cashCount++;
            }
            document.querySelector("#result10").textContent = cashCount;
            cashCount=0;

            while(AmountLeft>=1){
                AmountLeft=AmountLeft-1;
                cashCount++;
            }
            document.querySelector('#result1').textContent = cashCount;
            
        }
    }
}
        function showNext(){
          
            
                if (parseInt(billInput.value) === 0) {
                  // display bill amount can't be zero
                  alert("Bill Amount can't be 0!")
                } else if (parseInt(billInput.value) < 0) {
                  // display bill amount can't be negative
                  alert("Bill Amount can't be negative!")
                } else if (!billInput.value) {
                  alert("Bill Amount can't be left empty!")
                }
            else{
                next.classList.add('hidden');
                document.querySelector("#cash-paid-entry").classList.remove('hidden');
                check.classList.remove('hidden');
            }
        }
    


next.addEventListener("click", showNext);
check.addEventListener("click", giveChange);


















