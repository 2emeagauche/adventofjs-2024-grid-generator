import PropTypes from'prop-types'
import GridCell from "./GridCell";

function DisplayGrid({ gridParams, colsRowsFr, setColsRowsFr }) {
  const gridCellList = new Array(gridParams[0] * gridParams[1]).fill(null);

  function columnsTemplate() {
    let val = "152px";
    colsRowsFr[0].forEach((col) => (val += " " + col + "fr"));
    return val;
  }

  function rowsTemplate() {
    let val = "160px";
    colsRowsFr[1].forEach((row) => (val += " " + row + "fr"));
    return val;
  }

  function handleCol(e, i) {
    const newColsRowsFr = [...colsRowsFr];
    newColsRowsFr[0][i] = e.target.value;
    setColsRowsFr(() => newColsRowsFr);
  }

  function handleRow(e, i) {
    const newColsRowsFr = [...colsRowsFr];
    newColsRowsFr[1][i] = e.target.value;
    setColsRowsFr(() => newColsRowsFr);
  }

  return (
    <div
      id="maingrid"
      style={{
        gridTemplateColumns: columnsTemplate(),
        gridTemplateRows: rowsTemplate(),
      }}
    >
      <div></div>
      {colsRowsFr[0].map((_, i) => (
        <div key={"col" + i} className="colheader">
          <div className="setFr">
            <input
              type="text"
              value={colsRowsFr[0][i]}
              onChange={(e) => handleCol(e, i)}
            />
            <span>fr</span>
          </div>
        </div>
      ))}
      {colsRowsFr[1].map((_, i) => (
        <div key={"row" + i} className="rowheader">
          <div className="setFr">
            <input
              type="text"
              value={colsRowsFr[1][i]}
              onChange={(e) => handleRow(e, i)}
            />
            <span>fr</span>
          </div>
        </div>
      ))}
      <div className="generatedgrid">
        {gridCellList.map((_, i) => (
          <GridCell key={"cell" + i} />
        ))}
      </div>
    </div>
  );
}

DisplayGrid.propTypes = {
  gridParams: PropTypes.array,
  colsRowsFr: PropTypes.array,
  setColsRowsFr: PropTypes.array,
}

export default DisplayGrid;
