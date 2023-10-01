import { NavigateFunction } from "react-router-dom";

import styles from "./styles.module.css";

interface HeaderProps {
  navigate: NavigateFunction;
  title: string;
  time: string;
  className?: string;
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { navigate, title, time, className = "", ...restProps } = props;

  return (
    <header className={`${styles.header} ${className}`} {...restProps}>
      <div
        className={styles.title}
        onClick={() => {
          navigate("/");
        }}
      >
        <h3>
          Y<span>orick</span>T<span>oma</span>
        </h3>
      </div>
      <div className={styles.date}>
        <span>{time}</span>
      </div>
    </header>
  );
};
