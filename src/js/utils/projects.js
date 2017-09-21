import { createFactory } from 'react'

import Grup from '../projects/Grup'
import OffshoreClothing from '../projects/OffshoreClothing'
import Opus from '../projects/Opus'
import Tempest from '../projects/Tempest'
import Pollarity from '../projects/Pollarity'

export default [
  {
    description:
      'Strawpolls #1 competitor.',
    duration: '2017-Current',
    name: 'Pollarity',
    logo: 'img/grup/logo.svg',
    loadComponent: createFactory(Pollarity),
    order: 0,
    properties: { className: 'large opf-size fadeIn d-2 ' },
    slug: 'pollarity',
    role: 'Creator',
    scope: 'PWA, , Modern Design',
    stack: 'React, React-Apollo, Graph.cool',
    website: 'https://pollarity.cool',
  },
  {
    description:
      `A delightfully (work in progress) retro-styled combination
       of HackerNews and Reddit. Temporarily Abonadoned.`,
    duration: '2017-Current',
    name: 'Grup',
    logo: 'img/grup/logo.svg',
    loadComponent: createFactory(Grup),
    order: 1,
    properties: null,
    slug: 'grup',
    role: 'Creator',
    scope: 'PWA, Brutalist Design',
    stack: 'Express, Pug, MongoDB',
    website: 'https://grup.chat',
  },
  {
    description:
      'An epic one-summer-long exclusive Street Wear Company',
    duration: '2016-2016',
    name: 'Offshore Clothing',
    logo: 'img/grup/logo.svg',
    loadComponent: createFactory(OffshoreClothing),
    order: 2,
    properties: null,
    slug: 'offshore',
    role: 'Creator',
    scope: 'Web, E-Commerce, Clothing, Mordern Design',
    stack: 'JavaScript, HTML, CSS',
    website: 'http://offshore.kysley.com',
  },
  {
    description:
      `In Early 2017 I challenged myself to create something more.`,
    duration: 'e2017-e2017',
    name: 'Opus.',
    logo: 'img/grup/logo.svg',
    loadComponent: createFactory(Opus),
    order: 3,
    properties: null,
    slug: 'opus',
    role: 'Creator',
    scope: 'Web, E-Commerce, Clothing, Mordern Design',
    stack: 'JavaScript, HTML, CSS',
    website: 'http://opus.kysley.com',
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
  },
  {
    description:
      'My brutalist portfolio, with <3',
    duration: '2017-Current',
    name: 'evan.works',
    logo: require('img/tempest/feature-large.jpg'),
    loadComponent: createFactory(Tempest),
    order: 6,
    properties: { className: 'large opf-size ' },
    slug: 'evanworks',
    role: 'Creator',
    scope: 'Web, Brutalist design',
    stack: 'React, Express',
    website: 'http://evan.works',
  },
]
export const moreProjects = [
  {
    img: 'crncy',
    href: 'http://kysley.com/crncy',
  },
  {
    img: 'notes',
    href: 'https://kysley.com/notes',
  },
  {
    img: 'red&white',
    href: 'http://kysley.com/redandwhite/index.html',
  },
  {
    img: 'venttttttttttttt',
    href: 'http://grup.chat/vent',
  },
  {
    img: 'colors',
    href: 'https://kysley.com/colors',
  },
  {
    img: 'cl0ck',
    href: 'http://kysley.com/clock',
  },
  {
    img: 'moviedb',
    href: 'http://kysley.com/movie',
  },
  {
    img: 'rgb/hex',
    href: 'http://kysley.com/rgbhex',
  },
]
