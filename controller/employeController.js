import EmpModel from "../models/empModel.js";

class EmployeController {
  static createDoc = async (req, res) => {
    try {
      const { name, age, phone } = req.body;
      const doc = new EmpModel({
        name: name,
        age: age,
        phone: phone,
      });
      const result = await doc.save();
      res.redirect("/employee");
    } catch (error) {
      console.log(error);
    }
  };

  static getAllDoc = async (req, res) => {
    try {
      const result = await EmpModel.find();
      // console.log(result);
      res.render("index", { data: result });
    } catch (error) {
      console.log(error);
    }
  };
  static edit = async (req, res) => {
    // console.log(req.params.id);
    try {
      const result = await EmpModel.findById(req.params.id);
      // console.log(result);
      res.render("edit", { data: result });
    } catch (error) {
      console.log(error);
    }
  };
  static updateDoc = async (req, res) => {
    // console.log(req.params.id);
    // console.log(req.body);
    try {
      const result = await EmpModel.findByIdAndUpdate(req.params.id, req.body);
      // console.log(result);
      res.redirect("/employee");
    } catch (error) {
      console.log(error);
    }
  };
  static delete = async (req, res) => {
    // console.log(req.params.id);
    try {
      const result = await EmpModel.findByIdAndDelete(req.params.id);
    } catch (error) {
      console.log(error);
    }
    res.redirect("/employee");
  };
}
export default EmployeController;
