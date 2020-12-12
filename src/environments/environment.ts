// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url: 'http://localhost:5000/api',
  api_client_token: 'a3a3d109873e7e98971639889bc0b7f2ffcd459b17397af6c73596b91b5faa89',
  mqtt: {
    hostname: 'localhost',
    port: 9001,
    path: '',
    username: 'miagiUI',
    password: '2'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
