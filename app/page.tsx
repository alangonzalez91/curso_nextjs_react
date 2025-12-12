import Image from 'next/image';
import LazyReveal from "./componentes/LazyReveal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <LazyReveal>
      <div className="relative place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <p className="m-10 text-center font-bold text-3xl">
          ALAN GONZÁLEZ PORTAFOLIO
        </p>
        <p className="text-2xl fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-200/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="text-2xl font-mono font-bold"> E-mail: alangonzalez91@gmail.com</code>
        </p>        
        <p className="m-20 text-center font-bold text-2xl">
          DESARROLLO WEB - PROGRAMAS WINDOWS - APPS ANDROID
        </p>        
      </div>
      </LazyReveal>

      <LazyReveal>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <p className="mb-10 text-left font-bold text-2xl">
          Desarrollo WEB
        </p>   
      </div>
      </LazyReveal>

      <LazyReveal>
      <div className="reveal  mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Backend PHP + MySql
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Despliegue de bases de datos y desarrollo de APIs
          </p>        
        </div>
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Backend CMS ProcessWire + PHP
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Despliegue, modelado y desarrollo de APIs
          </p>        
        </div>        
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Frontend Vue.JS + Vuetify
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Diseño responsive / modular con MAterial Design
          </p>        
        </div>            
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Frontend React.JS + Tailwind
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Diseño modular adaptativo
          </p>        
        </div>         
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Despliegue de servidor VPS
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Preparación y despliegue en servidor Verce, Hostinguer VPS y DonWeb con delegación de dominios .com.ar
          </p>        
        </div>         
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Desarrollo rápido en Wordpress / Blogspot
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Diseño y depliegue rápido de webs bajo Wordpress o Blogspot
          </p>        
        </div>             
      </div>
      </LazyReveal>

      <LazyReveal>
      <div className="m-20 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <p className="mb-10 text-left font-bold text-2xl">
          Proyectos WEB
        </p>   
      </div>
      </LazyReveal>     
      <LazyReveal>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://www.simpletienda.com.ar"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            SimpleTienda{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Market PLace regional hecho con VUE + Vuetify
          </p>
        </a>

        <a
          href="https://www.simplesoft.com.ar"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            SimpleSoft .Ti{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Web de empresa montado con BlogSpot
          </p>
        </a>

        <a
          href="https://www.simplesoft.com.ar/ssg"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            SSG{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Web de servicio hecho en VUE + Vuetify CDN
          </p>
        </a>    

        <a
          href="https://curso-react-1-two.vercel.app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Agenda Web{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Sistema de agenda para gestión personal y de equipo desarrollado en React.JS + Tailwind y montado en Vercel
          </p>
        </a>            
      </div>                   
      </LazyReveal>     
      <LazyReveal>
      <div className="m-20 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <p className="mb-10 text-left font-bold text-2xl">
          Programas Windows
        </p>   
      </div>
      </LazyReveal>      
      <LazyReveal>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Bases de datos MySQL
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Despliegue y diseño de bases de datos
          </p>        
        </div>
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Desarrollo VisualNEO
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Desarrollo multi ventana empaquetado en .exe para distribución
          </p>        
        </div>        
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Desarrollo .NET
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Desarrollo multi ventana en Visul Basic
          </p>        
        </div>            
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Integración con Factura Electrónica ARCA
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Integración y alta de certificado ARCA para Facturación Electrónica
          </p>        
        </div>         
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Otras integraciones
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Desarrollo con integraciones PDF, Correo Electronico, API, etc.
          </p>        
        </div>             

        </div>
      </LazyReveal>        
 
      <LazyReveal>
      <div className="m-20 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <p className="mb-10 text-left font-bold text-2xl">
          Proyectos Windows
        </p>   
      </div>
      </LazyReveal>

      <LazyReveal>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://www.simplesoft.com.ar/ssg#videos"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Sistema SSG{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Sistema ERP desarrollado en VisualNEO
          </p>
        </a>
      </div>         
      </LazyReveal>

      <LazyReveal>
      <div className="m-20 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <p className="mb-10 text-left font-bold text-2xl">
          Apps Android
        </p>   
      </div>
      </LazyReveal>

      <LazyReveal>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Desarrollo en B4A + SQLite
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Desarrollo de apps móviles multi pantalla nativas con integración a base de datos SQLite para producción
          </p>        
        </div>
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Integraciones
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Gestión de envio y recepción de API para sincronización en tiempo real. Activación y bloqueo de terminales vía control admin.
          </p>        
        </div>             
      </div>
      </LazyReveal>

      <LazyReveal>
      <div className="m-20 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <p className="mb-10 text-left font-bold text-2xl">
          Proyectos Android
        </p>   
      </div>
      </LazyReveal>

      <LazyReveal>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://www.simplesoft.com.ar/app/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Apps SSG{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Apps creadas en Basics4Android para producción
          </p>
        </a>

        <a
          href="https://www.youtube.com/watch?v=WAFYioz6taw&t=2s"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            SSG Gestión Móvil{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Apps creadas en Basics4Android para producción
          </p>
        </a>        
      </div>   
      </LazyReveal>
    </main>
  );
}
