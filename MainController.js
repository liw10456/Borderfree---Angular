app.controller('MainController', ['$scope',function($scope){
  $scope.products = 
[ 
  { 
    id:1,
    name: '"Elise" Colorblock Sweater Dress', 
    price: 278,
    brand: 'Marc Jacobs',  
    cover: 'images/p-one.png',
    merchant:'Nordstrom',
    likes: 0,
    dislikes:0,
    salePrice: 164.02,
    editorsPick: false,
    editor: 'images/icon_editor.png', 
    sale: true,
    saleImage: 'images/icon_sale.png', 
    url: '/',
    brand_link:'http://shop.nordstrom.com/'
  }, 

  { 
    id:2,
    name: 'Genie Sweetheart Cutout', 
    price: 698, 
    brand: 'Alice + Olivia',
    cover: 'images/p2.jpg',
    merchant:'Bloomingdales',
    likes: 0,
    dislikes:0,
    salePrice: 488.60,
    editorsPick: false, 
    editor: 'images/icon_editor.png', 
    sale: true,
    saleImage: 'images/icon_sale.png', 
    url: '/',
    brand_link:'http://www.bloomingdales.com'
  },

   { 
    id:3,
    name: 'Chiffon Halter Maxi Dress', 
    price: 158,
    brand: 'Eliza J', 
    cover: 'images/p3.jpg',
    merchant:'Nordstrom',
    likes: 0,
    dislikes:0,
    salePrice: 0,
    editorsPick: true, 
    editor: 'images/icon_editor.png', 
    sale: false,
    saleImage: 'images/icon_sale.png', 
    url: '/',
    brand_link:'http://shop.nordstrom.com/' 
  },

   { 
    id:4,
    name: 'Short-Sleeve High-Neck Eyelet', 
    price: 198,
    brand: 'French Connection', 
    cover: 'images/p4.jpg',
    merchant:'Macys',
    likes: 0,
    dislikes:0,
    salePrice: 149.99,
    editorsPick: true, 
    editor: 'images/icon_editor.png', 
    sale: true,
    saleImage: 'images/icon_sale.png', 
    url: '/',
    brand_link:'http://www.macys.com/'
  },

   { 
    id:5,
    name: 'Convertible Sundress - Regular', 
    price: 138,
    brand: 'Garnet Hill', 
    cover: 'images/p5.jpg',
    merchant:'Garnet Hill',
    likes: 0,
    dislikes:0,
    salePrice: 99,
    editorsPick: false, 
    editor: 'images/icon_editor.png', 
    sale: true,
    saleImage: 'images/icon_sale.png', 
    url: '/',
    brand_link:'http://www.garnethill.com/'
  },

   { 
    id:6,
    name: 'Perry Ellis Cotton Stripe Vest', 
    price: 79.5,
    brand: 'Perry Ellis', 
    cover: 'images/p6.jpg',
    merchant:'Neiman Marcus',
    likes: 0,
    dislikes:0,
    salePrice: 0,
    editorsPick: false, 
    editor: 'images/icon_editor.png', 
    sale: false,
    saleImage: 'images/icon_sale.png', 
    url: '/',
    brand_link:'http://www.neimanmarcus.com/'
  },

   { 
    id:7,
    name: 'Medium Stanthorpe Shoulder Bag', 
    price: 398,
    brand: 'Neiman Marcus', 
    cover: 'images/p7.jpg',
    merchant:'Perry Ellis',
    likes: 0,
    dislikes:0,
    salePrice: 266,
    editorsPick: false,
    editor: 'images/icon_editor.png',  
    sale: true,
    saleImage: 'images/icon_sale.png', 
    url: '/',
    brand_link:'http://www.perryellis.com/'
  },

   {
    id:8,
    name: 'Robert Talbott Linen Sportcoat', 
    price: 495,
    brand: 'Robert Talbott', 
    cover: 'images/p8.jpg',
    merchant:'Perry Ellis',
    likes: 0,
    dislikes:0,
    salePrice: 247.49,
    editorsPick: false, 
    editor: 'images/icon_editor.png', 
    sale: true,
    saleImage: 'images/icon_sale.png', 
    url: '/',
    brand_link:'http://www.perryellis.com/'
  }  

];
// likes 
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};

//dislikes	
  $scope.minusOne = function(index) { 
  	$scope.products[index].dislikes += 1; 
	};

// //lightbox
//   $scope.lightbox = function(event) { 
//     event.target.style.border = "1px solid #e2e2e2";
//     this.body.style.backgroundColor="black";
//      console.log(event);

//     };


}

]); 
