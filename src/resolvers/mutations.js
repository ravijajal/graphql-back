import Holidays from "../models/holidays";
const Mutations = {
  createHoliday: async (root, args) => {
    const holiday = new Holidays(args);
    let newHoliday = null;
    await holiday.save().then(savedHoliday => {
      newHoliday = savedHoliday;
    });
    return newHoliday;
  },
  updateHoliday: async (root, args) => {
    let newHoliday = null;
    let tmpHoliday = null;
    await Holidays.findById(args.id).then(holiday => {
      tmpHoliday = holiday;
    });
    tmpHoliday.name = args.name;
    tmpHoliday.date = args.date;
    await tmpHoliday.save().then(updatedHoliday => {
      newHoliday = updatedHoliday;
    });
    return newHoliday;
  },
  deleteHoliday: async (root, args) => {
    let tmpHoliday = null;
    await Holidays.findById(args.id).then(holiday => {
      tmpHoliday = holiday;
    });
    await Holidays.deleteOne({ _id: args.id });
    return tmpHoliday;
  },
};
export default Mutations;
