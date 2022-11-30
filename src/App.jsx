import CrossIcon from "./components/CrossIcon";
import MoonIcon from "./components/MoonIcon";

const App = ()=>{
  return(
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">

      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1  className="uppercase text-white text-2xl font-bold tracking-[0.3em]">Todo</h1>
          <button>
            <MoonIcon fill="#FFF" className="fill-red-400"/>
          </button>
        </div>
        <form className="bg-white rounded overflow-hidden py-2 flex items-center gap-4 px-4 mt-8">
          <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
          <input 
            type="text" 
            placeholder="Create a new todo..."
            className="w-full text-gray-400 outline-none"  
          />
        </form>
      </header>

      <main className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded [&>article]:p-4 [&>article]:border-b-gray-400">
          <article className="flex gap-4  border-b">
              <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
              <p className="text-gray-600 grow">Complete online Javascript course</p>
              <button className="flex-none">
                <CrossIcon/>
              </button>
          </article>
          <article className="flex gap-4  border-b">
              <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
              <p className="text-gray-600 grow">Complete online Javascript course</p>
              <button className="flex-none">
                <CrossIcon/>
              </button>
          </article>
          <article className="flex gap-4  border-b">
              <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
              <p className="text-gray-600 grow">Complete online Javascript course</p>
              <button className="flex-none">
                <CrossIcon/>
              </button>
          </article>
          <section className="py-4 px-4 flex justify-between">
            <span className="text-gray-400"> 5 items left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>
        </div>
      </main>
      
      <section className="container mx-auto px-4 mt-8">
        <div className="bg-white p-4 rounded justify-center flex gap-4">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>

      <section className="text-center mt-8">Drag and Drop</section>
    </div> 
   )
}


export default App;