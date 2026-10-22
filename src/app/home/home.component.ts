
import { Component } from '@angular/core';
import { MetaServiceService } from '../services/meta-services.service';
import { Meta } from '../models/meta.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  metas: Meta[] = [];
  nuevaMeta: string = '';

  constructor(public metaService: MetaServiceService) {
    this.metaService.obtenerMetas().subscribe((data: Meta[]) => {
      this.metas = data;
      console.log(this.metas);
    });
  }

  agregarMeta() {
    if (this.nuevaMeta.trim()) {
      this.metaService.agregarMeta(this.nuevaMeta).then(() => {
        this.nuevaMeta = '';
      });
    }
  }

  eliminarMeta(id: string) {
    this.metaService.eliminarMeta(id);
  }
}
