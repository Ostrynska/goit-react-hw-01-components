import PropTypes from 'prop-types';
import {
 StatisticSection,
 StatisticTitle,
 StatisticList,
 StatisticItem,
 StatisticLabel,
 StatisticPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
 return (
  <StatisticSection>
   {title && <StatisticTitle>{title}</StatisticTitle>}

   <StatisticList>
    {stats.map(({ id, label, percentage }) => {
     return (
      <StatisticItem key={id} id={id} style={{ backgroundColor: changeHex() }}>
       <StatisticLabel as="p">{label}</StatisticLabel>
       <StatisticPercentage as="p">{percentage}%</StatisticPercentage>
      </StatisticItem>
     );
    })}
   </StatisticList>
  </StatisticSection>
 );
};

function changeHex() {
 const hex = [
  '#F3B848',
  '#bd8811',
  '#ffea79 ',
  '#ffcdd2',
  '#ff94c2',
  '#f06292',
  '#76435e',
  '#9c81f2',
  '#D85841',
 ];
 return hex[Math.floor(Math.random() * hex.length)];
}

Statistics.propTypes = {
 title: PropTypes.string.isRequired,
 stats: PropTypes.arrayOf(
  PropTypes.shape({
   id: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
   percentage: PropTypes.number.isRequired,
  })
 ).isRequired,
};
