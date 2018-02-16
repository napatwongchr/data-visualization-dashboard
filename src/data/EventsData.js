var events = [
  {
    eventId: 1,
    eventName: 'Event #1',
    eventType: 'lighpink',
    eventShortDescription: 'This is event #1',
    createdAt: new Date(2012,0,2),
    order: 8,
    attendies: []
  },
  {
    eventId: 2,
    eventName: 'Event #2',
    eventType: 'lightblue',
    eventShortDescription: 'This is event #2',
    createdAt: new Date(2012,1,2),
    order: 3,

  },
  {
    eventId: 3,
    eventName: 'Event #3',
    eventType: 'lightblue',
    eventShortDescription: 'This is event #3',
    createdAt: new Date(2012,2,2),
    order: 4
  },
  {
    eventId: 4,
    eventName: 'Event #4',
    eventType: 'lightgreen',
    eventShortDescription: 'This is event #4',
    createdAt: new Date(2012,2,2),
    order: 1
  },
  {
    eventId: 5,
    eventName: 'Event #5',
    eventType: 'lightblue',
    eventShortDescription: 'This is event #5',
    createdAt: new Date(2012,3,2),
    order: 2
  },
  {
    eventId: 6,
    eventName: 'Event #6',
    eventType: 'lightgrey',
    eventShortDescription: 'This is event #6',
    createdAt: new Date(2012,3,2),
    order: 1
  },
  {
    eventId: 7,
    eventName: 'Event #7',
    eventType: 'lightgrey',
    eventShortDescription: 'This is event #7',
    createdAt: new Date(2012,3,2),
    order: 3
  },
  {
    eventId: 8,
    eventName: 'Event #7',
    eventType: 'lightgrey',
    eventShortDescription: 'This is event #7',
    createdAt: new Date(2012,1,10),
    order: 4
  },
]

var links = [
  {
    source: 1,
    target: 2,
  },
  {
    source: 2,
    target: 3,
  },
  {
    source: 3,
    target: 4,
  },
  {
    source: 1,
    target: 7
  },
  {
    source: 1,
    target: 3,
  },
  {
    source: 3,
    target: 6,
  },
  {
    source: 8,
    target: 3,
  }
]
