/*
# Esercizio 1 - Posts
Studiati come funzionano le API di https://jsonplaceholder.typicode.com/.
Crea una pagina HTML in cui, dopo aver richiesto dei post all’API,
vengono create delle card nel documento: per ogni card mostra titolo e contenuto.
*/

    window.addEventListener('load', () =>{

    let posts;
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(obj => posts = obj)
        .catch((error) => console.error(error))
        .finally(() => {
            

                posts.forEach(({ title, body }) => {
                     document.body.innerHTML += `
                        <figure>
                            <h3>${title}</h3>
                            <p>${body}</p>
                        </figure>
                `;
                });
               
            });
        });
