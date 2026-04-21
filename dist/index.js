import Cl_mComedor from "./models/Cl_mComedor.js";
import Cl_mComensal from "./models/Cl_mComensal.js";
// ... (importar controladores y vistas)
const comedor = new Cl_mComedor();
const datosPrueba = [
    { n: "Ana", a: "Perez", c: "11", s: "F", f: "1970-05-10", t: 1 }, // 56 años (Desc) -> $2.5
    { n: "Luis", a: "Gomez", c: "22", s: "M", f: "1960-01-20", t: 3 }, // 66 años (Desc) -> $5.0
    { n: "Maria", a: "Roa", c: "33", s: "F", f: "1995-03-15", t: 2 }, // Joven -> $7.0
    { n: "Pedro", a: "Gil", c: "44", s: "M", f: "1980-11-30", t: 2 }, // Joven -> $7.0
    { n: "Jose", a: "Sanz", c: "55", s: "M", f: "1955-08-12", t: 1 }, // 70 años (Desc) -> $2.5
    { n: "Eva", a: "Luna", c: "66", s: "F", f: "1972-12-01", t: 3 }, // 53 años (Desc) -> $5.0
    { n: "Rosa", a: "Blanco", c: "77", s: "F", f: "2000-01-01", t: 1 }, // Joven -> $5.0
    { n: "Ivan", a: "Mora", c: "88", s: "M", f: "1990-05-05", t: 2 }, // Joven -> $7.0
    { n: "Sara", a: "Leal", c: "99", s: "F", f: "1965-02-28", t: 3 }, // 61 años (Desc) -> $5.0
    { n: "Raul", a: "Vera", c: "00", s: "M", f: "1964-10-10", t: 2 } // 61 años (Desc) -> $3.5
];
datosPrueba.forEach(d => {
    comedor.procesarComensal(new Cl_mComensal({
        nombre: d.n, apellido: d.a, cedula: d.c, sexo: d.s, fechaNac: d.f, turno: d.t
    }));
});
// Luego se inicializa la vista con el comedor ya cargado
//# sourceMappingURL=index.js.map