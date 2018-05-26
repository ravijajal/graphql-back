import mongoose from "mongoose";
import sanitizeJSON from "mongoose-sanitize-json";

const holidaySchema = mongoose.Schema({
    name: String,
    date: String
});

holidaySchema.plugin(sanitizeJSON);
export default mongoose.model('Holiday', holidaySchema);