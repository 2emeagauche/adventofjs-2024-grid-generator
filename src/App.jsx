import { useState, useEffect } from "react";
import createGridLinesStyles from "./helpers/createGridLinesStyles";
import DisplayGrid from "./components/DisplayGrid";
import SideBar from "./components/SideBar";
import SlidePanel from "./components/SlidePanel";

export default function App() {
  const [gridParams, setGridParams] = useState([5, 5, 0, 0]);

  const [colsRowsFr, setColsRowsFr] = useState([
    new Array(gridParams[0] * 1).fill("1"),
    new Array(gridParams[1] * 1).fill("1"),
  ]);

  useEffect(() => {
    document.documentElement.style.setProperty("--columns", gridParams[0]);
    document.documentElement.style.setProperty("--rows", gridParams[1]);
    document.documentElement.style.setProperty("--column-gap", gridParams[2]);
    document.documentElement.style.setProperty("--row-gap", gridParams[3]);

    const generatedGrid = document.querySelector(".generatedgrid");
    createGridLinesStyles(
      gridParams[0],
      generatedGrid.clientWidth,
      generatedGrid.clientHeight
    );
  }, [gridParams]);

  function handleGrid(e, param) {
    const newGridParams = [...gridParams];
    const newValue = e.target.value * 1;
    newGridParams[param] = newValue;
    setGridParams(() => newGridParams);

    let newColsRowsFr = [...colsRowsFr];
    if (param === 0 || param === 1) {
      if (gridParams[param] < newValue) {
        newColsRowsFr[param].push("1");
      } else {
        newColsRowsFr[param].pop();
      }
    }
    setColsRowsFr(() => newColsRowsFr);
  }

  return (
    <div className="App">
      <main>
        <SideBar gridParams={gridParams} handleGrid={handleGrid} />
        <DisplayGrid
          gridParams={gridParams}
          colsRowsFr={colsRowsFr}
          setColsRowsFr={setColsRowsFr}
        />
        <SlidePanel gridParams={gridParams} colsRowsFr={colsRowsFr} />
      </main>
    </div>
  );
}
