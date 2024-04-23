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

<!-- ^ CUSTOM VALDATION RULES -->
// when we want to add a custom validation rule , we must pass the attribute "validate" to the input register , like ==> << {...register('email', validate : ()=>{})} >>
// validate accepts a function , in that function we can write conditions and then returning ( true / false ) ;


<!-- ^ FILLING FORMS WITH SERVER DATAS -->
// when we want to get a user information from server , for example by using the user ID , we can do a fetch in the "default values" section and get datas , then setting the default values to data values
// like ==> fetch(/users/userID) --> default values : email : user.email 

<!-- * GET VALUES METHOD IN REACT-HOOK-FORM -->
// getValues is a method that we can access it form the useForm hook , first we should destructure it form useForm and then we can call the function wherever we want , getValues()
// so we can Log the output of getValues function everywhere we want and we will have access to the input values as an object 

<!-- ! OBJECTS AND ARRAYS AS DEFAULT VALUES -->
// We can also have objects and arrays as default values in a useForm hook , Like :
defaultValues : socials  : {instagram : "" , telegram : ""}

// and also arrays like this : 
defaultValues : ["pourya" ,"soleimani" , "pouryasoleimani@gmail.com" , ...]

<!-- ! USING << YUP >> IN REACT-HOOK-FORM -->
// to use YUP in react-hook-form , first we need " @hookform/resolvers npm package " , 
// then we must import * as yup from yup
// then creating a schema using yup.object()