 import * as Yup from 'yup';

 export const formSchema = Yup.object({
    name:Yup.string().min(2).max(25).required("Enter Your Name"),
    lastname:Yup.string().max(20).required("Your Lastname ?"),
    email: Yup.string()
    .email().required("Enter Your Email"),
   description:Yup.string().max(50).required("Description is required")
    // re_password:Yup.string().oneOf([Yup.ref()])
 })