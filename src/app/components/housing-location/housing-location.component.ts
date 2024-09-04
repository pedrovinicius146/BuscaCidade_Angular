import { Component } from '@angular/core';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  id!: number;
  nome!: string;
  cidade!: string;
  estado!: string;
  foto!: string;
  unidades_disponiveis!: number;
  wifi!: boolean;
  lavanderia!: boolean;
}
