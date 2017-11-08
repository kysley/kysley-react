# React version of kysley.com

##  (also contains past projects in /server/ hence the massive amount of html :unamused:)

### Package highlights:
- react
- react-router
- lost postcss grid

## Install
```bash
$ yarn install
```

## Run/Develop
```bash
yarn dev
# => view on http://localhost:8080
```

## Hosting
kysley-react is hosted on DigitalOcean, in a Ubuntu(16.04)-Node(8.7.0) droplet. The process is ran under pm2 - this is used for monitoring performance as well as automatic crash recovery (even though it _shouldn't_ crash).


## Build
```bash
yarn build
# => creates a well-minified build of kysley-react ready to be hosted/deployed
```

#### Similar
Check out [Gavin Anthony's](https://github.com/gavinanthony/gavinanthony.com) work, his source inspired me to create a react-based portfolio as well as assisting in project structure and application logic! :tada: :tada:
