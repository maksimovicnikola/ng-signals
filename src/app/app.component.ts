import { CommonModule } from "@angular/common";
import { Component, computed, effect, signal } from "@angular/core";
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

  exPrice = computed(() => this.selectedProduct().price * this.quantity());
  color = computed(() => (this.exPrice() > 50 ? "green" : "blue"));

  constructor() {
    console.log("In Constructor: ", this.quantity());

    effect(() => console.log("In effect: ", this.quantity()));

    this.quantity.update((q) => q * 2);
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
