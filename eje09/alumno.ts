
interface alumn{

    noControl :string,
    nombre:string,
    apellido:string,
    promedio:number,
    genero:string,
    fechaNacimiento:string,
    activo:boolean,

}



export class Alumno {

 arreglo = Array<alumn>();

constructor(){}


 createAlunmno(nc:string,n:string,a:string,p:number,g:string,f:string,act:boolean){
  let arreglo2:any;
  
    arreglo2= {
    noControl : nc ,
    nombre:n ,
    apellido:a,
    promedio:p,
    genero:g,
    fechaNacimiento:f,
    activo: act

  }
  this.arreglo.push(arreglo2);
  this.ver();


 }

ver(){

    for(let i=0;i<this.arreglo.length;i++){
        console.log(this.arreglo[i]);
}
}



deleteAlumno (nc:string){
    for(var i=0;i<this.arreglo.length;i++){
        if(this.arreglo[i].noControl==nc){
            this.arreglo.splice(i,1);
        }
    }
    this.ver();
}

updateAlumno(nc:string ,n:string,a:string,p:number,g:string,f:string,act:boolean){
    let arreglo3:any
    arreglo3={  noControl : nc ,
        nombre:n ,
        apellido:a,
        promedio:p,
        genero:g,
        fechaNacimiento:f,
        activo: act};
    for(var i=0;i<this.arreglo.length;i++){
        if(this.arreglo[i].noControl==nc){
            this.arreglo[i]=arreglo3;
        }
    }
    this.ver();
}





}