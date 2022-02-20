export function createValidationCpf(cpfValue){
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
