import React from "react";
import './schedule-block.css';
import Accordion from "./accordion";
import SchedBreak from "./sched-break";
import { sched_intro, sched_morning } from "../schedule"; // Ensure sched_intro is imported correctly
import SchedItem from "./sched-item";

const ScheduleBlock = () => {
  return (
    <div className="schedule-block-container">
        <Accordion className="acc" title="Welcome and Opening Remarks" time="10:00 - 10:15">
            <SchedItem items={sched_intro} />
        </Accordion>
        <Accordion className="acc" title="Morning Talks" time="10:15 - 10:55">
            <SchedItem items={sched_morning} />
        </Accordion>
        <SchedBreak time="10:55 - 11:15" />
        <Accordion className="acc" title="Panelist Talks & Panel Session" time="11:15 - 12:30">
        </Accordion>
        <Accordion className="acc" title="Lunch" time="12:30 - 13:50">
        </Accordion>
        <Accordion className="acc" title="Afternoon Talks" time="13:50 - 14:30">
        </Accordion>
        <SchedBreak time="14:30 - 14:50" />
        <Accordion className="acc" title="Lightning Talks" time="14:50 - 15:45">
        </Accordion>
        <SchedBreak time="15:45 - 16:00" />
        <Accordion className="acc" title="Closing Session" time="16:00 - 17:00">
        </Accordion>
    </div>
  );
};

export default ScheduleBlock;