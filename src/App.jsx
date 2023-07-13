import CounterProvider from "./context/counter/reducer";
import UsersProvider from "./context/users/reducer";

import Counter from "./components/Counter";
import Users from "./components/Users";

const App = () => {
  return (
    <UsersProvider>
      <CounterProvider>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "space-between",
            marginLeft: 100,
          }}
        >
          <Counter />
          <Users />
        </div>
      </CounterProvider>
    </UsersProvider>
  );
};

export default App;
