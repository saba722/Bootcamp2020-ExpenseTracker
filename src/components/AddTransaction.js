import React, { useState } from 'react'

export const AddTransaction = () => {
    
    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState(0);

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input 
                            type="text" 
                            placeholder="Detail of Transaction"
                            value={description} 
                            id="description"
                            onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input 
                        type="number" 
                        placeholder="Dollar Value of Transaction"
                        id="transactionamount"
                        value={transactionAmount}
                        onChange={(e) => setTransactionAmount(e.target.value)}
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}