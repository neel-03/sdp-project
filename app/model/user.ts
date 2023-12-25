import mongoose, { Schema } from "mongoose";

const modelName = "User";

// Check if the model already exists
const existingModel = mongoose.modelNames().includes(modelName);

const userSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: [true, "name required"]
    },
    email: {
        type: Schema.Types.String,
        required: [true, "email required"],
        unique: true,
        trim: true
    },
    password: {
        type: Schema.Types.String,
        required: [true, "password required"]
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
});

export const User = existingModel ? mongoose.model(modelName) : mongoose.model(modelName, userSchema);
// export const User = mongoose.model.Users || mongoose.model("Users", userSchema);