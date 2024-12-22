const asyncHandler = require('express-async-handler');
//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler ( async (req, res) => {
    res.status(200).json({ message: "Get contact" });
});
//@desc Create New contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler ( async  (req, res) => {
    console.log( "New contact", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        return res.status(400).json({ message: "All fields are required!!" });
    }
    res.status(201).json({message: "Create contact"});
});


//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler ( async  (req, res) => {
    res.status(200).json({message: "Get contact for " + req.params.id});
});

//@desc Update contact
//@route POST /api/contacts/:id
//@access public
const updateContact = asyncHandler ( async  (req, res) => {
    res.status(200).json({message: 'Update contact for ' + req.params.id});
});

//@desc Delete New contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler ( async  (req, res) => {
    res.status(200).json({message: 'Delete contact for ' + req.params.id});
});

module.exports = { getContact, createContact, getContacts, updateContact, deleteContact };


