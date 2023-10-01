import { NavigateFunction } from "react-router-dom";

import styles from "./styles.module.css";

interface HeaderProps {
  navigate: NavigateFunction;
  children?: React.ReactNode;
  title: string;
  time: string;
  className?: string;
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const {
    navigate,
    title,
    time,
    className = "",
    children,
    ...restProps
  } = props;

  return (
    <header
      title={title}
      className={`${styles.header} ${className}`}
      {...restProps}
    >
      <div
        className={styles.title}
        onClick={() => {
          navigate("/");
        }}
      >
        <h3>{children}</h3>
      </div>
      <div className={styles.date}>
        <span>{time}</span>
      </div>
    </header>
  );
};
