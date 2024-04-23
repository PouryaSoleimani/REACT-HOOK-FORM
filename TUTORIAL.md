<!-- & REACT-HOOK-FORM TUTORIAL -->
<!-- ^ INSTALLATION -->
1 - NPM I REACT-HOOK-FORM

<!-- ^ IMPORTING USEFORM HOOK -->
2 - import { useForm } from 'react-hook-form';

<!-- ^ USING USEFORM HOOK -->
3 -   const {  register,  handleSubmit,  formState: { errors }} = useForm();

<!-- ^ ADDING handleSubmit TO OUR FORM -->
4 -     <form onSubmit={handleSubmit((data) => console.log(data))}>
// we can pass a function to handlesubmit and receive the data in that EXTERNAL FUNCTION

<!-- ^ REGISTERING THE FORM INPUTS -->
//      <input {...register('lastName', { required: true })} />
we write {...register} in the params of our input and pass a name to every input register like ==> {...register('email')} OR {...register('password')}

<!-- ^ BASIC VALDATION RULES -->
// we can pass our validation rules as the second parameter in the register part , like ==> {...register('name' , minLength: 5 , maxLength : 20)}
// validation rules contain : "minLength" , "maxLength" , "pattern"(we can pass a REGEX to the pattern attribute for emails and ...) , "required" , ...
// we also can have a object as validation rules , which gets a "value"(the name of validation rule such as minLength ...) , and a "message" as its "ERROR MESSAGE" for creating "CUSTOM ERROR MESSAGES"

