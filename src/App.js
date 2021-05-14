import Tooltip from "./components/Tooltip";
import ToolTip from "./components/styledComponent/index";

function App() {
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <div>Normal Div</div>
        <div>
          <ToolTip
            toolTipText={
              <table style={{ width: "300px" }}>
                <tr>
                  <th>name</th>
                  <th>githubName</th>
                  <th>URL</th>
                </tr>
                <tr>
                  <td>Shatish Desai</td>
                  <td>shatishdesai202</td>
                  <td>https://github.com/shatishdesai202</td>
                </tr>
              </table>
            }
          >
            Styled Component ( Hover Here )
          </ToolTip>
        </div>
      </div>

      <div style={{ marginTop: "100px" }}>
        <Tooltip content={"This is Tooltip"} direction="top">
          mouse hover here
        </Tooltip>
      </div>
    </>
  );
}

export default App;
