let db = {
  users: [
    {
      userId: '0Plqiy79OaSyxNg8rQvBp2gWsSj1',
      email: 'mk@email.com',
      handle: 'mk',
      createdAt: '2020-06-11T13:21:44.028Z',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/socialape-7cf41.appspot.com/o/no-img.png?alt=media',
      bio: 'hello my name is mk',
      website: 'http://.mk.com',
      location: 'Brazil',
    },
  ],
  screams: [
    {
      userHandle: 'user',
      body: 'this is the scream body',
      createdAt: '2020-06-09T19:10:38.049Z',
      likeCount: 5,
      commentCount: 2,
    },
  ],
  comments: [
    {
      userHandle: 'mk',
      screamId: 'c',
      body: 'very nice',
      createdAt: '2020-06-10T15:52:38.933Z',
    },
  ],
};

const userDetails = {
  //Redux Data
  credentials: {
    userId: '0Plqiy79OaSyxNg8rQvBp2gWsSj1',
    email: 'mk@email.com',
    handle: 'mk',
    createdAt: '2020-06-11T13:21:44.028Z',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/socialape-7cf41.appspot.com/o/no-img.png?alt=media',
    bio: 'hello my name is mk',
    website: 'http://.mk.com',
    location: 'Brazil',
  },
  likes: [
    {
      userHandle: 'new',
      screamId: 'AVgruTdlUxf1JUvjj3hMd6bT6LM2',
    },
    {
      userHandle: 'new1',
      screamId: 'sGuQR3Q6mkhPByrrTMaPgoxcv332',
    },
  ],
};
