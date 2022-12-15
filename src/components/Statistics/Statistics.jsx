import PropTypes from "prop-types"; 
import css from "./Statistics.module.css";

export const Statistics = ({ statList }) => { 
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>Upload stats</h2>

            <ul className={css.statList}>
                {statList.map(item => (
                    <li key={item.id}  className={css.item}>
                        <span className={css.label}>{item.label}</span>
                        <span className={css.percentage}>{item.percentage}%</span>
                    </li> 
                ))}
            </ul>
        </section>
    );
}

// Statistics.propTypes = {
//     id: PropTypes.string, 
//     label: PropTypes.string,
//     percentage: PropTypes.number,
// }