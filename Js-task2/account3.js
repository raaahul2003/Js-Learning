accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
   
     },
     {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
   
     },
     {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
   
     },
     {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'n ef'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]}]

        //   1.print total number of accounts

        console.log("==============================");
        
        console.log(`Total number of accounts: ${accounts.length}`);
            
        console.log("==============================");

        //   2.print acount number whose account type is savings
        
        console.log("Acount number whose account type is savings:");
        accounts.filter(a=> a.ac_type == "savings").forEach(a => console.log(a.acno));
        
        console.log("==============================");

        //   3.print balance of account number 1000

        let acc1000 = accounts.find(a => a.acno==1000)
        console.log(`Balance of account number 1000: ${acc1000.balance}`);

        console.log("==============================");
        
        
        
        //   4.print all gpay transactions
        console.log("All gpay transactions:");
        for(let account of accounts){
            for(let transaction of account.transaction){
                if(transaction.mode==='gpay'){
                    console.log(transaction);
                }
            }
        }
        console.log("==============================");
       

        //   5.print all transactions whose amount>5000

        console.log("All transactions whose amount>5000:");
        for(let account of accounts){
            for(let transaction of account.transaction){
                if(transaction.amount>5000){
                    console.log(transaction);
                }
            }
        }
        
        console.log("==============================");


        //   6.print credit transaction of account 1002

        console.log("Credit transaction of account 1002:");
            let credit1002 = []
            for(let account of accounts){
                for(let transaction of account.transaction){
                    if(transaction.to===1002){
                        credit1002.push(transaction)
                        
                    }
                }
            }
            console.log(credit1002);
            console.log("==============================");
        //   7.print total credit amount to the account 1002
            let totalCredit = credit1002.reduce((sum,transaction)=>{
                return sum+transaction.amount;
            },0)
            console.log(`Total credit amount to the account 1002: ${totalCredit}`);
            console.log("==============================");
            
        //   8.print debit transaction of account 1002
        console.log("Debit transaction of account 1002:");
            let debit1002 = []
            for(let account of accounts){
                for(let transaction of account.transaction){
                    if(account.acno===1002){
                        debit1002.push(transaction)
                    }
                }
                
            }
            console.log(debit1002);
            console.log("==============================");
            

        //   9.print total debit amount from the account 1002
             let totalDebit = debit1002.reduce((sum,transaction)=>{
                return sum+transaction.amount;
            },0)
            console.log(`Total debit amount to the account 1002: ${totalDebit}`);
            console.log("==============================");

        //   10.print transaction history of 1002
            console.log("Transaction history of 1002");
            console.log(credit1002);
            console.log(debit1002);
            console.log("==============================");
            
            
        //   11.current balance of 1002
        let account1002 = accounts.find(acc => acc.acno===1002)
        console.log(`Current balance of 1002: ${account1002.balance}`);
        console.log("==============================");
        
        //   12.print highest  balance account details
        console.log("Highest  balance account details:");
        let highestAccount = accounts.reduce((a,b)=> a.balance>b.balance?a:b)
        console.log(highestAccount);
        