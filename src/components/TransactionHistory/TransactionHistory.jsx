import PropTypes from "prop-types"; 
import { TransactionHistoryTable, TableTh, TableTd, TableTr } from "./TransactionHistory.styled";

export const TransactionHistory = ({transactions}) => {
    return (
        <TransactionHistoryTable>
            <thead>
                <TableTr>
                    <TableTh>Type</TableTh>
                    <TableTh>Amount</TableTh>
                    <TableTh>Currency</TableTh>
                </TableTr>
            </thead>

            <tbody>
                {transactions.map(transaction => (
                    <TableTr key={transaction.id}>
                        <TableTd>{transaction.type}</TableTd>
                        <TableTd>{transaction.amount}</TableTd>
                        <TableTd>{transaction.currency}</TableTd>
                    </TableTr>
                ))}
            </tbody>
        </TransactionHistoryTable>
    );
};

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
};
