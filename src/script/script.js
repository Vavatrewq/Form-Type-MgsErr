function createForm(){

    document.addEventListener('click', (ev)=>{
        ev.preventDefault();
        const docType = ev.target;

        if(docType.classList.contains('btn')){
            const onErr = new ErrformAdd();
            onErr.createErrMgs(docType);
        }
    })

    class ErrformAdd {

        createErrMgs(){
            const nome = document.querySelector('.name').value;
            const twoNome = document.querySelector('.name-two').value;
            const cpfValue = document.querySelector('.cpf').value;
            const userPerson = document.querySelector('.user-person').value;
            const pinkUser = document.querySelector('.pink-user').value;
            const pinkUserTwo = document.querySelector('.pink-userTwo').value;

            //MSG-------------
            const nameMgs = document.querySelector('.name-msg');
            nameMgs.setAttribute('style', 'color:red;') 
            nameMgs.innerText = this.errTypeName(nome)

            //---------------
            const nameTwoMgs = document.querySelector('.nameTow-msg');
            nameTwoMgs.setAttribute('style', 'color:red;') 
            nameTwoMgs.innerText = this.errTypeTwoNome(twoNome)

            //------------------
            const cpfMgs = document.querySelector('.cpf-msg');
            const cpfTwo = document.querySelector('.cpf-msgTwo');
            cpfMgs.setAttribute('style', 'color:red;');
            cpfMgs.innerText = this.errTypeCpf(cpfValue);
            
            cpfTwo.setAttribute('style', 'color:red;');
            cpfTwo.innerText = createValidationCpf(cpfValue)

            //-----------------
            const userMgs = document.querySelector('.user-msg');
            userMgs.setAttribute('style', 'color:red;');
            userMgs.innerText = this.errTypeUser(userPerson);

            //--------------------
            const pinkMgs = document.querySelector('.pink-msg');
            pinkMgs.setAttribute('style', 'color:red;');
            pinkMgs.innerText = this.errTypePink(pinkUser, pinkUserTwo);

            //------------------------
            const pinkTwoMsg = document.querySelector('.pinkTwo-msg');
            pinkTwoMsg.setAttribute('style', 'color:red;');
            pinkTwoMsg.innerText = this.errTypePinkTwo(pinkUserTwo, pinkUser);
        }

        errTypeName(nome){
            if(nome === ''){
                return 'Não Deixe Em Branco Seu Nome!'
            }else if(Number(nome) === Number(nome)){
                return 'Essa Area Nome Não Aceita Numeros!'
            }
            return nome = '';
        }
    
        errTypeTwoNome(twoNome){
            if(twoNome === ''){
                return 'Não Deixe Em Branco Seu Sobrenome!'
            }else if(Number(twoNome) === Number(twoNome)){
                return 'Essa Area Sobrenome Não Aceita Numeros !'
            }
            return twoNome = '';
        }
    
        errTypeCpf(cpfValue){
            if(cpfValue === ''){
                return 'Não Deixe Em Branco Seu CPF!'
            }
            return cpfValue = '';
        }
    
        errTypeUser(userPerson){
            if(userPerson === ''){
                return 'Não deixa a Area Usuário em Branco'
            }else if(userPerson.length < 4 || userPerson.length > 12){
                return 'Usuário deverá ter entre 4 e 12 caracteres.'
            }else if(Number(userPerson) === Number(userPerson)){
                return 'Essa Area Usuário Não Aceita Numeros!'
            }
    
            return userPerson = '';
        }
    
        errTypePink(pinkUser, pinkUserTwo){
            if(pinkUser === ''){
                return 'Não deixa a Area Senha em Branco.'
            }else if(pinkUser.length < 6 || pinkUser.length > 12){
                return 'A Senha deverá ter entre 6 e 12 caracteres.'
            }else if(pinkUser !== pinkUserTwo){
                return 'Confere as Senhas!'
            }
            return pinkUser = '';
        }
    
        errTypePinkTwo(pinkUserTwo, pinkUser){
            if(pinkUserTwo === ''){
                return 'Não deixa a Area Repetir Senha Vazia!'
            }else if(pinkUserTwo.length < 6 || pinkUserTwo.length > 12){
                return 'A Senha deverá ter entre 6 e 12 caracteres.'
            }else if(pinkUserTwo !== pinkUser){
                return 'Confere as Senhas!'
            }
            return pinkUserTwo = '';
        }
    };
}

createForm()

function createValidationCpf(cpfValue){

    class ValidationCpf{
        constructor(cpfEnviar){
            Object.defineProperty(this, 'cpfClear', {
                enumerable:true,
                get: function(){
                    return cpfEnviar.replace(/\D+/g, '');
                } 
            })
            
        };

        toAllow(){
            if(this.validar()){
                return '';
            }else{
                return `Digite Seu CPF Valido!`;
            }
        }

        validar(){
            if(typeof this.cpfClear === 'undefined') return false;
            if(this.cpfClear.length !== 11) return false;
            if(this.isRepeat()) return false;

            const cpfParcial = this.cpfClear.slice(0, -2);
            const oneCpf = this.createDigite(cpfParcial)
            const twoCpf = this.createDigite(cpfParcial + oneCpf)

            const completeCpf = cpfParcial + oneCpf + twoCpf;

            return this.cpfClear === completeCpf;
        }

        isRepeat(){
            return this.cpfClear[0].repeat(11) === this.cpfClear;
        }

        createDigite(cpfParcial){
            const arrayComplete = Array.from(cpfParcial);
            let indeceArray = arrayComplete.length + 1;
            const arrTotal = arrayComplete.reduce((acul, el) =>{
                acul += (indeceArray * Number(el))
                indeceArray--
                return acul;
            },0)

            const typeTo = 11 - (arrTotal % 11);
            return typeTo > 9 ? '0' : String(typeTo) 
        }


    }

    const cpf = new ValidationCpf(cpfValue)
    return cpf.toAllow()
}