import Form from "./components/form";

function App() {
  return (
    <div className=" mx-6 " >
      <div className=" max-w-2xl min-w-[20rem] flex flex-col self-center md:mx-auto max-h-fit  overflow-hidden my-12 ">
        <h1 className=" rounded-t-lg text-center text-3xl font-semibold py-4 bg-[#DBC1ED] text-[#76568A] tracking-wide ">
          MyForm
        </h1>

        <Form />
        
      </div>
    </div>
  );
}

export default App;
