import modeloAzul from '../images/cesped_azul_etiqueta.png';
import modeloNegro from '../images/cesped_negro_etiqueta.png';
import modeloVerde from '../images/cesped_verde_etiqueta.png';

export const products = [
  {
    id: 1,
    name: 'Empapador Modelo Césped Artificial Verde',
    price: 50,
    image: modeloVerde,
    description: 'Empapador reutilizable con chapa personalizada incluida. Color verde.',
    category: 'Empapadores',
    model: 'Césped Verde',
  },
  {
    id: 2,
    name: 'Empapador Modelo Negro',
    price: 30,
    image: modeloNegro,
    description: 'Empapador reutilizable con chapa personalizada incluida. Color negro.',
    category: 'Empapadores',
    model: 'Negro',
  },
  {
    id: 3,
    name: 'Empapador Modelo Césped Artificial Celeste',
    price: 60,
    image: modeloAzul,
    description: 'Empapador reutilizable con chapa personalizada incluida. Color celeste.',
    category: 'Empapadores',
    model: 'Césped Celeste',
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === parseInt(id));
}
