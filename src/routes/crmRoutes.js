import { addNewContact } from '../controllers/crmController';
import { getContacts, getContactById } from '../controllers/crmController';
import { updateContact, deleteContact } from '../controllers/crmController';

const routes = (app)=>{
    app.route('/contact')
        .get(getContacts)
        .post(addNewContact);
    app.route('/contact/:id')
        .get(getContactById)
        .put(updateContact)
        .delete(deleteContact);
}

export default routes;