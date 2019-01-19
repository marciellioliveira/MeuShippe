import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './include/menu/menu.component';
import { RodapeComponent } from './include/rodape/rodape.component';

const routes: Routes = [
	{ path: 'menu', component: MenuComponent },
	{ path: 'rodape', component: RodapeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
