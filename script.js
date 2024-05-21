let users = [
  {id: 1, name: "Вася", admin:'false'},
  {id: 2, name: "Петя",admin:'false'} ,
  {id: 3, name: "Маша",admin:'false'}
];

users.forEach(user => {
  user.admin = (user.name === "Маша");
});

console.log(users);
