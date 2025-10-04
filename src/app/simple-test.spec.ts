// Pruebas básicas para CI/CD
describe('Pruebas básicas para CI/CD', () => {
  
  it('debería pasar una prueba simple', () => {
    expect(true).toBe(true);
  });

  it('debería sumar números correctamente', () => {
    const resultado = 2 + 2;
    expect(resultado).toBe(4);
  });

  it('debería verificar que un string no esté vacío', () => {
    const texto = 'Hola mundo';
    expect(texto).toBeTruthy();
    expect(texto.length).toBeGreaterThan(0);
  });

  it('debería verificar que un array tenga elementos', () => {
    const array = [1, 2, 3];
    expect(array).toBeDefined();
    expect(array.length).toBe(3);
  });

  it('debería verificar que un objeto tenga propiedades', () => {
    const objeto = { nombre: 'test', valor: 123 };
    expect(objeto.nombre).toBe('test');
    expect(objeto.valor).toBe(123);
  });
});
