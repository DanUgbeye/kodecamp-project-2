import Form from "./components/form";

function App() {
  return (
    <main className=" px-6 py-12 bg-[#76568A] " >
      <div className=" max-w-2xl min-w-[20rem] flex flex-col self-center md:mx-auto max-h-fit  overflow-hidden ">
        <h1 className=" rounded-t-lg text-center text-3xl font-semibold py-4 bg-[#DBC1ED] text-[#76568A] tracking-wide ">
          MyForm
        </h1>

        <Form />
        
      </div>
    </main>
  );
}

export default App;
