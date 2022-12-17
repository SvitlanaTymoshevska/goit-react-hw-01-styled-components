import PropTypes from "prop-types"; 
import { randomColor } from "utils/randomColor";
import { StatisticsCard, Title, StatList, Item, Label, Percentage } from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsCard>
            {title && (
                <Title>{title}</Title>
            )}
           
            <StatList>
                {stats.map(item => (
                    <Item key={item.id} style={{ backgroundColor: randomColor() }}>
                        <Label>{item.label}</Label>
                        <Percentage>{item.percentage}%</Percentage>
                    </Item>
                ))}
            </StatList>
        </StatisticsCard>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
           id: PropTypes.string.isRequired,
           label: PropTypes.string.isRequired,
           percentage: PropTypes.number.isRequired,
        }),
    ),
};