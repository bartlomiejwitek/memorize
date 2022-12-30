import Button from "@material-ui/core/Button";

export default function SummaryComponent({ resetCallback }) {
  return (
    <div>
      Finished!{" "}
      <Button
        variant="contained"
        onClick={() => {
          resetCallback();
        }}
      >
        Reset
      </Button>
    </div>
  );
}
