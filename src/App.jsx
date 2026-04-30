import './App.css';
import { useEffect, useState } from "react";
function App() {
  const [hora] = useState(new Date());

  return (
    <main className="container mx-auto mt-10 bg-amber-100 p-10">
      <h1>Actividad DUAL 4 - CI/CD</h1>

      <div className=" border-2 mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <div>
          <div className="text-xl font-medium text-black dark:text-white">Despliegue</div>
          <p className  ="text-gray-500 dark:text-gray-400">{hora.toLocaleDateString()}</p>
        </div>
      </div>
    </main>
  );
}
export default App;
