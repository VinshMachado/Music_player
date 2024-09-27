export default function App() {
  return (
    <>
      <div className="h-screen w-full flex-row bg-black">
        <div className="h-5/6 w-full flex">
          <Menu />

          <User />
        </div>
        <Player />
      </div>
    </>
  );
}

import Player from "./components/Player";
import Menu from "./components/Menu";
import User from "./components/User";
