import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const InstructorFormSchema = yup.object().shape({
  name: yup.string().required('You must enter your name'),
  email: yup
    .string()
    .email()
    .required('You must enter a valid email'),
  location: yup.string().required('You must enter your location'),
  phone: yup
    .string()
    .required('You must enter a valid 10-digit phone number')
    .matches(phoneRegExp, 'You must enter a valid 10-digit phone number')
    .min(10, 'You must enter a valid 10-digit phone number')
    .max(10, 'You must enter a valid 10-digit phone number'),
  education: yup.string().required('You must enter your education'),
  tech: yup.string().required('You must enter your technical experience'),
  notes: yup.string(),
});

export default InstructorFormSchema;
