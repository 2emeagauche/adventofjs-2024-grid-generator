import { useRef, useEffect } from "react";
import PropTypes from'prop-types';
import Prism from "prismjs";
import "../dracula-prism.css";
import closePicto from "../assets/close.svg";
import clipboardPicto from "../assets/clipboard.svg";

function SlidePanel({ gridParams, colsRowsFr }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [gridParams, colsRowsFr]);

  const cssText = useRef(null);
  const htmlText = useRef(null);

  function handleClose() {
    const panel = document.querySelector(".slide-panel");
    panel.classList.remove("show-panel");
  }

  function copyToClipboard(textToCopy) {
    navigator.clipboard.writeText(textToCopy);
  }

  function formatTemplate(columnOrRow) {
    const result = columnOrRow.reduce(
      (acc, curr) => {
        const lastIndex = acc.length - 1;
        if (curr - acc[lastIndex][1] === 0) {
          acc[lastIndex][0]++;
        } else {
          acc.push([1, curr]);
        }
        return acc;
      },
      [[0, columnOrRow[0]]]
    );
    let val = "";
    result.forEach((arr) => {
      val += arr[0] > 1 ? `repeat(${arr[0]}, ${arr[1]}fr) ` : `${arr[1]}fr `;
    });
    return val;
  }

  function cssSnippet() {
    return `.parent {
  display: grid;
  grid-template-columns: ${formatTemplate(colsRowsFr[0])};
  grid-template-rows: ${formatTemplate(colsRowsFr[1])};
  grid-column-gap: ${gridParams[2]}px;
  grid-row-gap: ${gridParams[3]}px;
}`;
  }

  function htmlSnippet() {
    return `<div class="parent">
</div>`;
  }

  return (
    <div className="slide-panel">
      <div className="code-block">
        <h2>CSS</h2>
        <div className="code-wrapper">
          <pre>
            <code className="language-css" ref={cssText}>
              {cssSnippet()}
            </code>
          </pre>
          <button
            className="copy-to-clipboard"
            onClick={() => copyToClipboard(cssText.current.innerText)}
          >
            <img src={clipboardPicto} alt="" />
            Copy to Clipboard
          </button>
        </div>
      </div>
      <div className="code-block">
        <h2>HTML</h2>
        <div className="code-wrapper">
          <pre>
            <code className="language-html" ref={htmlText}>
              {htmlSnippet()}
            </code>
          </pre>
          <button
            className="copy-to-clipboard"
            onClick={() => copyToClipboard(htmlText.current.innerText)}
          >
            <img src={clipboardPicto} alt="" />
            Copy to Clipboard
          </button>
        </div>
      </div>
      <button className="close-panel" onClick={handleClose}>
        <img src={closePicto} alt="" />
      </button>
    </div>
  );
}

SlidePanel.propTypes = {
  gridParams: PropTypes.array,
  colsRowsFr: PropTypes.array,
}

export default SlidePanel;
