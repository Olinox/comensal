export default class Cl_mPersona {
  private _nombre: string;
  private _apellido: string;
  private _cedula: string;
  private _sexo: string; // M - F
  private _fechaNac: string; // aaaa-mm-dd

  constructor({ nombre, apellido, cedula, sexo, fechaNac }: 
    { nombre: string; apellido: string; cedula: string; sexo: string; fechaNac: string }) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._cedula = cedula;
    this._sexo = sexo;
    this._fechaNac = fechaNac;
  }

  // Getters y Setters
  get nombre() { return this._nombre; }
  get apellido() { return this._apellido; }
  get cedula() { return this._cedula; }
  get sexo() { return this._sexo; }
  get fechaNac() { return this._fechaNac; }

  get edad(): number {
    const hoy = new Date();
    const cumple = new Date(this._fechaNac);
    let edad = hoy.getFullYear() - cumple.getFullYear();
    const m = hoy.getMonth() - cumple.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumple.getDate())) edad--;
    return edad;
  }
}