import Holidays from "../models/holidays";
const Queries = {
    holidays: async () => {
        return (await Holidays.find({}));
    }

};
export default Queries;