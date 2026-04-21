export interface I_vComedor {
  onNuevoComensal(callback: () => void): void;

  reportar({
    montoTotal,
    porcDesayuno,
    porcAlmuerzo,
    porcAmbos,
    porcDescuento
  }: {
    montoTotal: number;
    porcDesayuno: number;
    porcAlmuerzo: number;
    porcAmbos: number;
    porcDescuento: number;
  }): void;
}