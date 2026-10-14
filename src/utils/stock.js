export function estadoStock(producto) {
  if (producto.stock === 0) return "agotado";
  if (producto.stock <= producto.stockCritico) return "critico";
  return "disponible";
}