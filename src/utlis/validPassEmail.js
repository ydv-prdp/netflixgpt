

export const validPassEmail = (user,email,password) => {
    let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordregex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    let userNameRegex =  /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
    if (!userNameRegex.test(user)) {
        return "Invalid UserName" ;
    }
    if (!emailregex.test(email)) {
        return "Invalid Email address" ;
    }
    if (!passwordregex.test(password)) {
        return "Invalid Password address";
    } 
    return null;
}
    


