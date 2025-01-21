"use client";
import React from "react";
import Nav from "react-bootstrap/esm/Nav";
import Tab from "react-bootstrap/esm/Tab";
import styles from "./DubEpisodes.module.scss";

interface Props {
  readonly defaultTab: string;
  readonly tabContents: Record<string, React.ReactNode>;
}

export const TabWrapper = React.memo<Props>(function TabWrapperFn({
  defaultTab,
  tabContents,
}) {
  const tabs = React.useMemo(() => Object.keys(tabContents), [tabContents]);

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
        {tabs.map((tab) => (
          <Tab.Pane key={tab} eventKey={tab} title={tab}>
            {tabContents[tab]}
          </Tab.Pane>
        ))}
      </Tab.Content>
    </Tab.Container>
  );
});
