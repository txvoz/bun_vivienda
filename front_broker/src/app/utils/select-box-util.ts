export abstract class SelectBoxUtil {

    public static refreshCreate(): void {

        console.log("Creando boxes");

        let boxes: any = document.querySelectorAll('.toselectbox');

        let inputs: any = document.getElementsByTagName('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('click', (e: any) => {
                let actives: any = document.querySelectorAll('.selectbox .active');
                for (let j = 0; j < actives.length; j++) {
                    actives[j].classList.remove('active');
                }
            });
        }

        for (let i = 0; i < boxes.length; i++) {
            let objBox = boxes[i];
            objBox.classList.add("selectbox");
            objBox.classList.remove("toselectbox");

            let tarjetId = boxes[i].id;

            let select: any = document.querySelector('#' + tarjetId + ' .select');
            let opciones: any = document.querySelector('#' + tarjetId + ' .opciones');

            console.log('#' + tarjetId + ' .opciones');
            console.log(opciones);

            let contenidoSelect: any = document.querySelector('#' + tarjetId + ' .contenido-select');
            let hiddenInput: any = document.querySelector('#' + tarjetId + ' .inputSelect');

            select.addEventListener('click', (e: any) => {

                let actives: any = document.querySelectorAll('.selectbox .active');
                for (let j = 0; j < actives.length; j++) {
                    actives[j].classList.remove('active');
                }

                e.currentTarget.classList.toggle('active');
                opciones.classList.toggle('active');
            });

            document.querySelectorAll('#' + tarjetId + ' .opciones > .opcion').forEach((opcion) => {
                opcion.addEventListener('click', (e: any) => {
                    e.preventDefault();
                    contenidoSelect.innerHTML = e.currentTarget.innerHTML;
                    select.classList.toggle('active');
                    opciones.classList.toggle('active');
                    //hiddenInput.value = e.currentTarget.querySelector('#' + tarjetId + ' .titulo').innerText;
                });
            });

        }


    }
}