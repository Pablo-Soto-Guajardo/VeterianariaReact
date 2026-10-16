export function ofuscarContrasena(texto) {
  let hash = 5381;
  for (let i = 0; i < texto.length; i++) {
    hash = (hash * 33) ^ texto.charCodeAt(i);
  }
  return `h$${(hash >>> 0).toString(16)}`;
}
