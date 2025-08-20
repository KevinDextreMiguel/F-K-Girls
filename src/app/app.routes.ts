import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './components/products/products';
import { Cart } from './components/cart/cart';
import { Oferta } from './components/oferta/oferta';

export const routes: Routes = [
    //ruta que carga por defecto
    {path: '',component:Home},

    {path:'productos',component:Products},
    {path:'cart',component:Cart},
    {path:'oferta',component:Oferta},
    
    //si la ruta no exista, redireccionar a la raìz
    {path:'**',redirectTo:''},
];
