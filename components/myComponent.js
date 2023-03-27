export default {
    data() {
        return {
            Campus: [false, { nombre: "", telefono: "", direccion: "" }],
            profesores: [false, { nombre: "", telefono: "" }],
            estudiantes: [false, { nombre: "", telefono: "", nivel: "", direccion: "", transporte: "" }],
            niveles: [false, { preReq: "", tecno: "", eleccion: "" }],
            tecnologías: [false,{nombre:""}],
            teams: false,
            roadMap: false,
            // arrays:typeof(require("./propiedades.json")),
            propiedades: {
                campus: [],
                profesores: [],
                estudiantes: [],
                niveles: [],
                tecno:[]

                // {nombre:"", telefono:"", direccion:""}
                // {profesores:{nombre:"", telefono:""}},
                // {estudiantes:{nombre:"", telefono:"", nivel:"",direccion:""}},
                // {niveles:{preRequisitos:""}},
                // {tecnologias:{nombre:""}},
                // {teams:{}},
                // {roadcamp:[]}
            }
        }
    },
    methods: {
        addcampus() {
            this.propiedades.campus.push(this.Campus[1])
            this.Campus[1] = { nombre: "", telefono: "", direccion: "" }
        },
        addprofesor() {
            this.propiedades.profesores.push(this.profesores[1])
            this.profesores[1] = { nombre: "", telefono: "" }
        },
        addestu() {
            this.propiedades.estudiantes.push(this.estudiantes[1])
            this.estudiantes[1] = { nombre: "", telefono: "", nivel: "", direccion: "", transporte: "" }
        },
        addnivel() {
            this.propiedades.niveles.push(this.niveles[1])
            this.niveles[1] = { preReq: "", tecno: "", eleccion: "" }
        },
        addtecno(){
            
        }

    },
    // mounted() {
    //     this.addcampus(),
    //     this.addprofesor(),
    //     this.addestu(),
    //     this.addnivel(),
    // }
}