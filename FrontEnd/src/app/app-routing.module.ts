import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarTarefaComponent } from './components/cadastrar-tarefa/cadastrar-tarefa.component';
import { ListarTarefasComponent } from './components/listar-tarefas/listar-tarefas.component';

const routes: Routes = [
  {
    path: "tarefa/cadastrar",
    component: CadastrarTarefaComponent
  },
  {
    path: "tarefa/listar",
    component: ListarTarefasComponent
  },
  {
    path: "",
    component: ListarTarefasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
