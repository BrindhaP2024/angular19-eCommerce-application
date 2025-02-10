// import { Component, OnInit } from "@angular/core";
// import { CommonModule } from "@angular/common";
// import { FormsModule } from "@angular/forms";
// import { trigger, transition, style, animate } from "@angular/animations";
// import { product } from "../../../../data-type";
// import { ProductService } from "../../services/.service";

// @Component({
//   selector: "app-productpage",
//   templateUrl: "./productpage.component.html",
//   styleUrls: ["./productpage.component.css"],
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   animations: [
//     trigger("slideAnimation", [
//       transition(":enter", [
//         style({ opacity: 0, transform: "translateX(100%)" }),
//         animate("500ms ease-out", style({ opacity: 1, transform: "translateX(0)" }))
//       ]),
//       transition(":leave", [
//         animate("500ms ease-in", style({ opacity: 0, transform: "translateX(-100%)" }))
//       ])
//     ]),
//     trigger("modalAnimation", [
//       transition(":enter", [
//         style({ opacity: 0 }),
//         animate("300ms ease-out", style({ opacity: 1 }))
//       ]),
//       transition(":leave", [
//         animate("300ms ease-in", style({ opacity: 0 }))
//       ])
//     ])
//   ]
// })
// export class ProductpageComponent implements OnInit {
// featuredProducts() {
// throw new Error('Method not implemented.');
// }
// navigateToProduct(arg0: any) {
// throw new Error('Method not implemented.');
// }
// isLoading() {
// throw new Error('Method not implemented.');
// }
// error() {
// throw new Error('Method not implemented.');
// }
// retryLoading() {
// throw new Error('Method not implemented.');
// }
//   popularProducts:undefined|product[];
//   trendyProducts:undefined | product[];
//    constructor(private product:ProductService) {}

//    ngOnInit(): void {
//      this.product.popularProducts().subscribe((data)=>{
//        this.popularProducts=data;
//      })

//      this.product.trendyProducts().subscribe((data: product[] | undefined)=>{
//        this.trendyProducts=data;
//      })
// }
// }
