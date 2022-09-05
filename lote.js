"use strict";

export default class inventory{
    
    constructor(){
        this.inicio = null;
        //this.dato = "";
        this.listSize = 0;
        
    }

    agregar(nuevo){
        let temp = this.inicio;
        let next;

        if(this.inicio == null){
            this.inicio = nuevo;
            this.listSize++;
            return "exito";
        } else if(this.listSize == 20){
            return "lleno";
        } else if(nuevo.codigo < temp.codigo){
            nuevo.siguiente = temp;
            this.inicio = nuevo;
            temp.anterior = nuevo;
            this.listSize++;
            return "exito";
        } else {
            while(temp){
                next = temp.siguiente;
                if(nuevo.codigo == temp.codigo){
                    return "igual";
                } else if (temp.siguiente == null){
                    temp.siguiente = nuevo;
                    nuevo.anterior = temp;
                    this.listSize++;
                    return "exito";
                } else if(nuevo.codigo > temp.codigo && nuevo.codigo < temp.siguiente.codigo ){
                    nuevo.siguiente = temp.siguiente;
                    temp.siguiente = nuevo;
                    next.anterior = nuevo;
                    nuevo.anterior = temp;
                    this.listSize++;
                    return "exito";
                } 
                temp = temp.siguiente;
            }
            
        }
    }

    buscar(codigo){ 
        let temp = this.inicio;

        while(temp){
            if(temp.codigo == codigo){
                return temp;
            } else if (temp.codigo > codigo){
                return null;
            }
            temp = temp.siguiente;
        }

        return null;
    }

    eliminar(codigo) {
        let temp = this.inicio;
        let previous;
        let next;
        
        //Quitar el primer elemento
        if(this.listSize == 1){
            this.inicio = null;
            this.listSize--;
            return "exito";
        } else if (codigo == this.inicio.codigo){
            let elim = this.inicio;
            this.inicio = temp.siguiente;
            this.inicio.anterior = null;
            elim.siguiente = null;
            this.listSize--;
            return "exito";
        } else {
            while (temp){
                console.log(temp)
                previous = temp;
                next = temp.siguiente.siguiente;

                if(temp.siguiente.codigo == codigo){
                    let eliminado = temp.siguiente;
                    previous.siguiente = previous.siguiente.siguiente;
                    if(temp.siguiente == null){
                        console.log("cent")
                        eliminado.siguiente = null;
                        eliminado.anterior = null;
                        this.listSize--;
                        console.log(eliminado)
                        return "exito";
                    } else {
                        console.log("fin")
                        next.anterior = next.anterior.anterior;
                        eliminado.siguiente = null;
                        eliminado.anterior = null;
                        this.listSize--;
                        console.log(eliminado)
                        return "exito";
                    }
                }
                
                temp = temp.siguiente;
            } 
            
        } 
       
    }

    listar() {
       let temp = this.inicio;
       let dato = "";
       let pos = 0;

       if(this.listSize === 0){
            return "vacio";
       } else {
            while(temp != null){
                pos++
                dato += `<p>Elemento Num.${pos}: Codigo ${temp.codigo} Nombre ${temp.nombre}<p>`
                temp = temp.siguiente;
            }
       }
       
       return dato;
    }    

    listarReverso(){
        let datos='';
        let list = 1;
        let temp=this.inicio;
        
        if(this.listSize === 0){
            return "vacio";
        } else {
            while (temp!=null){
                datos = temp.info(list++) + "\n" + datos
                temp=temp.siguiente;
            }
        }
        return datos;
    }

}