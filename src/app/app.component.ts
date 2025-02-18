import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  imports: [FormsModule, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "ng-signals";

  quantity = signal(1);
  qtyAvailable = signal([1, 2, 3, 4, 5, 6]);

  selectedProduct = signal<Product>({
    id: 5,
    name: "Hammer",
    price: 12,
  });
  
  constructor() {
    console.log("In Constructor:", this.quantity());
  }

  onQuantitySelected(qty: number) {
    this.quantity.set(qty);
  }
}

export interface Product {
  id: number;
  name: string;
  price: number;
}
