  var savedInput = localStorage.getItem('input');
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var submit = document.getElementById('submit');
  var database = [
    {
      email: 'test@test.com',
      password: 'test0000'
    },
    {
      email: 'test1@test.com',
      password: 'test1111'
    },
    {
      email: 'test2@test.com',
      password: 'test2222'
    },
    {
      email: 'test3@test.com',
      password: 'test3333'
    },
    {
      email: 'test4@test.com',
      password: 'test4444'
    },
    {
      email: 'test5@test.com',
      password: 'test5555'
    },
    {
      email: 'test6@test.com',
      password: 'test6666'
    },
    {
      email: 'test7@test.com',
      password: 'test7777'
    },
    {
      email: 'test8@test.com',
      password: 'test8888'
    },
    {
      email: 'test9@test.com',
      password: 'test9999'
    }
  ];
  function login() {
    for (var i = 0; i < database.length; i++) {
      if (email.value === database[i].email && password.value === database[i].password) {
        alert('You are logged in!');
        return;
      }
    }
    alert('Wrong email or password!');
  }


  submit.addEventListener('click', function(e) {
    e.preventDefault();
    login();
  });