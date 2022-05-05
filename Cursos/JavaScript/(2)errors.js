/*  HÁ 2 TIPOS DE ERROS: 
-> ECMAScript Error: erros que acontecem em tempo de execução. É composto por
(Mensagem, nome, linha, callStack)

-> DOMException: Erros relacionados ao DOM

-Diferença entre return e throw:
*return retorna um valor(string, number, obj...) e throw retorna um erro. 
 
-try..catch e finally:
*Try...catch: é uma declaração onde testamos um código no bloco do try e caso haja
 um erro, lidamos com ele no bloco catch (catch 'recebe' um parametro erro).

*Finally: podemos adicionar o finally após o try...catch, e o bloco é executado sempre, 
 independente de erros ocorrerem ou não. Seria um pedaço de código após a 
 verificação de um possível erro.

-Objeto Error:
*Um new Error pode aceitar até 3 paramentros (msg, nome, linha), mas os 3 são 
opcionais.
*/

function validaArray(arr, num) {
  try{
    if (!arr && !num) throw new ReferenceError("Envie os parâmetros")
    if (typeof arr !== 'object') throw new TypeError("O array deve ser do tipo object")
    if (typeof num !== 'number')  throw new TypeError("O num deve ser do tipo number")
    if (arr.length !== num) throw new RangeError("Tamanho Inválido")

    return arr
  }catch(e) {
    if (e instanceof ReferenceError) {
      console.log("Este erro é um ReferenceError!")
      console.log(e.message)
    } else if (e instanceof TypeError) {
      console.log("Este erro é um TypeError!")
      console.log(e.message)
    } else if (e instanceof RangeError) {
      console.log("Este erro é um RangeError!")
      console.log(e.message)
    } else {
      console.log("Tipo de Erro não esperado: " + e)
    }
  }
}

console.log(validaArray([1,2,4,4], 4))