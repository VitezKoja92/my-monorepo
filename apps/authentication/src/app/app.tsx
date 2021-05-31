import { Button, ButtonColor, ButtonType } from '@my-monorepo/ui';

export function App() {
  return (
    <div className="App">
      <Button
        text="Submit"
        color={ButtonColor.Orange}
        type={ButtonType.RaisedRounded}
        disabled={true}
      />
    </div>
  );
}

export default App;
