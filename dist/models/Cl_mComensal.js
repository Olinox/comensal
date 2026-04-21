import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mComensal extends Cl_mPersona {
    constructor({ nombre, apellido, cedula, sexo, fechaNac, turno }) {
        super({ nombre, apellido, cedula, sexo, fechaNac });
        this._turno = turno;
    }
    get turno() { return this._turno; }
    get costoBase() {
        switch (this._turno) {
            case 1: return 5;
            case 2: return 7;
            case 3: return 10;
            default: return 0;
        }
    }
    get tieneDescuento() {
        if (this.sexo === "F" && this.edad > 50)
            return true;
        if (this.sexo === "M" && this.edad > 60)
            return true;
        return false;
    }
    get montoAPagar() {
        return this.tieneDescuento ? this.costoBase * 0.5 : this.costoBase;
    }
}
//# sourceMappingURL=Cl_mComensal.js.map