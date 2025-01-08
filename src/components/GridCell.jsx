import bgimg from "../assets/diagonal-lines.png";

function GridCell() {
  return (
    <div className="gridcell" style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="linetop"></div>
      <div className="lineright"></div>
      <div className="linebottom"></div>
      <div className="lineleft"></div>
    </div>
  );
}

export default GridCell;
