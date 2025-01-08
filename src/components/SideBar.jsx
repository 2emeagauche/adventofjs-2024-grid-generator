import PropTypes from'prop-types';

function SideBar({ gridParams, handleGrid }) {
  function handlePanel() {
    const panel = document.querySelector(".slide-panel");
    panel.classList.add("show-panel");
  }

  return (
    <div className="sidebar">
      <h1>CSS Grid Generator</h1>
      <div className="userInput">
        <label htmlFor="columnInput">Columns</label>
        <input
          type="number"
          min="1"
          id="columnInput"
          value={gridParams[0]}
          onChange={(e) => handleGrid(e, 0)}
        />
        <label htmlFor="rowInput">Rows</label>
        <input
          type="number"
          min="1"
          id="rowInput"
          value={gridParams[1]}
          onChange={(e) => handleGrid(e, 1)}
        />
        <label htmlFor="columnGapInput">
          Column Gap <span>(in px)</span>
        </label>
        <input
          type="number"
          min="0"
          id="columnGapInput"
          value={gridParams[2]}
          onChange={(e) => handleGrid(e, 2)}
        />
        <label htmlFor="rowGapInput">
          Row Gap <span>(in px)</span>
        </label>
        <input
          type="number"
          min="0"
          id="rowGapInput"
          value={gridParams[3]}
          onChange={(e) => handleGrid(e, 3)}
        />
      </div>
      <button className="panel-command" onClick={handlePanel}>
        Get code
      </button>
    </div>
  );
}

SideBar.propTypes = {
  gridParams: PropTypes.array,
  handleGrid: PropTypes.func,
}

export default SideBar;
