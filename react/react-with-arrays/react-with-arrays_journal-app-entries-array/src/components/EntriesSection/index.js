import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";
import { Fragment } from "react";
import { entries } from "./entries.js";

export default function EntriesSection() {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab active>
          All Entries <Badge isActive>3</Badge>
        </Tab>
        <Tab>
          Favorites <Badge>1</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries.map((entry) => (
          <Fragment key={entry.id}>
            <Entry date={entry.date} motto={entry.motto} notes={entry.notes} />
          </Fragment>
        ))}

        <Divider />
      </div>
    </section>
  );
}
