import { AppRoutingModule } from './../app-router.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeathSquareComponent } from './death-square/death-square.component';
import { TurretComponent } from './turret/turret.component';
import { LaserCannonComponent } from './laser-cannon/laser-cannon.component';


@NgModule({
  declarations: [
    DeathSquareComponent,
    TurretComponent, 
    LaserCannonComponent,
   ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
   exports: [
    DeathSquareComponent,
    TurretComponent, 
    LaserCannonComponent,
   ]
})
export class InternalDefencesModule { }
