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
console.log('argv:', argv);

const invokeAction = async ({ action, name, email, phone }) => {
  console.log(action);
  switch (action) {
    case 'add':
      const newContact = contacts.addContact({ name, email, phone });
      return console.log(newContact);
    case 'remove':
      const removedContact = await contacts.removeContact(id);
      return console.log(removedContact);
    case 'get':
      const contactById = await contacts.getContactById(id);
      return console.log(contactById);
    case 'list':
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction(argv);
