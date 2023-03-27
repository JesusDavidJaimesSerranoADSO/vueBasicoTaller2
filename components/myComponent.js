export default{
    data(){
        return{
            Campus:[false,{nombre:"", telefono:"", direccion:""}],
            profesores:false, 
            estudiantes:false, 
            niveles:false, 
            tecnologías:false, 
            teams:false,
            roadMap:false,
            arrays:"",
            nuevaTarea:``,
            propiedades:{
                campus:[]
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
    methods:{
        addcampus(){
            this.propiedades.campus.push(this.Campus[1])
            this.Campus[1]={nombre:"", telefono:"", direccion:""}
        }

    },
    mounted(){
        this.addcampus
    }
}