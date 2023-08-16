import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <h1>To-Do-App</h1>
      </div>
      <div>A simple React Todo List App</div>
    </div>
  );
};

export default Header;
