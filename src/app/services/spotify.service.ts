import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {

   }
getQuery( query: string ) {

  const url = `https://api.spotify.com/v1/${ query }`;

  const headers = new HttpHeaders({
   'Authorization': 'Bearer BQAlnQYteEDk7Vkl8GphnnYIKrk0cVQnDKFpSwhHZveujvljuTkhOBRck0q4Nr8L5SMCasv7Mp8NJPX4Wk0'
   });
  return this.http.get(url, { headers });
}


getNewRelease() {

  // const headers = new HttpHeaders({
  //   'Authorization': 'Bearer BQCvKBxtdCP2jPUili6SfZGMb04_S2oYe-bm4UrfUjEWGj4dgqs4QQzHYONQDP0mK2cAspNobK3ZuHeuRzQ'
  // });

  return this.getQuery('browse/new-releases?limit=30').pipe( map( data => data['albums'].items ));

  // return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
  //             .pipe( map( data => data['albums'].items ));
}

getArtistas(termino: string) {

  // const headers = new HttpHeaders({
  //   'Authorization': 'Bearer BQCvKBxtdCP2jPUili6SfZGMb04_S2oYe-bm4UrfUjEWGj4dgqs4QQzHYONQDP0mK2cAspNobK3ZuHeuRzQ'
  // });

  return this.getQuery(`search?q=${ termino }&type=artist&limit=20`).pipe( map( data => data['artists'].items));

//   return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=20`, { headers })
//              .pipe( map( data => {
//                return data['artists'].items;
//              }));
// }
}

getArtista(id: string) {

  return this.getQuery(`artists/${ id }`);
  // .pipe( map( data => data['artists'].items));
}

}
