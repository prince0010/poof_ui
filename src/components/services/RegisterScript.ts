import { ref } from 'vue';

    const fname = ref('');
    const mname = ref('');
    const lname = ref('');
    const address = ref('');
    const phonenum = ref('');
    const email = ref('');
    const password = ref('');
    const showPassword = ref(false);
    const succMessage = ref('');
    const errMessage = ref('');
    const cpassword = ref('');
    const errors = ref({
        fname: '',
        mname: '',
        lname: '',
        address: '',
        phonenum: '',
        email: '',
        password: '',
        cpassword: '',
    });
    const shakeStatus = ref({
        fname: false,
        mname: false,
        lname: false,
        address: false,
        phonenum: false,
        email: false,
        password: false,
        cpassword: false,
    });

    // Function to reset shake class after animation ends
    const removeShakeStatus = (field:  string) => {
        setTimeout(()=>{
            shakeStatus.value[field] = false;
        }, 500); // Remove the shake class affter animation duration (0.5s)
    }

    const togglePassword = () => {
        showPassword.value = !showPassword.value;
    }

    const validatedFirstName = () => {
        // If the input tag is empty
        if(!fname.value){
            errors.value.fname = 'First Name is Required';
            shakeStatus.value.fname = true;
            }
        else {   
            errors.value.fname = '';
        }
    };

    const validatedMiddleName = () => {
        if(!mname.value){
            errors.value.mname = 'Middle Name is Required';
            shakeStatus.value.mname = true;
        }
        else {
            errors.value.mname = '';
        }
    };

    const validatedLastName = () => {
        if(!lname.value){
            errors.value.lname = 'Last Name is Required';
            shakeStatus.value.lname = true;
        }
        else{
            errors.value.lname = '';
        }
    };

    const validatedAddress = () => {
        if(!address.value){
            errors.value.address = 'Address is Required';
            shakeStatus.value.address = true;
        }
        else{
            errors.value.address = '';
        }
    };

    const validatedPhoneNumber = () => {
        if(!phonenum.value){
            errors.value.phonenum = 'Phone Number is Required';
            shakeStatus.value.phonenum = true;
        }
        else{
            errors.value.phonenum = '';
        }
    };
    const validatedEmailField = () => {
        if(!email.value){
            errors.value.email = 'Email is Required';
            shakeStatus.value.email = true;
        }
        else if(!validatedEmail(email.value))
        {
            errors.value.email = 'Validated Email is Required';
            shakeStatus.value.email = true;
        }
        else {
            errors.value.email = '';
        }
    };
    const validatedPasswordField = () => {
        if(!password.value){
            errors.value.password = 'Enter Your Password First';
            shakeStatus.value.password = true;
        }
        // else if(password.value !== cpassword.value){
        //     errors.value.password = 'Password does not match';
        //     shakeStatus.value.password = true;
        // }
        else {
            errors.value.password = '';
        }
    };

    const validateConfirmPasswordField = () => {
        if(!cpassword.value){
            errors.value.cpassword = 'Enter the Same Exact Password';
            shakeStatus.value.cpassword = true;
        }
        else if(cpassword.value !== password.value){
            errors.value.cpassword = 'Password does not match. Try Again.'; 
            shakeStatus.value.cpassword = true;
        }
        else {
            errors.value.cpassword = '';
        }
    }

    // Logic for Register form
    const handleRegister = () => {

    validatedFirstName();
    validatedMiddleName();
    validatedLastName();
    validatedAddress();
    validatedPhoneNumber();
    validatedEmailField();
    validatedPasswordField();
    validateConfirmPasswordField();

    if(!errors.value.fname && !errors.value.mname && !errors.value.lname && !errors.value.address && !errors.value.phonenum && !errors.value.email && !errors.value.password && !errors.value.cpassword){
        succMessage.value = 'Register Successfully';
        errMessage.value = '';
    }
    else{
        errMessage.value = 'Something went wrong. Please try again.';
        succMessage.value = '';
    }
};

    // Validated Email Validation function simple regex check
    const validatedEmail = (email: string) =>{
        const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return re.test(email);
    };

    // Add a Validation for a phone number field 

    // Add a Validation for a address 

    export{
        fname,
        mname,
        lname,
        address,
        phonenum,
        email,
        password,
        cpassword,
        showPassword,
        succMessage,
        errMessage,
        errors,
        shakeStatus,
        removeShakeStatus,
        togglePassword,
        handleRegister,
        validatedFirstName,
        validatedMiddleName,
        validatedLastName,
        validatedAddress,
        validatedPhoneNumber,
        validatedEmailField,
        validatedPasswordField,
        validateConfirmPasswordField,
    }