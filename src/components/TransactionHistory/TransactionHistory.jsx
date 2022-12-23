import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Table, Head, Body } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Box
      m="0 auto"
      mb="20px"
      width="600px"
      boxShadow="shadow"
      borderRadius="normal"
      overflow="hidden"
    >
      <Table width="100%">
        <Head>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </Head>
        <Body>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </Body>
      </Table>
    </Box>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
