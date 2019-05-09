import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];
  loading: Boolean;

  constructor( private spotify: SpotifyService,
               private router: Router ) { }

  Buscar(termino: string) {
    this.loading = true;

    this.spotify.getArtistas(termino)
    .subscribe( (data: any) => {
      console.log(data);
      this.artistas = data;
      this.loading = false;
    });
  }

  verArtista( artista ) {
    let artistaId: String;

    if (artista.type === 'artist') {
      artistaId = artista.id;
      // console.log(artistaId);
    }

    this.router.navigate(['artist/', artistaId]);
 }

}
