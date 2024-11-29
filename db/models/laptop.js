const { default: mongoose } = require("mongoose");

const LaptopnSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  laptopmodel: {
    type: String,
    required: true,
    unique: true,
  },
  laptopprice: {
    type: String,
    required: true,
  },
});
const LaptopModel =
  mongoose.models.laptop || mongoose.model("laptop", LaptopnSchema);
export default LaptopModel;
