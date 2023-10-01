import { PropsWithChildren, ReactNode } from "react";
import { Button, Input, Label } from "../";
import "./App.css";
import styles from "./App.module.css";

const Example = ({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) => (
  <div className={styles.component}>
    <h1>{title}</h1>
    {children}
  </div>
);

function App() {
  return (
    <>
      <Example title={"Button"}>
        <Button>Aap</Button>
      </Example>
      <Example title={"Label"}>
        <Label>Aap</Label>
      </Example>
      <Example>
        <Input defaultValue="Input" />
      </Example>
    </>
  );
}

export default App;
