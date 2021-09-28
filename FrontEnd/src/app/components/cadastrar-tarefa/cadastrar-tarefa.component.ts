import { Tarefa } from './../../models/Tarefa';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.scss']
})
export class CadastrarTarefaComponent implements OnInit {
  nome!: string;
  descricao!: string;
  importancia!: string;
  local!: string;
  quando!: string;

  constructor(private router: Router, private service: TarefaService) {}

  ngOnInit(): void {}

  onCreate(): void{
    let tarefa: Tarefa = {
      nome: this.nome,
      descricao: this.descricao,
      importancia: this.importancia,
      local: this.local,
      quando: this.quando
    };
    this.service.create(tarefa).subscribe((tarefa)=>{
      this.router.navigate(["/tarefa/listar"]);
    });
  }
}
