document.addEventListener('DOMContentLoaded',function(){
    asignation();
    colorEtiquetas();
});

function asignation(){
    const matutina = document.getElementById('matutina');
    const vespertina = document.getElementById('vespertina');
    const nocturna = document.getElementById('nocturna');
    const boton = document.getElementById('boton');

    boton.addEventListener('click', function(){
        
        if (matutina.checked){
            mensaje('matutina',1)

        }
        else if (vespertina.checked){
            mensaje('vespertina',1)
        }
        else if (nocturna.checked){
            mensaje('noctura',1)

        }
        else{
            mensajeerror();

        }
        
        

        function mensaje ($mensaje, $op){
            if ($op = 1){

                Swal.fire({
                    title: "Excelente!",
                    text: `Te asignaste a: ${$mensaje}`,
                    icon: "success"
                });
            }
            else {
                mensajeerror();
                
            }
        }
        function mensajeerror(){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No has elegido opciones",
            });

        }
        

    });
    
}

function colorEtiquetas(){
    const texto1 = document.querySelector('.textoUno');

    texto1.classList.add('text-danger')

}
