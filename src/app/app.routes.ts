import { Routes } from "@angular/router";
import { CallbackComponent } from "./pages/callback/callback.component";
import { HomeComponent } from "./pages/home/home.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "callback", component: CallbackComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "**", redirectTo: "" },
];
