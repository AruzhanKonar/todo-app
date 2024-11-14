import TabletItem from "./TabletItem";
import styles from "../assets/css/TabContainer.module.css";

const TabContainer = ({filterList, onFilter, activeFilter}) => {
return (
    <div className={styles.tabContainer}>
        { filterList.map((item) => (
        <TabletItem activeFilter={activeFilter} onFilter={onFilter} name={item.name} label={item.label} />

        )
        )
        }
    </div>
);
};

export default TabContainer;