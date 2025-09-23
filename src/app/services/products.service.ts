import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
    { 
      id: 1, 
      name: 'Ropa interior cacheteros (Jacky Form)', 
      price: 17.9,
      talla: 'S',
      tallas: ['S', 'M', 'L'],
      onSale: false,
      discountPercent: 0,
      variants: [
        { 
          color: 'Plomo', 
          hex: '#B0B0B0', 
          image: 'https://i.imgur.com/Vmm6ziO.jpg',
        },
        { 
          color: 'Rojo vino', 
          hex: '#482226', 
          image: 'https://i.imgur.com/OA6sLM8.jpg',
        },
        { 
          color: 'Rosa claro', 
          hex: '#fea1b8', 
          image: 'https://i.imgur.com/8B95Bz2.jpg',
        }
      ]
    },
    { 
      id: 2, 
      name: 'Ropa interior cacheteros (Jacky Form)', 
      price: 17.9,
      talla: 'S',
      tallas: ['S', 'M', 'L'],
      onSale: false,
      discountPercent: 0,
      variants: [
        { 
          color: 'Azul marino', 
          hex: '#123772', 
          image: 'https://i.imgur.com/thGeBkV.jpg',
        },
        { 
          color: 'Blanco', 
          hex: '#FFFFFF', 
          image: 'https://i.imgur.com/lKwn9SO.jpg',
        },
      ]
    },
    { 
      id: 3, 
      name: 'Ropa interior semihilo (Jacky Form)', 
      price: 18.9,
      talla: 'S',
      tallas: ['S', 'M', 'L'],
      onSale: false,
      discountPercent: 0,
      variants: [
        { 
          color: 'Vino tinto oscuro', 
          hex: '#790221', 
          image: 'https://i.imgur.com/ysytpqn.jpg',
        },
        { 
          color: 'Rojo coral', 
          hex: '#ea5c5f', 
          image: 'https://i.imgur.com/M0VAJZj.jpg',
        }
      ]
    },
    { 
      id: 4, 
      name: 'Ropa interior semihilo (Jacky Form)', 
      price: 18.9,
      talla: 'S',
      tallas: ['S', 'M', 'L'],
      onSale: false,
      discountPercent: 0,
      variants: [
        { 
          color: 'Negro', 
          hex: '#000000', 
          image: 'https://i.imgur.com/drkP6fS.jpg',
        },
        { 
          color: 'Amarillo vainilla', 
          hex: '#faeca3', 
          image: 'https://i.imgur.com/FHlceTR.jpg',
        }
      ]
    },
        { id: 5,
      name: 'Ropa interior bikini básico (Jacky Form)',
      price: 14.9,
      talla: 'S',
      tallas: ['S', 'M', 'L'],
      onSale: false,
      discountPercent: 0,
      variants: [
        { 
          color: 'Durazno suave', 
          hex: '#e8bf9d', 
          image: 'https://i.imgur.com/eZSZOE6.jpeg',
        },
        { 
          color: 'Blanco', 
          hex: '#ffffff', 
          image: 'https://i.imgur.com/4YjyODm.jpeg'
        },
        { 
          color: 'Beige rosado', 
          hex: '#d6ad97', 
          image: 'https://i.imgur.com/t1F66uM.jpeg',
        }
      ]
    },
    
    { id: 6,
      name: 'Ropa interior bikini básico (Jacky Form)',
      price: 14.9,
      talla: 'S',
      tallas: ['S', 'M', 'L'],
      onSale: false,
      discountPercent: 0,
      variants: [
        { 
          color: 'Gris cálido', 
          hex: '#716e6e', 
          image: 'https://i.imgur.com/NNaGFpg.jpeg',
        },
        { 
          color: 'Negro', 
          hex: '#000000', 
          image: 'https://i.imgur.com/ywQMm3U.jpeg'
        }
      ]
    },

    { id: 7,
      name: 'Ropa interior bikini básico (Jacky Form)',
      price: 14.9,
      talla: 'S',
      tallas: ['S', 'M', 'L'],
      onSale: false,
      discountPercent: 0,
      variants: [
        { 
          color: 'Rosa coral', 
          hex: '#fcb0a9', 
          image: 'https://i.imgur.com/odnQxY3.jpeg',
        },
        { 
          color: 'Rojo pasión', 
          hex: '#df0031', 
          image: 'https://i.imgur.com/ncpKIhn.jpeg'
        }
      ]
    },
    { id: 8,
      name: 'Ropa interior hilo encaje (Rosalinda)',
      price: 12.9,
      talla: 'S',
      tallas: ['S', 'M', 'L'],
      onSale: false,
      discountPercent: 0,
      variants: [
        { 
          color: 'Negro', 
          hex: '#000000', 
          image:'https://i.imgur.com/T1WUC0I.jpg'
        },
        { 
          color: 'Rojo intenso', 
          hex: '#d90204', 
          image:'https://i.imgur.com/PH2gspr.jpg'
        }
      ]
    },
     { id: 9,
      name: 'Ropa interior semihilo encaje adelante',
      price: 16.9,
      talla: 'S',
      tallas: ['S', 'M', 'L'],
      onSale: true,
      discountPercent: 10,
      variants: [
        { 
          color: 'Vino oscuro', 
          hex: '#221721', 
          image: 'https://i.imgur.com/C9MJfM4.jpg',
        },
        { 
          color: 'Rosa salmón claro', 
          hex: '#ed8981', 
          image: 'https://i.imgur.com/xiaET4S.jpg'
        },
        { 
          color: 'Rojo sangre', 
          hex: '#a41422', 
          image: 'https://i.imgur.com/cV2cLcW.jpg',
        },
        { 
          color: 'Rojo vivo', 
          hex: '#e50305', 
          image: 'https://i.imgur.com/MeKJubf.jpg',
        }
      ]
    },






    { id: 10,
      name: 'Brasier copa completa (Rose)',
      price: 28.9,
      talla: 'S',
      tallas: ['36', '38', '40','42'],
      onSale: false,
      discountPercent: 0,
      variants: [
        { 
          color: 'Rosa empolvado', 
          hex: '#e6a3ae', 
          image: 'https://i.imgur.com/AlWAUrc.jpg',
        },
        { 
          color: 'Amarillo durazno', 
          hex: '#fdd28f', 
          image: 'https://i.imgur.com/tc4F1eN.jpg'
        },
        { 
          color: 'Gris lavanda', 
          hex: '#9e9cac', 
          image: 'https://i.imgur.com/bguyIS1.jpg',
        }
      ]
    },


    { id: 11,
      name: 'Brasier latex media copa (Vi-Mas)',
      price: 27.9,
      talla: 'S',
      tallas: ['36', '38', '40','42'],
      onSale: false,
      discountPercent: 0,
      variants: [
        { 
          color: 'Azul lavanda', 
          hex: '#7f94c1', 
          image: 'https://i.imgur.com/sdCML0O.jpg'
        },
        { 
          color: 'Marrón rosado', 
          hex: '#a76b7b', 
          image: 'https://i.imgur.com/fIiIXro.jpg',
        }
      ]
    },

    { id: 12,
      name: 'Brasier copa completa (Vi-Mas)',
      price: 25.9,
      talla: 'S',
      tallas: ['36', '38', '40','42'],
      onSale: false,
      discountPercent: 0,
      variants: [
        { 
          color: 'Marrón dorado', 
          hex: '#917243', 
          image: 'https://i.imgur.com/n7vqude.jpg',
        }
      ]
    },

    { id: 13,
      name: 'Media plantilla (Socmark)',
      price: 7.9,
      talla: 'S',
      tallas: ['S', 'M', 'L'],
      onSale: false,
      discountPercent: 0,
      variants: [
        { 
          color: 'Negro', 
          hex: '#000000', 
          image: 'https://i.imgur.com/nunxOX3.jpg',
        },
        { 
          color: 'Beige cálido', 
          hex: '#b39385', 
          image: 'https://i.imgur.com/XyowOsc.jpg'
        },
        { 
          color: 'Gris perla', 
          hex: '#ccc9d2', 
          image: 'https://i.imgur.com/BoBpqEB.jpg',
        }
      ]
    },




    { id: 14,
      name: 'Media ultra talonera (Pesail)',
      price: 8.9,
      talla: 'S',
      tallas: ['S', 'M', 'L'],
      onSale: false,
      discountPercent: 0,
      variants: [
        { 
          color: 'Marrón rosado claro', 
          hex: '#bb9b96', 
          image: 'https://i.imgur.com/3bqWzfQ.jpg',
        },
        { 
          color: 'Gris pálido', 
          hex: '#8d8c91', 
          image: 'https://i.imgur.com/mPlWS94.jpg'
        },
        { 
          color: 'Beige rosado', 
          hex: '#c09faa', 
          image: 'https://i.imgur.com/9Cq6iio.jpg',
        }
      ]
    },





    { id: 15,
      name: 'Media de orejitas (Socmark)',
      price: 7.9,
      talla: 'S',
      tallas: ['S', 'M', 'L'],
      onSale: false,
      discountPercent: 0,
      variants: [
        { 
          color: 'Negro', 
          hex: '#000000', 
          image: 'https://i.imgur.com/JgAoi6x.jpg',
        },
        { 
          color: 'Marrón oliva', 
          hex: '#938564', 
          image: 'https://i.imgur.com/dRv0CwW.jpg'
        }
      ]
    },

    { id: 16,
      name: 'Media de orejitas (Socmark)',
      price: 7.9,
      talla: 'S',
      tallas: ['S', 'M', 'L'],
      onSale: false,
      discountPercent: 0,
      variants: [
        { 
          color: 'Blanco', 
          hex: '#FFFFFF', 
          image: 'https://i.imgur.com/kq3YGeT.jpg',
        },
        { 
          color: 'Rosa Cálido', 
          hex: '#c46e91', 
          image: 'https://i.imgur.com/ucOED1z.jpg',
        }
      ]
    },


    { id: 17,
      name: 'Media talonera con diseño extravagante (Amanecer)',
      price: 10.9,
      talla: 'S',
      tallas: ['S', 'M', 'L'],
      onSale: false,
      discountPercent: 0,
      variants: [
        { 
          color: 'Marrón Cálido', 
          hex: '#aa5b44', 
          image: 'https://i.imgur.com/mejzdvf.jpg',
        },
        { 
          color: 'Beige', 
          hex: '#bba6a3', 
          image: 'https://i.imgur.com/dLbTi2k.jpg'
        },
        { 
          color: 'Blanco', 
          hex: '#FFFFFF', 
          image: 'https://i.imgur.com/ZHqmpcb.jpg',
        }
      ]
    },


     { id: 18,
      name: 'Medias talonera (Amanecer)',
      price: 10.9,
      talla: 'S',
      tallas: ['S', 'M', 'L'],
      onSale: false,
      discountPercent: 0,
      variants: [
        { 
          color: 'Blanco', 
          hex: '#FFFFFF', 
          image: 'https://i.imgur.com/pXX2Gsa.jpg',
        },
        { 
          color: 'Gris Claro', 
          hex: '#c4c3c4', 
          image: 'https://i.imgur.com/apHY1cX.jpg'
        },
        { 
          color: 'Marrón Rojizo', 
          hex: '#a25d58', 
          image: 'https://i.imgur.com/T6nhiLy.jpg',
        }
      ]
    },
    

    { id: 19,
      name: 'Media talonera (Durey)',
      price: 9.9,
      talla: 'S',
      tallas: ['S', 'M', 'L'],
      onSale: false,
      discountPercent: 0,
      variants: [
        { 
          color: 'Blanco', 
          hex: '#FFFFFF', 
          image: 'https://i.imgur.com/Qs8E3wD.jpeg',
        },
        { 
          color: 'Gris Claro', 
          hex: '#c4c3c4', 
          image: 'https://i.imgur.com/hTK0uip.jpeg'
        }
      ]
    },

    { id: 20,
      name: 'Media tobillera (Durey)',
      price: 9.9,
      talla: 'S',
      tallas: ['S', 'M', 'L'],
      onSale: false,
      discountPercent: 0,
      variants: [
        { 
          color: 'Rosa pastel', 
          hex: '#f9b8c6', 
          image: 'https://i.imgur.com/xpJsIDp.jpeg',
        },
        { 
          color: 'Azul noche', 
          hex: '#052a5c', 
          image: 'https://i.imgur.com/DYHG6bo.jpeg'
        }
        ,
        { 
          color: 'Blanco', 
          hex: '#FFFFFF', 
          image: 'https://i.imgur.com/19prHFc.jpeg'
        }
      ]
    },


     { id: 21,
      name: 'Media tobillera (Durey)',
      price: 9.9,
      talla: 'S',
      tallas: ['S', 'M', 'L'],
      onSale: false,
      discountPercent: 0,
      variants: [
        { 
          color: 'Gris pardo', 
          hex: '#716d67', 
          image: 'https://i.imgur.com/0GGTWaU.jpeg',
        },
        { 
          color: 'Lavanda suave', 
          hex: '#b388b2', 
          image: 'https://i.imgur.com/WKfOCvJ.jpeg'
        }
        ,
        { 
          color: 'Durazno suave', 
          hex: '#eda18d', 
          image: 'https://i.imgur.com/mHE98GK.jpeg'
        }
      ]
    },
    { id: 22,
      name: 'Media tobillera (Durey)',
      price: 9.9,
      talla: 'S',
      tallas: ['S', 'M', 'L'],
      onSale: false,
      discountPercent: 0,
      variants: [
        { 
          color: 'Rosa pastel', 
          hex: '#f8b6c3', 
          image: 'https://i.imgur.com/hCOvyZ9.jpeg',
        },
        { 
          color: 'Negro', 
          hex: '#000000', 
          image: 'https://i.imgur.com/z86dOdT.jpeg'
        }
      ]
    },

  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
