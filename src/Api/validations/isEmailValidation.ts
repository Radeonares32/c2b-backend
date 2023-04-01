export const isEmailValidation = (email: string) => {
    if (email !== "") {
        if (typeof email === 'string') {
            const emailRegExp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
            const isEmail = email.match(emailRegExp);
            if (isEmail) {
                return {
                    isEmail: true
                }
            }
            else {
                return {
                    message: "not email",
                    isEmail: false
                }
            }
        }
        else {
            return {
                message: "email not string",
                isEmail: false
            }
        }
    }
    else {
        return {
            message: "email empty",
            isEmail: false
        }
    }

}