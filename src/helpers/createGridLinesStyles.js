function createGridLinesStyles(columns, boxWidth, boxHeight) {
  const style = document.createElement("style");
  style.textContent = `
    .gridcell:nth-child(-n + ${columns}) .lineright,
    .gridcell:nth-child(-n + ${columns}) .lineleft {
      position: absolute;
      top: 0;
      width: 1px;
      border-right: 1px solid #474747;
      height: ${boxHeight}px;
    }
    .gridcell:nth-child(-n + ${columns}) .lineright {
      right: 0;
    }
    .gridcell:nth-child(-n + ${columns}) .lineleft {
      left: 0;
    }
    .gridcell:nth-child(${columns}n + 1) .linetop,
    .gridcell:nth-child(${columns}n + 1) .linebottom {
      position: absolute;
      left: 0;
      height: 1px;
      border-top: 1px solid #474747;
      width: ${boxWidth}px;
    }
    .gridcell:nth-child(${columns}n + 1) .linetop {
      top: 0;
    }
    .gridcell:nth-child(${columns}n + 1) .linebottom {
      bottom: 0;
    }
    `;
  document.head.appendChild(style);
}

export default createGridLinesStyles;
