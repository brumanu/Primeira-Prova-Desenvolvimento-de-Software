import { TarefaService } from 'src/app/services/tarefa.service';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/Tarefa';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.scss']
})
export class ListarTarefasComponent implements OnInit {
  tarefas: Tarefa[] = [];
  displayedColumns = ['id','nome', 'descricao', 'importancia', 'local', 'quando', 'criadoEm']

  constructor(private service: TarefaService) {}

  ngOnInit(): void {
    this.service.list().subscribe((tarefas) =>{
      this.tarefas = tarefas;
    })
  }
}
