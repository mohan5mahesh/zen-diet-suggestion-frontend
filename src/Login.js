import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export function Login() {
  return (
    <div className="loginpage">
      <TextField
        id="outlined-basic"
        label="UserId or UserEmailId"
        variant="outlined"
      />
      <br />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <br />
      <Button color="secondary">Submit</Button>
    </div>
  );
}
