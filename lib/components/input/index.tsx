import styles from "./styles.module.css";

export function Input(props: React.ButtonHTMLAttributes<HTMLInputElement>) {
  const { className = "", ...restProps } = props;
  return <input className={`${styles.button} ${className}`} {...restProps} />;
}
