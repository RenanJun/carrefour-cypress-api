class SharedActions {
    validarStatusCode(res, statusEsperado) {
        cy.log("response", res);
        expect(res.status, `Status deve ser ${statusEsperado}`).to.eq(statusEsperado);
    }
    validarPropriedadeIgual(res, caminho, valorEsperado) {
        const props = caminho.split('.');
        let atual = res;
        for(const prop of props){
            if(atual && Object.prototype.hasOwnProperty.call(atual, prop)){
                atual = atual[prop];
            } else{
                throw new Error(`Propriedade '${caminho}' não encontrada no objeto.`);
            }
        }
        expect(atual).to.equal(valorEsperado);
    }
    validarTemValorNaPropriedade(res, propriedade, valor){
        expect(res).to.have.property(`${propriedade}`, valor)
    }
    validarEUmArray(reponse){
        expect(reponse).that.is.an('array');
    }
    validarNENulloVazioZero(response){
         expect(response).to.not.be.oneOf([null, "", 0]);
    }
}
module.exports = SharedActions;