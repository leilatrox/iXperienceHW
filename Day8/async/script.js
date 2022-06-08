const phoneBook = [
  {name: "Jack", number:"123"},
  {name:"Sara", number:"456"}
]

function printPhoneBook() {
  let output = '<ol>';
  for(let i = 0; i < phoneBook.length; i++) {
    let contact = phoneBook[i];
    output += '<li>' + contact.name + '-' + contact.number + '</li>';
  }
  output += '</ol>';
  document.body.innerHTML = output;
}

function saveContact(contact, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      phoneBook.push(contact);
      //alert('contact added');
      resolve();
  }, 3000)
  })
  
}

// saveContact({name:'Cam', number:'676'}).then(() => {
//     printPhoneBook();
//   }).catch(err => {
//     alert(err);
//   });

  async function start() {
    try {
      await saveContact({name:'Cam', number:'676'});
      printPhoneBook();
    } catch (err) {
      alert(err);
    }
  }

  start();