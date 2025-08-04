import Navbar from "./navbar/Navbar";
import Extensions from "./Extensions/Extensions";

const App = () => {
  return (
    <main className="min-h-screen bg-theme flex flex-col ">
      <div className="mx-[6vw]">
        <Navbar />
        <Extensions />
      </div>
    </main>
  );
};

export default App;
