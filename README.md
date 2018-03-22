# COMEM+ Citizen Engagement - By Florian & Carla

## Installation

Clone this project, then:

```bash
https://github.com/schallus/appmob.git
cd appmob
npm install
cordova prepare
```

You must also put the configuration file in place the first time:

```bash
cp src/app/config.sample.ts src/app/config.ts
```

Fill in appropriate values in `src/app/config.ts`.



## Usage

Run in development mode in the browser with:

```bash
cd appmob
ionic serve
```

Run on android phone:

```bash
cd appmob
npm run android
```

Run on android phone with livereload:

```bash
cd appmob
npm run android-live
```
