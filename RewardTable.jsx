import React from 'react';
import calRewards from './calRewards';

export default function RewardTable(customers) {    
    return (
        <table className="reward-table">
        <thead>
            <tr>
                <th>Customer Name</th>
                <th>Tansaction Details</th>
                <th>Total Rewards</th>
                
            </tr>
            
        </thead>
        <tbody>
        {
        customers.customers.map((customer,key)=>{ 
          let total = 0 ;
          return( 
          <tr key = {key}>
              <td>
                {customer.customerName}
              </td>
              <td>
              <table className="transaction-table">
                    <thead>
                    <tr>
                <th>Month</th>
                <th>Amount</th>
                <th>Rewards</th>
            </tr>
                    </thead>
                    <tbody>           
                {
                    customer.transactions.map((transaction) =>{
                    let cal = calRewards(transaction.transactionAmount); 
                    total += cal;
                        return ( 
                            <tr>                      
                        <td key={transaction.transactionNo} className="transaction-rows">
                            {transaction.transactionsMonth}</td>
                            <td>${transaction.transactionAmount}</td>
                            <td>{cal}</td>
                        </tr>
                        )     
                    })                                     
                }
                </tbody>
        </table>    
                </td>
              
              <td className="total-cell">{total}</td>
          </tr>
          )}
          
        )}
        </tbody>
      </table>
    )
}
