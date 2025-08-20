import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
    { 
      id: 1, 
      name: 'Faja moldeadora', 
      price: 30,
      talla: 'S',
      tallas: ['S', 'M', 'L'],
      onSale: false,
      discountPercent: 0,
      variants: [
        { 
          color: 'Negro', 
          hex: '#000000', 
          image: 'https://imgs.search.brave.com/YTIocVMgk9KQTBuKbAdbgDOpNdaaxHYY1Z-gmiucbic/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL3ZhZGVyLXBy/b2QuczMuYW1hem9u/YXdzLmNvbS8xNjc5/MjE4NTIyLWZhamEt/Y29sb21iaWFuYS1h/bWF6b24tZmFqYXMt/NjQxNmQ3M2JiZmY5/ZC5qcGc_Y3JvcD0x/eHc6MXhoO2NlbnRl/cix0b3AmcmVzaXpl/PTk4MDoq',
        },
        { 
          color: 'Beige', 
          hex: '#f5f5dc', 
          image: 'https://imgs.search.brave.com/hYQmkQtmPIpgL9UF5Pdp3XhaSJAmRnL-nybtlwsbPQw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFRZ3RXR1c5bUwu/anBn',
        },
        { 
          color: 'Blanco', 
          hex: '#ffffff', 
          image: 'https://imgs.search.brave.com/yu5Bo6Mw9PGvfrfZvGh_ahd_KlpgXTZZydN-UdOr_RM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2hhcGV3ZWFydXNh/LmNvbS9jZG4vc2hv/cC9wcm9kdWN0cy9m/YWphcy1zb25yeXNl/LXBhbnR5LWJvZHlz/dWl0LXNoYXBld2Vh/ci13aXRoLWJ1aWx0/LWluLWJyYS0zMjQ5/MTY1MTMwMTU2Ni5w/bmc_dj0xNjgwNjYz/OTY3JndpZHRoPTYw/MA',
        }
      ]
    },
    { 
      id: 2, 
      name: 'Brasier de encaje', 
      price: 25,
      talla: 'S',
      tallas: ['S', 'M', 'L'],
      onSale: false,
      discountPercent: 0,
      variants: [
        { 
          color: 'Negro', 
          hex: '#000000', 
          image: 'https://imgs.search.brave.com/73VRGzIqLClFH5ppfScvMU2fsdyai99CMyfa7MBud3k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZWxwYWxhY2lvZGVo/aWVycm8uY29tL2R3/L2ltYWdlL3YyL0JE/S0JfUFJEL29uL2Rl/bWFuZHdhcmUuc3Rh/dGljLy0vU2l0ZXMt/cGFsYWNpby1tYXN0/ZXItY2F0YWxvZy9k/ZWZhdWx0L2R3M2Mw/YTFhZDMvaW1hZ2Vz/LzQ0MjMwMzQ5L05F/R1JPL2xhcmdlLzQ0/MjMwMzU3X3gxLmpw/Zz9zdz0zNDYmc2g9/Mzk0',
        },
        { 
          color: 'Beige', 
          hex: '#f5f5dc', 
          image: 'https://imgs.search.brave.com/xHvv0LX5GkBm8LNBbuCrn-LkxaJgNwfEo_lTVqvTAnI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxRkNJNzhBV3VM/LmpwZw',
        },
        { 
          color: 'Blanco', 
          hex: '#ffffff', 
          image: 'https://imgs.search.brave.com/7yGslh8RJFBqKaDEJcFOmfmQl58wnvKANxRGpry7FdY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzgyMzI5Ni1NQ084/NTM0OTQ2NjExNl8w/NjIwMjUtRS53ZWJw',
        }
      ]
    },
    { id: 3,
      name: 'Media elegante',
      price: 15,
      talla: 'S',
      tallas: ['S', 'M', 'L'],
      onSale: false,
      discountPercent: 0,
      variants: [
        { 
          color: 'Negro', 
          hex: '#000000', 
          image: 'https://imgs.search.brave.com/sQL_ajHKJhHALb8tcGwUoodml_zEHgJmQ7gtohPm9tE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Z2FsYXguY28vY2Ru/L3Nob3AvZmlsZXMv/c2F6YS1uZWdyby03/MDQ3LTc0NTk0NF8w/MDcwNDctNS5qcGc_/dj0xNzMzODYwNjk0/JndpZHRoPTYwMA',
        },
        { 
          color: 'Beige', 
          hex: '#f5f5dc', 
          image: 'https://imgs.search.brave.com/Ig1X9fuesQmXjH8ogCWyjJJLEdkSLZTVZkSrTPpdbfU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFUNlZKdzkrZUwu/anBn',
        },
        { 
          color: 'Blanco', 
          hex: '#ffffff', 
          image: 'https://imgs.search.brave.com/BaUQYfedMQ52cRda8t-V7U1YsRgZOhGLpsEoG2UnIHQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Z2FsYXguY28vY2Ru/L3Nob3AvZmlsZXMv/c2FmaW5vLXg1LWJs/YW5jby05MDAtODAx/MTk3XzAwMDkwMC00/LmpwZz92PTE3NDgz/NTM4Nzkmd2lkdGg9/NjAw',
        }
      ]
    },
     { id: 4,
      name: 'Ropa interior',
      price: 10,
      talla: 'S',
      tallas: ['S', 'M', 'L'],
      onSale: true,
      discountPercent: 10,
      variants: [
        { 
          color: 'Negro', 
          hex: '#000000', 
          image: 'https://imgs.search.brave.com/6B4o7nL-mzdjvwZzS3I8LtogBH5AMmIjcb7pR9hV8BU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zLmFs/aWNkbi5jb20vQHNj/MDQva2YvSExCMVJX/bVJRcnJwSzFSalNa/VEVxNkFXQVZYYW4u/anBnXzMwMHgzMDAu/anBn',
        },
        { 
          color: 'Beige', 
          hex: '#f5f5dc', 
          image: 'https://imgs.search.brave.com/vk0PFEHiuGm0nn7s06gzKosLroRgNqlI8UgcCm9Q-JU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90YW5p/YS52dGV4aW1nLmNv/bS5ici9hcnF1aXZv/cy9pZHMvMzc3NzQ0/LTM1MC0zNTAvUk9Q/QS1JTlRFUklPUi1Q/YW50aWVzXzIwNTQ2/ODhfUGllbF8yLmpw/Zz92PTYzODgwODU3/MzYzMjM3MDAwMA',
        },
        { 
          color: 'Blanco', 
          hex: '#ffffff', 
          image: 'https://imgs.search.brave.com/OKqWatcYE0tL35BUhPUu5AWJ0nc0yddo7ve0BLaKSoc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/cmV0cmF0by1jdWVy/cG8tZW50ZXJvLWhl/cm1vc2EtY2hpY2Et/ZGVsZ2FkYS1yb3Bh/LWludGVyaW9yXzE3/MTMzNy05Mjg5Lmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDA',
        }
      ]
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
