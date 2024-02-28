import { useState } from "react";
import "./App.css";
import PropsDemo from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";
import EventDemo from "./exercises/EventDemo";
import FormUncontrolled from "./exercises/FormUncontrolled";
import StateDemo1 from "./exercises/StateDemo1";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo3 from "./exercises/StateDemo3";
import UseEffect from "./exercises/UseEffect";
import FetchDemo from "./exercises/FetchDemo";
import LiftingState from "./exercises/LiftingState";

export default function App() {
  const [selectedView, setSelectedView] = useState("info");

  function handleSelected(selected: string) {
    setSelectedView(selected);
  }

  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          <div className="exercise-style">
            {selectedView == "info" ? <p>All exercises for React day-1</p> : null}
            {selectedView == "props1" ? <PropsDemo title="Props exercise" /> : null}
            {selectedView == "lists1" ? <ListDemo title="Lists exercise" /> : null}
            {selectedView == "events1" ? <EventDemo title="Events exercise" /> : null}
            {selectedView == "forms1" ? <FormUncontrolled title="Forms exercise" /> : null}
            {selectedView == "state1" ? <StateDemo1 title="State1 exercise" /> : null}
            {selectedView == "state2" ? <StateDemo2 title="State2 exercise" /> : null}
            {selectedView == "state3" ? <StateDemo3 title="State3 exercise" /> : null}
            {selectedView == "effect1" ? <UseEffect title="Effect exercise" /> : null}
            {selectedView == "fetch1" ? <FetchDemo title="Fetch exercise" /> : null}
            {selectedView == "lifting1" ? <LiftingState title="Lifting states exercise" /> : null}
            {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
          </div>
        </div>
      </div>
    </>
  );
}
type ButtonProps = {
  onSelected: (selected: string) => void;
};
const Buttons = (props: ButtonProps) => {
  const { onSelected: handleSelected, btnStyle: btnStyle } = props;
  return (
    <>
      <button className="btn-w100" onClick={() => handleSelected("info")}>
        Info
      </button>
      <button className="btn-w100" onClick={() => handleSelected("props1")}>
        Props demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("lists1")}>
        Lists demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("events1")}>
        Events demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("forms1")}>
        Forms demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state1")}>
        State demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state2")}>
        State demo2
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state3")}>
        State demo3
      </button>
      <button className="btn-w100" onClick={() => handleSelected("effect1")}>
        Effect demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("fetch1")}>
        Fetch demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("lifting1")}>
        Lifting states demo
      </button>
    </>
  );
};
