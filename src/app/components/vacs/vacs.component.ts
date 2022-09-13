import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Cuentas} from "../../Cuentas";
import {CUENTAS} from "../../mock-cuentas";
import {CuentasService} from "../../service/cuentas.service"


@Component({
  selector: 'app-vacs',
  templateUrl: './vacs.component.html',
  styleUrls: ['./vacs.component.css']
})
export class VacsComponent implements OnInit {
  cuentas: Cuentas[] = CUENTAS;
  url:String = 'http://localhost:8080/user/'

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  obtenerDatos():Observable<any>{
    return this.httpClient.get<any>(this.url+"persona")
  }
}
