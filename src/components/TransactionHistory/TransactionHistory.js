import {
  TransactionTable,
  TableHeader,
  Tbody,
} from './TransactionHistory.styled';
const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable className="transaction-history">
      <TableHeader>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHeader>
      <Tbody>
        {items.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </Tbody>
    </TransactionTable>
  );
};

export default TransactionHistory;
