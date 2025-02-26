import { Component } from "@angular/core";
import { NavComponent } from "./components/nav/nav.component";

@Component({
  selector: "app-root",
  imports: [NavComponent],
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "project";
}
