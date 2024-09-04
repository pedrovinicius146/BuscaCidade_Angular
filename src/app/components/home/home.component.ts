// home.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  show: boolean = false;
  cidadeBusca: string = '';
  resultadoBusca: string | null = null;

  housingLocation = {
    id: 99,
    nome: 'test',
    cidade: 'goiana',
    estado: 'pe',
    unidades_disponiveis: 1,
    wifi: false,
    lavanderia: false,
    foto: 'assets/baixados.png',
  };

  buscarCidade(): void {
    if (this.cidadeBusca.toLowerCase() === this.housingLocation.cidade.toLowerCase()) {
      this.resultadoBusca = `
        ID: ${this.housingLocation.id}, 
        Nome: ${this.housingLocation.nome}, 
        Estado: ${this.housingLocation.estado}, 
        Unidades Disponíveis: ${this.housingLocation.unidades_disponiveis}, 
        Lavanderia: ${this.housingLocation.lavanderia}, 
        
      `;
    } else {
      this.resultadoBusca = 'Cidade não encontrada';
    }
  }
}
