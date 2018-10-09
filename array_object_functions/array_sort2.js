// Given an array of strings such as the array of names given in one of the "Good Job" problem, sort them by alphabetically order.

var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
  ];

  people.sort((name1, name2) => name1.length - name2.length);
  console.log(people);