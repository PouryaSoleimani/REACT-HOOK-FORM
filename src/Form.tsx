import toast, { Toaster } from 'react-hot-toast';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Form = () => {

    const schema = yup.object({
        email: yup.string().required().email().max(30),
        password: yup.string().required().min(5).max(20)
    }).required()

    const { register, handleSubmit, getValues, formState: { errors }, } = useForm({
        defaultValues: { email: '', password: '' },
        resolver: yupResolver(schema)
    });

    const formHandler = (data) => {
        console.log(data)
        notify()
        setTimeout(() => { location.reload() }, 1500);
    }

    const values = getValues()

    const notify = () => toast.success('Successfull !');

    //^ RETURN
    return (
        <>
            <div className='flex flex-col justify-center items-center h-screen bg-gray-200'>
                <form id='formContainer' onSubmit={handleSubmit(formHandler)} className='p-6 w-[20rem] bg-zinc-800  my-2 border-8 border-black rounded-xl flex flex-col space-y-6'>
                    <h1 className='font-extrabold text-3xl text-white'>REGISTER</h1>
                    <input type="email" {...register("email")} className='p-2 rounded-xl font-bold outline-none' />
                    {errors.email && <p className='font-extrabold text-red-700 my-0 bg-red-200 p-2 text-sm rounded-lg'>{errors.email.message.toLocaleUpperCase()}</p>}
                    <input type="password" {...register("password")} className='p-2 rounded-xl font-bold outline-none' />
                    {errors.password && <p className='font-extrabold text-red-700 my-0 bg-red-200 text-sm p-2 rounded-lg'>{errors.password.message.toLocaleUpperCase()}</p>}
                    <button type="submit" className='bg-emerald-700 p-4 text-xl rounded-xl font-bold text-white hover:bg-emerald-500 duration-500'>SUBMIT</button>
                </form>
                <div className='flex items-center justify-center text-3xl font-extrabold bg-black text-white p-4 rounded-xl w-fit mx-auto'>
                    <h1>Email : {values.email} - Password: {values.password}</h1>
                </div>
            </div>
            <Toaster position="top-right" reverseOrder={true} />
        </>
    )
}

export default Form