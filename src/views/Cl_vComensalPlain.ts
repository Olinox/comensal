import { I_vComensal } from "../interfaces/I_vComensal.js";

export default class Cl_vComensalPlain implements I_vComensal {
  private inNombre: HTMLInputElement;
  private inApellido: HTMLInputElement;
  private inCedula: HTMLInputElement;
  private inSexo: HTMLSelectElement;
  private inFechaNac: HTMLInputElement;
  private inTurno: HTMLSelectElement;
  private btCancelar: HTMLButtonElement;
  private btAceptar: HTMLButtonElement;
  private vista: HTMLElement;

  constructor() {
    this.vista = document.getElementById("comensal") as HTMLElement;
    this.inNombre = document.getElementById("comensal_inNombre") as HTMLInputElement;
    this.inApellido = document.getElementById("comensal_inApellido") as HTMLInputElement;
    this.inCedula = document.getElementById("comensal_inCedula") as HTMLInputElement;
    this.inSexo = document.getElementById("comensal_inSexo") as HTMLSelectElement;
    this.inFechaNac = document.getElementById("comensal_inFechaNac") as HTMLInputElement;
    this.inTurno = document.getElementById("comensal_inTurno") as HTMLSelectElement;
    this.btCancelar = document.getElementById("comensal_btCancelar") as HTMLButtonElement;
    this.btAceptar = document.getElementById("comensal_btAceptar") as HTMLButtonElement;
  }

  get nombre(): string { return this.inNombre.value; }
  get apellido(): string { return this.inApellido.value; }
  get cedula(): string { return this.inCedula.value; }
  get sexo(): string { return this.inSexo.value; }
  get fechaNac(): string { return this.inFechaNac.value; }
  get turno(): number { return +this.inTurno.value; }

  onAceptar(callback: () => void): void { this.btAceptar.onclick = callback; }
  onCancelar(callback: () => void): void { this.btCancelar.onclick = callback; }

  mostrar(): void { 
    this.vista.hidden = false;
    this.inNombre.value = "";
    this.inApellido.value = "";
    this.inCedula.value = "";
    this.inFechaNac.value = "";
  }
  ocultar(): void { this.vista.hidden = true; }
}