/**
 * Métodos disponíveis para requisições HTTP
 */

const METHOD_GET = 'GET';
const METHOD_POST = 'POST';
const METHOD_PUT = 'PUT';
const METHOD_DELETE = 'DELETE';

/**
 * Essa função faz uma requisição HTTP para o servidor
 * @param {*} url 
 * @param {*} method 
 * @param {*} data 
 */
const makeHTTPRequest = function(url, method, json) {
    const http = new XMLHttpRequest();
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    http.open(method, url);

    http.onload = function() {
        if (request.status === 200) {
            const jsonString = request.responseText;
            const data = JSON.parse(jsonString);
            console.log(data);
        }
    };

    http.send(JSON.stringify(json));
}

/**
 * Essa função envia as interações do usuário para o servidor
 * @param {*} userId 
 * @param {*} event 
 */
const sendUserInteraction = function(userId, event) {
    makeHTTPRequest('/user-interaction', METHOD_POST, { userId, event })
}