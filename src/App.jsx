import {
  Card,
  Header,
  Home,
  Tech,
  About,
  Footer,
  des2,
  des1,
} from "./components/Comp";
import {
  html,
  cpp,
  css,
  javascript,
  python,
  vsCode,
  nodejs,
  react,
} from "./components/myImages";
function App() {
  return (
    <>
      <div className="bg-blue-50 min-h-full w-full">
        <header>
          <Header />
        </header>
        <main>
          <section id="section1">
            <Home />
          </section>
          <section
            id="section2"
            className="w-full px-2 py-4 flex flex-col items-center gap-8 "
          >
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold uppercase">
                My Projects
              </h2>
            </div>
            <div className="flex flex-col gap-4 w-full max-w-6xl">
              <div className="flex-1">
                {" "}
                {/* Wrap Card in a div to take full width */}
                <Card title={"Weather Forecast"} description={des1} />
              </div>
              <div className="flex-1">
                {" "}
                {/* Wrap Card in a div to take full width */}
                <Card title={"Password Generator"} description={des2} />
              </div>
            </div>
          </section>
          <section
            id="section3"
            className="flex flex-col items-center mt-10 p-2 py-4 gap-4"
          >
            <div>
              {" "}
              <h2 className="text-4xl sm:text-5xl font-bold uppercase">
                Technologies
              </h2>
            </div>
            <div className="flex gap-3 flex-wrap justify-center sm:flex sm:justify-between">
              <Tech source={html} name={"html"} />
              <Tech source={css} name={"css"} />
              <Tech source={javascript} name={"javascript"} />
              <Tech source={react} name={"react"} />
              <Tech source={nodejs} name={"nodejs"} />
              <Tech source={vsCode} name={"vsCode"} />
              <Tech source={python} name={"python"} />
              <Tech source={cpp} name={"cpp"} />
            </div>
          </section>
          <section
            id="section4"
            className="flex flex-col items-center mt-10 p-2 py-4 gap-4"
          >
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold uppercase">
                About me
              </h2>
            </div>
            <div className="flex  w-[100%] bg-slate-300">{/* <About /> */}</div>
          </section>
        </main>
        <footer>
          <div>
            <Footer />
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
