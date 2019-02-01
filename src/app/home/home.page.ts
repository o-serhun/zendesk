import { Component } from "@angular/core";
import { zafClient } from "src/main";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  private ticket: any = null;

  async ngOnInit() {
    this.ticket = (await zafClient.get(["ticket"])).ticket;
    console.warn(this.ticket);
  }
}
