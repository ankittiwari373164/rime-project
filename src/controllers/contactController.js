import contactModel from "../models/contactModel.js";

export const userContact = async(req,res) => {
    try {
        const newContact = new contactModel(req.body);
        const savedContact = await newContact.save();

        res.status(200).json(savedContact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getContacts = async(req,res) => {
    try {
        const contactList = await contactModel.find({});
        res.status(200).json(contactList);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteContact = async (req, res) => {
  try {
    const contact = await contactModel.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({ msg: "Contact not found" });
    }

    res.status(200).json({ msg: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};