const Mutations = `
type Mutations {
    createHoliday(name: String, date: String): Holiday
    updateHoliday(id:String, name: String, date: String): Holiday
    deleteHoliday(id:String): Holiday
  }
`;
export default Mutations;