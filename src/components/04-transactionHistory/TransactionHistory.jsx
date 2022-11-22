import PropTypes from 'prop-types';
import {
 Table,
 Thead,
 TheadRow,
 Tbody,
 TbodyRow,
 TheadItem,
 TbodyItem,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
 return (
  <Table>
   <Thead>
    <TheadRow>
     <TheadItem>Type</TheadItem>
     <TheadItem>Amount</TheadItem>
     <TheadItem>Currency</TheadItem>
    </TheadRow>
   </Thead>

   <Tbody>
    {items.map(({ id, type, amount, currency }) => {
     return (
      <TbodyRow key={id} id={id}>
       <TbodyItem>{type}</TbodyItem>
       <TbodyItem>{amount}</TbodyItem>
       <TbodyItem>{currency}</TbodyItem>
      </TbodyRow>
     );
    })}
   </Tbody>
  </Table>
 );
};

TransactionHistory.propTypes = {
 items: PropTypes.arrayOf(
  PropTypes.shape({
   id: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   amount: PropTypes.string.isRequired,
   currency: PropTypes.string.isRequired,
  })
 ).isRequired,
};
