/**
 * Enunciado
 */
import Cl_mComedor from "../models/Cl_mComedor.js";
export default class Cl_cComedor {
    constructor(vistaComedor, controladorComensal) {
        this.mComedor = new Cl_mComedor();
        this.vComedor = vistaComedor;
        this.cComensal = controladorComensal;
        // Suscribirse al evento de la vista para agregar nuevos registros
        this.vComedor.onNuevoComensal(() => this.procesar1Comensal());
        // Actualización inicial del reporte
        this.actualizarReporte();
    }
    procesar1Comensal() {
        this.cComensal.solicitarComensal((comensal) => {
            if (comensal !== null) {
                this.mComedor.procesarComensal(comensal);
                this.actualizarReporte();
            }
        });
    }
    actualizarReporte() {
        // Aquí llamamos a porcTurno(n) como función. 
        // Esto ya no debería dar el error ts(2349)
        this.vComedor.reportar({
            montoTotal: this.mComedor.montoTotal,
            porcDesayuno: this.mComedor.porcTurno(1),
            porcAlmuerzo: this.mComedor.porcTurno(2),
            porcAmbos: this.mComedor.porcTurno(3),
            porcDescuento: this.mComedor.porcDescuento
        });
    }
}
//# sourceMappingURL=Cl_cComedor.js.map