class ValidationService {
    isNotValidText(inputValue) {
        if (inputValue === "") {
            const error = {
                message: "Insert some text!"
            };
            return error;
        } else {
            return null
        }
    }

    isNotValidImage(inputValue) {
        const re = /^((http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg))$/;
        
        if (re.test(String(inputValue).toLowerCase())) {
            return null
        } else {
            const error = {
                message: "Invalid image URL!"
            };
            return error;
        }
    }

    isNotValidVideo(inputValue) {
        const re = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
        if (re.test(String(inputValue).toLowerCase())) {
            return null
        } else {
            const error = {
                message: "Invalid video URL!"
            };
            return error;
        }
    }

}

export const validationService = new ValidationService()