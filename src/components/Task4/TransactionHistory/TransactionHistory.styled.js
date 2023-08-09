import styled from 'styled-components';

export const TransactionTable = styled.table`
  min-width: 700px;
  text-align: center;

  margin: 50px auto;
`;

export const TableHeader = styled.thead`
  background-color: aquamarine;
  line-height: 40px;
`;
export const Tbody = styled.tbody`
  text-align: center;
  tr {
    background-color: BlanchedAlmond;
  }
  tr:nth-child(odd) {
    background-color: Cornsilk;
  }
`;
