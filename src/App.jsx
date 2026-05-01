import { useState, useEffect } from "react";

export default function App() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="container mx-auto mt-10 bg-amber-100 p-10">
      <h1>Actividad DUAL 4 - CI/CD</h1>

      <div className="border-2 mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg">
        <div>
          <div className="text-xl font-medium">Despliegue</div>
          <p>{hora.toLocaleDateString()}</p>
        </div>
      </div>
    </main>
  );
}