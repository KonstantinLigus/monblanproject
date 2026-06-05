import Header from "./components/Header";
import PostActivityList from "./components/PostActivityList";
function App() {
  return (
    <>
      <Header />
      <main className="px-4 tablet:px-0">
        <PostActivityList />
      </main>
    </>
  );
}

export default App;
