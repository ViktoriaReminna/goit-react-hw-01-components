import { Statstics, Title, StatList, Item } from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <Statstics className="statistics">
      {title && <Title className="title">{title}</Title>}
      <StatList className="stat-list">
        {stats.map(stat => (
          <Item className="item" key={stat.id} color={stat.label}>
            <span className="label">{stat.label}</span>
            <span className="percentage"> {stat.percentage}%</span>
          </Item>
        ))}
      </StatList>
    </Statstics>
  );
};
export default Statistics;
