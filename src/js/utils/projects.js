import { createFactory } from 'react'

import Grup from '../projects/Grup'
import OffshoreClothing from '../projects/OffshoreClothing'
import Opus from '../projects/Opus'
import Tempest from '../projects/Tempest'

export default [
  {
    description:
      `A delightfully (work in progress) retro-styled combination
       of HackerNews and Reddit.`,
    duration: '2017-current',
    name: 'Grup',
    logo: 'img/grup/logo.svg',
    loadComponent: createFactory(Grup),
    order: 0,
    properties: { ClassName: 'grup' },
    slug: 'grup',
    role: 'Creator',
    scope: 'Web, Social Media',
    stack: 'Express, Pug, MongoDB, Design',
    website: 'https://grup.chat',
  },
  {
    description:
      `A one-summer exclusive Street Wear Company with prototypal
      navigation and page layout.`,
    duration: '2016-2016',
    name: 'Offshore Clothing',
    logo: 'img/grup/logo.svg',
    loadComponent: createFactory(OffshoreClothing),
    order: 1,
    properties: null,
    slug: 'offshore',
    role: 'Creator',
    scope: 'Web, E-Commerce, Clothing, Design',
    stack: 'JavaScript, HTML, CSS',
    website: 'http://offshore.kysley.com',
  },
  {
    description:
      `I challenged to make myself to take on a larger scoped portfolio,
      this is what I came up with.`,
    duration: '2017-2017',
    name: 'opus',
    logo: 'img/grup/logo.svg',
    loadComponent: createFactory(Opus),
    order: 2,
    properties: null,
    slug: 'opus',
    role: 'Creator',
    scope: 'Web, Portfolio, Design',
    stack: 'JavaScript, HTML, CSS',
    website: 'http://opus.kysley.com',
  },
  {
    description:
      'A simple weather solution made to see todays forcast at a glance..',
    duration: '2014-2017',
    name: 'Tempest',
    logo: 'img/Tempest/logo.svg',
    loadComponent: createFactory(Tempest),
    order: 3,
    properties: { ClassName: 'tempest' },
    slug: 'tempest',
    role: 'Creator',
    scope: 'Web, Design',
    stack: 'JavaScript, HTML, CSS',
    website: 'http://kysley.com/tempest',
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
