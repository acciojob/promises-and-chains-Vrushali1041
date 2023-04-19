//your JS code here. If required.
const form = document.querySelector('form');
      const ageInput = document.querySelector('#age');
      const nameInput = document.querySelector('#name');
      const submitBtn = document.querySelector('#btn');

      form.addEventListener('submit', (event) => {
        event.preventDefault(); // prevent the form from submitting

        // validate inputs
        if (ageInput.value.trim() === '' || nameInput.value.trim() === '') {
          alert('Please fill out all fields.');
          return;
        }
  // resolve/reject promise after 4 seconds
        const promise = new Promise((resolve, reject) => {
          setTimeout(() => {
            const age = parseInt(ageInput.value);
            const name = nameInput.value;

            if (age >= 18) {
              resolve(`Welcome, ${name}. You can vote.`);
            } else {
              reject(`Oh sorry ${name}. You aren't old enough.`);
            }
          }, 4000);
        });

        // handle promise resolution/rejection
        promise.then((message) => {
          alert(message);
        }).catch((error) => {
          alert(error);
        });
		   // reset form inputs
        form.reset();
      });