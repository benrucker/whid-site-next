"use client";
import React from "react";
import Nav from "react-bootstrap/esm/Nav";
import Tab from "react-bootstrap/esm/Tab";
import { typedReactMemo } from "../utils/typedReactMemo";
import styles from "./DubEpisodes.module.scss";

interface Props<T> {
  readonly defaultTab: string;
  readonly tabs: ReadonlyArray<string> & { length: T };
  // Note: Use NoInfer to lock the array length to the length of `tabs`
  readonly tabContents: ReadonlyArray<React.ReactNode> & { length: NoInfer<T> };
}

export const TabWrapper = typedReactMemo(function TabWrapperFn<T>({
  defaultTab,
  tabs,
  tabContents,
}: Props<T>) {
  return (
    <Tab.Container defaultActiveKey={defaultTab}>
      <Nav
        className="d-flex justify-content-center mb-5 gap-4"
        variant="underline"
        defaultValue={defaultTab}
      >
        {tabs.map((tab) => (
          <Nav.Item key={tab} className={styles.dubTab}>
            <Nav.Link className="pt-0" eventKey={tab}>
              <div className="fw-bold">{tab}</div>
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <Tab.Content>
        {tabs.map((tab, index) => (
          <Tab.Pane key={tab} eventKey={tab} title={tab}>
            {tabContents[index]}
          </Tab.Pane>
        ))}
      </Tab.Content>
    </Tab.Container>
  );
});
