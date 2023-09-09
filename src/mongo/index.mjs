import mongoose from "mongoose"

export const startConnection = async () => {
const url = encodeURI("mongodb+srv://JMartin27:Tntmasc4@uao-proccessor.obpfizv.mongodb.net/?retryWrites=true&w=majority")
await mongoose.connect(url);
}