import { I_vComedor } from "../interfaces/I_vComedor.js";

export default class Cl_vComedorPlain implements I_vComedor {
  private lblMontoTotal: HTMLElement;
  private lblPorcDesayuno: HTMLElement;
  private lblPorcAlmuerzo: HTMLElement;
  private lblPorcAmbos: HTMLElement;
  private lblPorcDescuento: HTMLElement;
  private btNuevoComensal: HTMLButtonElement;

  constructor() {
    this.btNuevoComensal = document.getElementById("body_btNuevoComensal") as HTMLButtonElement;
    this.lblMontoTotal = document.getElementById("body_lblMontoTotal") as HTMLElement;
    this.lblPorcDesayuno = document.getElementById("body_lblPorcDesayuno") as HTMLElement;
    this.lblPorcAlmuerzo = document.getElementById("body_lblPorcAlmuerzo") as HTMLElement;
    this.lblPorcAmbos = document.getElementById("body_lblPorcAmbos") as HTMLElement;
    this.lblPorcDescuento = document.getElementById("body_lblPorcDescuento") as HTMLElement;
  }

  onNuevoComensal(callback: () => void): void {
    this.btNuevoComensal.onclick = callback;
  }

  reportar({ montoTotal, porcDesayuno, porcAlmuerzo, porcAmbos, porcDescuento }: any): void {
    this.lblMontoTotal.innerHTML = `${montoTotal.toFixed(2)}`;
    this.lblPorcDesayuno.innerHTML = `${porcDesayuno.toFixed(2)}`;
    this.lblPorcAlmuerzo.innerHTML = `${porcAlmuerzo.toFixed(2)}`;
    this.lblPorcAmbos.innerHTML = `${porcAmbos.toFixed(2)}`;
    this.lblPorcDescuento.innerHTML = `${porcDescuento.toFixed(2)}`;
  }
}