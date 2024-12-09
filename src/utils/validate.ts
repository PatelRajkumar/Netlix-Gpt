export const checkValidateData = (email:string ,password:string) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    if(!isEmailValid) return "Invalid Email"
    if(!isPasswordValid) return "Invalid Password"

    return null;

}
export const validateName = (name:string) =>{
    const isValid = /^[A-Za-zÀ-ÿ]+([-' ][A-Za-zÀ-ÿ]+)*$/.test(name);
    if(!isValid) return "Invalid name";
    return null
}