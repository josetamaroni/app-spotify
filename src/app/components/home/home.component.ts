import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

nuevasCanciones: any[] = [];
loading: Boolean;

  constructor( private spotify: SpotifyService,
               private router: Router) {
    this.loading = true;
    this.spotify.getNewRelease().subscribe((data: any) => {
      // console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
   });
  }

  verArtista( cancion: any ) {

    let artistaId: String;

    if (cancion.type === 'album') {
      artistaId = cancion.artists[0].id;
      // console.log(artistaId);
    } else {
      artistaId = cancion.id;
      // console.log(artistaId);
    }

    this.router.navigate(['artist/', artistaId]);
  }
}
