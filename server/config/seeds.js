const db = require('./connection');
const { User, Miniature, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Blood Angels' },
    { name: 'Genestealers' },
    { name: 'Kill Team: RT' },
    { name: 'Blood Bowl' },
    { name: 'Cursed City' }
  ]);

  console.log('categories seeded');

  await Miniature.deleteMany();

  const miniatures = await Miniature.insertMany([
    {
      name: 'Librarian Calistarius',
      description:
        'Lexicarnum Calistarius has Phychic Powers as well as his Force Axe.',
      image: '1.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Brother Claudio',
      description:
        'A close combat expert Blaudio wields dual lightning claws.',
      image: '2.jpg',
      category: categories[0]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: 'Seargent Lorenzo',
      category: categories[0]._id,
      description:
        'Leader of Lorenzo Squad, he commands his marines with his stormbolter and power sword',
      image: '3.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Brother Omino',
      category: categories[0]._id,
      description:
        'A loyal brother armed with stormbolter and powerfist',
      image: '4.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Brother Scipio',
      category: categories[0]._id,
      description:
        'A loyal brother armed with stormbolter and powerfist',
      image: '5.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Brother Noctis',
      category: categories[0]._id,
      description:
        'A loyal brother armed with stormbolter and powerfist',
      image: '6.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Brother Denio',
      category: categories[0]._id,
      description:
        'A loyal brother armed with stormbolter and powerfist',
      image: '7.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Brother Leon',
      category: categories[0]._id,
      description:
        'A loyal brother armed with Assault Cannon and power fist',
      image: '8.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Brother Goriel',
      category: categories[0]._id,
      description: 'A loyal brother armed with stormbolter and powerfist',
      image: '9.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Brother Valencio',
      category: categories[0]._id,
      description:
        'A loyal brother armed with stormbolter and chainfist',
      image: '10.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Brother Zael',
      category: categories[0]._id,
      description:
        'Armed with the Heavy Flamer he is ready to clense the heritic with fire',
      image: '11.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Sergeant Gideon',
      category: categories[0]._id,
      description:
        'Leader of Gideon Squad, he drives back the heritic with Power Hammer and Shield.',
      image: '12.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Genestealer',
      category: categories[1]._id,
      description:
        'Multi Armed abominations from your darkest nightmares.',
      image: '13.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Genestealer',
      category: categories[1]._id,
      description:
        'Multi Armed abominations from your darkest nightmares.',
      image: '16.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Genestealer',
      category: categories[1]._id,
      description:
        'Multi Armed abominations from your darkest nightmares.',
      image: '17.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Genestealer',
      category: categories[1]._id,
      description:
        'Multi Armed abominations from your darkest nightmares.',
      image: '20.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Genestealer',
      category: categories[1]._id,
      description:
        'Multi Armed abominations from your darkest nightmares.',
      image: '21.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Genestealer',
      category: categories[1]._id,
      description:
        'Multi Armed abominations from your darkest nightmares.',
      image: '23.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Genestealer',
      category: categories[1]._id,
      description:
        'Multi Armed abominations from your darkest nightmares.',
      image: '26.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Genestealer',
      category: categories[1]._id,
      description:
        'Multi Armed abominations from your darkest nightmares.',
      image: '27.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Genestealer',
      category: categories[1]._id,
      description:
        'Multi Armed abominations from your darkest nightmares.',
      image: '29.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Genestealer',
      category: categories[1]._id,
      description:
        'Multi Armed abominations from your darkest nightmares.',
      image: '32.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Genestealer',
      category: categories[1]._id,
      description:
        'Multi Armed abominations from your darkest nightmares.',
      image: '34.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Genestealer',
      category: categories[1]._id,
      description:
        'Multi Armed abominations from your darkest nightmares.',
      image: '34a.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Genestealer',
      category: categories[1]._id,
      description:
        'Multi Armed abominations from your darkest nightmares.',
      image: '35.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Genestealer',
      category: categories[1]._id,
      description:
        'Multi Armed abominations from your darkest nightmares.',
      image: '35a.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Genestealer',
      category: categories[1]._id,
      description:
        'Multi Armed abominations from your darkest nightmares.',
      image: '35b.jpg',
      price: 9.99,
      quantity: 600
    },    
  ]);

  console.log('miniatures seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Micah',
    lastName: 'Conn',
    email: 'micah@conn.com',
    password: 'password12345'
  });

  await User.create({
    firstName: 'Liza',
    lastName: 'McCown',
    email: 'liza@mccown.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
