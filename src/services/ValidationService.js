class ValidationService {
    isValidText(inputValue) {
        if (inputValue !== "") {
            return null
        } else {
            const error = {
                message: "Insert some text!"
            };
            return error;
        }
    }

    isValidImage(inputValue) {
        if (inputValue.includes(".jpg") || inputValue.includes(".jpeg") || inputValue.includes(".png") || inputValue.includes(".svg")) {
            return null
        } else {
            const error = {
                message: "Invalid image URL!"
            };
            return error;
        }
    }

    isValidVideo(inputValue) {
        if (inputValue.includes("https://") && inputValue.includes("youtube")) {
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