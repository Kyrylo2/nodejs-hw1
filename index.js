console.log('Start project');
const { program } = require('commander');
const contacts = require('./contacts');

program
  .option('-a, --action <type>', 'choose action', 'list')
  .option('-id, --id <type>', 'choose id')
  .option('-n, --name <type>', 'choose name')
  .option('-e, --email <type>', 'choose email')
  .option('-p, --phone <type>', 'choose phone');

program.parse();

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  console.log(action);
  switch (action) {
    case 'add':
      const newContact = await contacts.addContact({ name, email, phone });
      return console.table(newContact);
    case 'remove':
      const removedContact = await contacts.removeContact(id);
      return console.table(removedContact);
    case 'get':
      const contactById = await contacts.getContactById(id);
      return console.log(contactById);
    case 'list':
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction(argv);
