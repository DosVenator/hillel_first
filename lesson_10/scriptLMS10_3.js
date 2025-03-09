const contactBook = {
  contacts: [
    { name: "Андрій", phone: "+380501234567", email: "andriy@gmail.com" },
    { name: "Марина", phone: "+380671234567", email: "marina@gmail.com" },
    { name: "Олексій", phone: "+380931234567", email: "oleksiy@gmail.com" },
  ],

  findContact: function (value) {
    let result = this.contacts.find(function (item) {
      if (item.name === value) {
        return item;
      }
      return undefined;
    });
    return result;
  },
  addContact: function (name, phone, email) {
    return this.contacts.push({ name, phone, email });
  },
};

console.log(contactBook.findContact("Марина"));
console.log(
  contactBook.addContact("Кирило", "38099961037", "wahdhdv@gmail.com")
);
console.log(contactBook.contacts);
