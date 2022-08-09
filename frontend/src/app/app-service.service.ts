import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor() { }
  productDetails = [
    {
      id:1,
      productName:"LG LED HD TV",
      productDetails:"32'' Class 1080p LED TV with Smart TV (31.5'' diagonally)",
      productPrice:10000,
      productImg:"https://www.lg.com/us/images/tvs/32ln5700/gallery/large01.jpg"
     
    },
    {
      id:2,
      productName:"LG Refrigerator",
      productDetails:"Refrigerator with Smart Inverter Compressor in Scarlet Charm Color",
      productPrice:20000,
      productImg:"https://www.lg.com/in/images/refrigerators/md06235596/gallery/GL-D241ASCY-Refrigerators-Front-View-DZ-01-v.jpg"
    },
    {
      id:3,
      productName:"Apple iPhone 13 (256GB) - Pink",
      productDetails:"iPhone 13 Pro. Super Retina XDR display with ProMotion; 15.4 cm / 6.1‑inch (diagonal)",
      productPrice:70000,
      productImg:"https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg"
    },
    {
      id:4,
      productName:"Samsung Galaxy Watch4",
      productDetails:"Reach for a healthier you in the galaxy watch4 with Wear OS, featuring fitness tracking.",
      productPrice:10000,
      productImg:"https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-watch4-398879-sm-r870nzgainu-481111378?$730_584_PNG$"
    },
    {
      id:5,
      productName:"HP Laptop",
      productDetails:"HP Core i3 11th Gen(8 GB/512 GB SSD /Windows 10)Thin & Light(15.6 inch,Silver,)",
      productPrice:45000,
      productImg:"https://media.istockphoto.com/photos/computer-laptop-with-broken-screen-isolated-on-white-background-3d-picture-id1036926218?k=20&m=1036926218&s=170667a&w=0&h=O_tTpob_Z-EPoh-St1iJiWVHplJR1BJrEaPfqu2FPMA="
    },
    {
      id:6,
      productName:"Nikon D3100 DSLR Camera ",
      productDetails:"Nikon D3100 DSLR Camera with 18-55mm f/3.5-5.6 Auto Focus-S Nikkor Zoom Lens",
      productPrice:45000,
      productImg:"https://d2xamzlzrdbdbn.cloudfront.net/products/977c4d06-48fe-484c-bf55-23fdcd5ee165_416x416.jpg"
    }
  ];
  

 

}
