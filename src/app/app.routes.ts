import { Routes } from "@angular/router";
import { CallbackComponent } from "./pages/callback/callback.component";
import { HomeComponent } from "./pages/home/home.component";

export const routes: Routes = [
  { path: "", component: HomeComponent, outlet: "main" },
  { path: "callback", component: CallbackComponent, outlet: "main" },
  { path: "**", redirectTo: "" },
];
