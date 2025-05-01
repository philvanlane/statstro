import React from "react";
import './schedule-block.css';
import Accordion from "./accordion";
import SchedBreak from "./sched-break";
import { sched_intro, sched_morning, sched_panel, sched_aft1, sched_aft2, sched_aft3, sched_lunch } from "../schedule"; // Ensure sched_intro is imported correctly
import SchedItem from "./sched-item";

const ScheduleBlock = () => {
  return (
    <div className="schedule-block-container">
        <Accordion className="acc" title="Welcome and Opening Remarks" time="10:00 - 10:15">
            <SchedItem items={sched_intro} />
        </Accordion>
        <Accordion className="acc" title="Morning Talks" time="10:15 - 10:55" chair="Gwendolyn Eadie">
            <SchedItem items={sched_morning} />
        </Accordion>
        <SchedBreak time="10:55 - 11:15" />
        <Accordion className="acc" title="Panel Session" time="11:15 - 12:30" chair="Kevin McKinnon">
          <SchedItem items={sched_panel} />
        </Accordion>
        <Accordion className="acc" title="Lunch" time="12:30 - 14:00">
          <SchedItem items={sched_lunch} />
        </Accordion>
        <Accordion className="acc" title="Afternoon Talks I" time="14:00 - 14:50" chair="Samantha Berek">
            <SchedItem items={sched_aft1} />
        </Accordion>
        <SchedBreak time="14:50 - 15:10" />
        <Accordion className="acc" title="Afternoon Talks II" time="15:10 - 16:00" chair="Mairead Heiger">
            <SchedItem items={sched_aft2} />
        </Accordion>
        <SchedBreak time="16:00 - 16:20" />
        <Accordion className="acc" title="Afternoon Talks III" time="16:20 - 17:00" chair="Phil Van-Lane">
            <SchedItem items={sched_aft3} />
        </Accordion>
    </div>
  );
};

export default ScheduleBlock;