import Cl_mComensal from "./Cl_mComensal.js";

export default class Cl_mComedor {
  private _acMontoTotal: number;
  private _cntDesayuno: number;
  private _cntAlmuerzo: number;
  private _cntAmbos: number;
  private _cntConDescuento: number;
  private _cntTotal: number;

  constructor() {
    this._acMontoTotal = 0;
    this._cntDesayuno = 0;
    this._cntAlmuerzo = 0;
    this._cntAmbos = 0;
    this._cntConDescuento = 0;
    this._cntTotal = 0;
  }

  procesarComensal(c: Cl_mComensal): void {
    this._cntTotal++;
    this._acMontoTotal += c.montoAPagar;

    if (c.turno === 1) this._cntDesayuno++;
    else if (c.turno === 2) this._cntAlmuerzo++;
    else if (c.turno === 3) this._cntAmbos++;

    if (c.tieneDescuento) this._cntConDescuento++;
  }

  // Esto es un Getter (se accede sin paréntesis)
  get montoTotal(): number {
    return this._acMontoTotal;
  }

  // Esto es un MÉTODO (se accede con paréntesis, ej: porcTurno(1) )
  porcTurno(turno: number): number {
    if (this._cntTotal === 0) return 0;
    let cantidad = 0;
    if (turno === 1) cantidad = this._cntDesayuno;
    else if (turno === 2) cantidad = this._cntAlmuerzo;
    else if (turno === 3) cantidad = this._cntAmbos;
    
    return (cantidad / this._cntTotal) * 100;
  }

  // Esto es un Getter
  get porcDescuento(): number {
    if (this._cntTotal === 0) return 0;
    return (this._cntConDescuento / this._cntTotal) * 100;
  }
}