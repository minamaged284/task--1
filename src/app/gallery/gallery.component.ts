import { Component } from '@angular/core';

interface product {
  title:string;
  description:string;
  image:string;
  price:number;
}




@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
products : product[] = [
  {
  
  title: "Fjallraven - Foldsack No. 1 Backpack",
  price: 109.95,
  description: "Your perfect pack for everyday use and walks in the forest.",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  
  },
  {
  
  title: "Slim Fit T-Shirts ",
  price: 22.3,
  description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, ",
  image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  
  
  
  }
  ,
  {
  
  title: "Mens Cotton Jacket",
  price: 55.99,
  description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking,",
  image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  
  
  
  }
  ,
  {
  
  title: "Mens Casual Slim Fit",
  price: 15.99,
  description: "The color could be slightly different between on the screen and in practice.",
  image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  
  
  
  }
  ,
  {
  
  title: "Chain Bracelet",
  price: 695,
  description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl.",
  image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  
  
  
  }
  ,
  {
  
  title: "Solid Gold Petite Micropave ",
  price: 168,
  description: "Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. ",
  image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  
  
  
  }
  ,
  {
  
  title: "White Gold Plated Princess",
  price: 9.99,
  description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. ",
  image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  
  
  
  }
  ,
  {
  
  title: "Pierced Owl Rose Gold Plated ",
  price: 10.99,
  description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
  image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
  
  
  
  }
  ,
  {
  
  title: "External Hard Drive - USB 3.0 ",
  price: 64,
  description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity.",
  image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  
  
  
  }
  ,
  {
  
  title: "1TB Internal SSD",
  price: 109,
  description: "Easy upgrade for faster boot up, shutdown, application load and response Boosts burst write performance.",
  image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
  
  
  
  }
  ,
  {
  
  title: "256GB SSD ",
  price: 109,
  description: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup.",
  image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
  
  
  
  }
  ,
  {
  
  title: "WD 4TB Gaming Drive",
  price: 114,
  description: "Expand your PS4 gaming experience, Play anywhere Fast and easy.",
  image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
  
  
  
  }
  ,
  {
  
  title: "Acer SB220Q",
  price: 599,
  description: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh" ,
  image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
  
  }
  ,
  {
  
  title: "Samsung 49-Inch CHG90 144Hz",
  price: 999.99,
  description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY.",
  image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
  
  
  
  }
  ,
  {
  
  title: "Winter Coats",
  price: 56.99,
  description: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece.",
  image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  
  
  
  }
  ,
  {
  
  title: "Moto Biker Jacket",
  price: 29.95,
  description: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front.",
  image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
  
  
  
  }
  ,
  {
  
  title: "Rain Jacket",
  price: 39.99,
  description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat.",
  image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
  
  
  
  }
  ,
  {
  
  title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
  price: 9.85,
  description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort",
  image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
  
  
  
  }
  ,
  {
  
  title: "Opna Women's Short Sleeve Moisture",
  price: 7.95,
  description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit",
  image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
  
  
  
  }
  ,
  {
  
  title: "DANVOUY Womens T Shirt Casual Cotton Short",
  price: 12.99,
  description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch.",
  image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
  
  
  
  }
  
  ]


}

