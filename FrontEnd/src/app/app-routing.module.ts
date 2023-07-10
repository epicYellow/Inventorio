import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CraftingComponent } from './components/pages/crafting/crafting.component';
import { HomeComponent } from './components/pages/home/home.component';
import { InventoryComponent } from './components/pages/inventory/inventory.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MapComponent } from './components/pages/map/map.component';

//wildcard (make sure its last route)
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'Crafting/:searchTerm',
    component: CraftingComponent,
  },
  {
    path: 'Crafting',
    component: CraftingComponent,
  },
  {
    path: 'Inventory/search/:searchTerm',
    component: InventoryComponent,
  },
  {
    path: 'Inventory',
    component: InventoryComponent,
  },
  {
    path: 'Map',
    component: MapComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
