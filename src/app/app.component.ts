import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { NavComponent } from "./components/nav/nav.component";

@Component({
  selector: "app-root",
  imports: [MatSlideToggleModule, NavComponent],
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "project";
}
