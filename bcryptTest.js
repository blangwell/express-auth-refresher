const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'somePassword'
const someOtherPlaintextPassword = 'dfuqbintch'

bcrypt.genSalt(saltRounds, function (err, salt) {
  bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
    console.log(hash);
    bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
      if (err) console.log(err);
      else console.log(result);
    })
    // bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
    //   if (err) console.log(err);
    //   else console.log(result);
    // })
  });
});
