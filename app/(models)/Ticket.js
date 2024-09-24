import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const tickectSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    Progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket =
  mongoose.models.Ticket || mongoose.model("Ticket", tickectSchema);
export default Ticket;
