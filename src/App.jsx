import { Button } from "./components/Button";
import './scss/layout/_main.scss'

function App() {
  return (
    <div className="main">
      <h1>Buttons</h1>
      <div className="button-container">
        <div className="style">
          <p>{`<Button />`}</p>
          <Button />
        </div>
        <div className="style">
          <p>{`<Button variant="outline" />`}</p>
          <Button variant="outline" />
        </div>
        <div className="style">
          <p>{`<Button variant="text" />`}</p>
          <Button variant="text" />
        </div>
        <div className="style">
          <p>{`<Button disableShadow />`}</p>
          <Button disableShadow />
        </div>
        <div className="style">
          <p>{`<Button disabled />`}</p>
          <Button disabled />
        </div>
        <div className="style">
          <p>{`<Button variant=”text” disabled />`}</p>
          <Button variant="text" disabled />
        </div>
        <div className="style">
          <p>{`<Button startIcon=”local_grocery_store” />`}</p>
          <Button color="primary" startIcon="local_grocery_store" />
        </div>
        <div className="style">
          <p>{`<Button endIcon=”local_grocery_store” />`}</p>
          <Button color="primary" endIcon="local_grocery_store" />
        </div>
        <div className="style">
          <p>{`<Button size=”sm” />`}</p>
          <Button color="primary" size="sm" />
        </div>
        <div className="style">
          <p>{`<Button size=”md” />`}</p>
          <Button color="primary" />
        </div>
        <div className="style">
          <p>{`<Button size=lg />`}</p>
          <Button color="primary" size="lg" />
        </div>
        <div className="style">
          <p>{`<Button color="default" />`}</p>
          <Button />
        </div>
        <div className="style">
          <p>{`<Button color="primary" text="Primary" />`}</p>
          <Button text="Primary" color="primary" />
        </div>
        <div className="style">
          <p>{`<Button color="secondary" text="Secondary" />`}</p>
          <Button text="Secondary" color="secondary" />
        </div>
        <div className="style">
          <p>{`<Button color="danger" text="Danger" />`}</p>
          <Button text="Danger" color="danger" />
        </div>
      </div>
      <h2>created by tinoreyna1984 - devChallenges.io</h2>
    </div>
  );
}

export default App;
