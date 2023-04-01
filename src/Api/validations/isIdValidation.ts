export const isIdValidation = (id: string): { isValid: boolean, message: string } => {
    if (typeof id === 'string') {
        if (id !== "") {
            return {
                message:"valid id",
                isValid: true
            }
        }
        else {
            return {
                message:"id empty",
                isValid: false
            }
        }
    }
    else {
        return {
            message: "id not string",
            isValid: false
        }
    }
}