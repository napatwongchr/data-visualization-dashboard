export const nodes = [
  {
    nodeId: 1,
    nodeName: 'Node #1',
    nodeType: 'lighpink',
    nodeShortDescription: 'This is node #1',
    createdAt: new Date(2012,0,2),
    order: 8,
    attendies: []
  },
  {
    nodeId: 2,
    nodeName: 'Node #2',
    nodeType: 'lightblue',
    nodeShortDescription: 'This is node #2',
    createdAt: new Date(2012,1,2),
    order: 3,

  },
  {
    nodeId: 3,
    nodeName: 'Node #3',
    nodeType: 'lightblue',
    nodeShortDescription: 'This is node #3',
    createdAt: new Date(2012,2,2),
    order: 4
  },
  {
    nodeId: 4,
    nodeName: 'Node #4',
    nodeType: 'lightgreen',
    nodeShortDescription: 'This is node #4',
    createdAt: new Date(2012,2,2),
    order: 1
  },
  {
    nodeId: 5,
    nodeName: 'Node #5',
    nodeType: 'lightblue',
    nodeShortDescription: 'This is node #5',
    createdAt: new Date(2012,3,2),
    order: 2
  },
  {
    nodeId: 6,
    nodeName: 'Node #6',
    nodeType: 'lightgrey',
    nodeShortDescription: 'This is node #6',
    createdAt: new Date(2012,3,2),
    order: 1
  },
  {
    nodeId: 7,
    nodeName: 'Node #7',
    nodeType: 'lightgrey',
    nodeShortDescription: 'This is node #7',
    createdAt: new Date(2012,3,2),
    order: 3
  },
  {
    nodeId: 8,
    nodeName: 'Node #7',
    nodeType: 'lightgrey',
    nodeShortDescription: 'This is node #7',
    createdAt: new Date(2012,1,10),
    order: 4
  },
]

export const links = [
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
