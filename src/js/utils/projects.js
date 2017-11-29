import { createFactory } from 'react'

import Grup from '../projects/Grup'
import OffshoreClothing from '../projects/OffshoreClothing'
import Opus from '../projects/Opus'
import Tempest from '../projects/Tempest'
import Pollarity from '../projects/Pollarity'
import Evanworks from '../projects/Evanworks'

export default [
  {
    description:
      'Strawpolls #1 competitor.',
    duration: '2017-Current',
    name: 'Pollarity',
    logo: require('img/pollarity/feature-large.jpg'),
    loadComponent: createFactory(Pollarity),
    order: 0,
    properties: { className: 'large opf-size fadeIn d-2 ' },
    slug: 'pollarity',
    role: 'Creator',
    scope: 'PWA, Modern Design',
    stack: 'React, React-Apollo, Graph.cool',
    website: 'http://pollarity.cool',
    github: 'https://github.com/kysley/pollarity.cool',
  },
  {
    description:
      `A delightfully (work in progress) retro-styled combination
       of HackerNews and Reddit. Temporarily Abandoned.`,
    duration: '2017-Current',
    name: 'Grup',
    logo: require('img/grup/feature-large.jpg'),
    loadComponent: createFactory(Grup),
    order: 1,
    properties: null,
    slug: 'grup',
    role: 'Creator',
    scope: 'Web App, Brutalist Design',
    stack: 'Express, Pug, MongoDB',
    website: 'http://grup.chat',
    github: 'https://github.com/kysley/grup',
  },
  {
    description:
      'An epic one-summer-long exclusive Street Wear Company',
    duration: '2016-2016',
    name: 'Offshore Clothing',
    logo: require('img/offshore/feature-large.jpg'),
    loadComponent: createFactory(OffshoreClothing),
    order: 2,
    properties: null,
    slug: 'offshore',
    role: 'Creator',
    scope: 'Web, E-Commerce, Clothing, Mordern Design',
    stack: 'JavaScript, HTML, CSS',
    website: 'http://kysley.com/offshoreclothing',
    github: null,
  },
  {
    description:
      'In Early 2017 I challenged myself to create something more.',
    duration: 'e2017-e2017',
    name: 'Opus.',
    logo: require('img/opus/feature-large.jpg'),
    loadComponent: createFactory(Opus),
    order: 3,
    properties: null,
    slug: 'opus',
    role: 'Creator',
    scope: 'Web, E-Commerce, Clothing, Mordern Design',
    stack: 'JavaScript, HTML, CSS',
    website: 'http://kysley.com/opus',
    github: 'https://github.com/kysley/kysley-opus',
  },
  {
    description:
      'A simple weather solution made to see todays forcast at a glance..',
    duration: '2014-2015',
    name: 'Tempest',
    logo: require('img/tempest/feature-large.jpg'),
    loadComponent: createFactory(Tempest),
    order: 5,
    properties: null,
    slug: 'tempest',
    role: 'Creator',
    scope: 'Web, Design',
    stack: 'JavaScript, HTML, CSS',
    website: 'http://kysley.com/tempest',
    github: null,
  },
  {
    description:
      'My brutalist portfolio, with <3',
    duration: '2017-Current',
    name: 'evan.works',
    logo: require('img/evanworks/feature-large.jpg'),
    loadComponent: createFactory(Evanworks),
    order: 6,
    properties: { className: 'large opf-size ' },
    slug: 'evanworks',
    role: 'Creator',
    scope: 'Web, Brutalist design',
    stack: 'React, Express',
    website: 'http://evan.works',
    github: 'https://github.com/kysley/evan.works',
  },
]
export const moreProjects = [
  {
    name: 'quick-maths',
    href: 'https://github.com/kysley/quick-maths',
  },
  {
    name: 'minn',
    href: 'https://github.com/kysley/minn',
  },
  {
    name: 'minn-cli',
    href: 'https://github.com/kysley/minn-cli',
  },
  {
    name: 'keepsake',
    href: 'http://kysley.com/keepsake',
  },
  {
    name: 'white&red',
    href: 'http://kysley.com/whiteandred',
  },
  {
    name: 'venttttttttttttt',
    href: 'http://grup.chat/vent',
  },
  {
    name: 'cl0ck',
    href: 'http://kysley.com/clock',
  },
  {
    name: 'rgb/hex',
    href: 'http://kysley.com/rgbhex',
  },
  {
    name: 'retrofitcss',
    href: 'https://github.com/kysley/retrofitcss',
  },
  {
    name: 'mmbuddy',
    href: 'https://github.com/kysley/mmbuddy',
  },
]
