import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card item={item} />;
  });
  return (
    <div>
      <Header />
      <div className="app-content">{cards}</div>
    </div>
  );
}

export default App;
