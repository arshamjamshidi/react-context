import CounterProvider from "./context/counter/reducer";

import Counter from "./components/Counter";

const App = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};

export default App;
