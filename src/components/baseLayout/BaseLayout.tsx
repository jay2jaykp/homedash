import React from "react";
import styles from "./BaseLayout.module.scss";

export const BaseLayout: React.FC = (props) => {
  return (
    <>
      <div className={styles.page}>{props.children}</div>
    </>
  );
};
