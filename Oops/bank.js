class Bank{
    accountDetails={
        1000:{acno:1000,username:"userone",password:"userone",blance:50000},
        1001:{acno:1001,username:"usertwo",password:"usertwo",blance:5000},
        1002:{acno:1002,username:"userthree",password:"userthree",blance:10000},
        1003:{acno:1003,username:"userfour",password:"userfour",blance:6000},
    }

    // validate account number function
    validateAcc(accno){
        return this.accountDetails.hasOwnProperty(accno)?true:false
    }
    

    // authenticate account function 
    authenticateAcc(accno,pass){
        if(this.validateAcc(accno)){
            if(this.accountDetails[accno].password === pass){
                console.log("Authentication Sucessfull");
                
            }else{
                console.log("Authentication failed....! Invalid Password");
            }
        }else{
            console.log("Authentication failed...! Invalid Account Number");
            
        }
    }
   
    // balance enquiry function
    balanceAcc(accno){
        if(this.validateAcc(accno)){
        console.log(this.accountDetails[accno].blance);
        }else{
            console.log("!!!Invalid Acccount!!!");
            
        }
    }
    
    
    // function for fund transfer 
    fundTransfer(fromacc,toacc,amount){
        if(this.validateAcc(fromacc)&&this.validateAcc(toacc)){
            if(this.accountDetails[fromacc].blance>=amount){

                this.accountDetails[fromacc].blance-=amount
                this.accountDetails[toacc].blance+=amount
                console.log("Trancsaction Sucessfull");
                console.log(this.accountDetails);

            }else{
                console.log("Transaction failed !!! Insufficient balance");
            }

        }else{
            console.log("!!! Invalid Account!!!");
            
        }
    } 

    
    
}
// 1
const accHolder = new Bank()
// console.log(accHolder.validateAcc(1000)?`Valid Account Number`:`Invalid Account Number`);

// 2
// accHolder.authenticateAcc(1000,"userone")

// 3
// accHolder.balanceAcc(101)

// 4
accHolder.fundTransfer(1000,1003,2000)