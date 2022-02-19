import { ErrformAdd } from './components/typeErr.js'

function createForm(){
    document.addEventListener('click', (ev)=>{
        ev.preventDefault();
        const docType = ev.target;

        if(docType.classList.contains('btn')){
            const onErr = new ErrformAdd();
            onErr.createErrMgs(docType);
        }
    })
}

createForm()
