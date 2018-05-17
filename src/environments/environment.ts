// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  googleMapsKey: 'AIzaSyB693OGyXpXPdwHgeQY03CH_9_okwjReRc',
  firebaseConfig: {
    apiKey: 'AIzaSyBmV8LfrmQ4is2YtuO2x_QFYW1qVQxC9kM',
    authDomain: 'smart-traffic-light-system.firebaseapp.com',
    databaseURL: 'https://smart-traffic-light-system.firebaseio.com',
    projectId: 'smart-traffic-light-system',
    storageBucket: 'smart-traffic-light-system.appspot.com',
    messagingSenderId: '996390230137'
  }
};

