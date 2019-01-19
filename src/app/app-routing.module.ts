import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './include/menu/menu.component';
import { RodapeComponent } from './include/rodape/rodape.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { CadastrarComponent } from './paginas/cadastrar/cadastrar.component';
import { EntrarComponent } from './paginas/entrar/entrar.component';

const routes: Routes = [
	{ path: 'menu', component: MenuComponent },
	{ path: 'rodape', component: RodapeComponent },
	{ path: 'inicio', component: InicioComponent },
	{ path: 'cadastrar', component: CadastrarComponent },
	{ path: 'entrar', component: EntrarComponent },
	{ path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
