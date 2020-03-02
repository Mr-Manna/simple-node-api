import mongoose from 'mongoose';
import { contactSchema } from '../models/crmModel';

const Contact = mongoose.model("Contact",contactSchema);

export const addNewContact = (req,res)=>{

    var name = req.body.name
    var email = req.body.email
    var phone = req.body.phone

    let newContact = new Contact({
        name,
        email,
        phone
    });

    newContact.save((err,contact)=>{
        if(err){
            res.send(err);
        }else{
            res.json(contact)
        }
    });
}

export const getContacts = (req,res)=>{
    Contact.find({},(err, contact) =>{
        if(err){
            res.send(err);
        }else{
            res.json(contact);
        }
    });
}

export const getContactById = (req,res)=>{
    Contact.findById(req.params.id,(err, contact) =>{
        if(err){
            res.send(err);
        }else{
            res.json(contact);
        }
    });
}

export const updateContact = (req,res)=>{
    Contact.updateOne(
        {_id: req.params.id},
        req.body,
        {new: true},
        (err, contact) =>{
            if(err){
                res.send(err);
            }else{
                res.json(contact);
            }
        });
}

export const deleteContact = (req,res)=>{
    Contact.deleteOne(
        {_id: req.params.id},
        (err, contact) =>{
            if(err){
                res.send(err);
            }else{
                res.json("contact deleted successfully");
            }
        });
}

