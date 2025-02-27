import { Routes } from "@angular/router";
import { CallbackComponent } from "./pages/callback/callback.component";
import { HomeComponent } from "./pages/home/home.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "callback", component: CallbackComponent },
  { path: "**", redirectTo: "" },
];
