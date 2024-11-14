import styles from "../assets/css/TabletItem.module.css"

const TabletItem = ({name, label, onFilter, activeFilter}) => {
    return (
        
        <div onClick={() => onFilter(name)} style = {activeFilter == name ? {background: "pink", color: "brown"} : null} className={styles.tabletItem}>
            {label} 
        </div>
    );
};

export default TabletItem;