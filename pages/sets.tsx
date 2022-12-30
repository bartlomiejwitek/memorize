import Grid from "../components/grid-component";
import List from "../components/list-component";
import ListElement from "../components/list-element-component";

export default function Sets() {
  const mockGridData = [
    ["ID", "Ttitle", "Answer", "Something"],
    [1, "asdf", "cds", "asdf"],
    [2, "asdf", "dddd", "ffff"],
    [3, "asdf", "sdfa", "dddd"],
    [3, "bbbb", "cccc", "tttt"],
    [4, "bbbb", "gggg", "ddddd"],
    [5, "asdf", "fdas", "ffff"],
  ];

  const mockSets = [
    { id: 1, title: "Set 1" },
    { id: 2, title: "Set 2" },
    { id: 3, title: "Set 3" },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {/* sets<Grid data={mockGridData}></Grid> */}
      <div style={{ width: "50vw" }}>
        <List>
          {mockSets.map((element) => (
            <ListElement id={element.id}></ListElement>
          ))}
        </List>
      </div>
    </div>
  );
}
