// ^ APP.TSX
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { SubmitHandler, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

const App = () => {
  type Inputs = { email: string, password: string }

  const [init, setInit] = useState(false);
  const [data, setData] = useState<{ email: string; password: string }>({ email: '', password: '' })

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#121212",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 220,
          },
          repulse: {
            distance: 200,
            duration: 0.1,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "outside",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 10, max: 20 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  //1-USEFORM FORM REACT-HOOK-FORM
  const { register, handleSubmit, control, formState: { errors } } = useForm<Inputs>({ mode: "onChange", defaultValues: { email: "", password: "" } });

  //2-SUBMIT HANDLER
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => { console.log(data); setData(data) }


  //^ RETURN =============================================================================================================================
  return (
    <>
      {/* <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} className="z-0" /> */}
      <div className="max-w-md z-50 mx-auto relative overflow-hidden  mt-32 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
        <h2 className="text-2xl font-bold text-white mb-6">LOGIN</h2>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="mb-4">
            <input className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white" type="email" placeholder="E-MAIL" {...register("email", { required: true, pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/ })} />
          </div>
          {errors.email && <p className="text-red-700 font-bold">Email is Invalid</p>}
          <div className="mb-4">
            <input className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white" type="password" placeholder="PASSWORD" {...register('password', { required: true, minLength: 5, maxLength: 10 })} />
          </div>
          {errors.password && <p className="text-red-700 font-bold">Invalid Password</p>}
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-16 py-4 font-bold rounded-md hover:opacity-80" type="submit">SUBMIT</button>
          </div>
        </form>
        <DevTool control={control} />
      </div >

      <h1 className="bg-zinc-500 text-center p-4 mx-auto font-extrabold rounded-xl w-fit border-4 border-black text-slate-950 mt-4">EMAIL :{data.email} -- PASSWORD :{data.password}</h1>


    </>);
};

export default App