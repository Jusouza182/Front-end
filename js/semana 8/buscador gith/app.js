document.getElementById("form-pesquisa").addEventListener('submit', pesquisa);

function pesquisa(event){
    event.preventDefault();

    const nome = document.getElementById("username").value

    fetch(`https://api.github.com/users/${nome}`)
    .then((resonse) =>{
        if(resonse.ok === false){
            throw new Error()
        }
        return  (resonse.json())
        })

    .then((data) => {
        const profileDiv = document.getElementById('profile')
        profileDiv.innerHTML =`
        <img src=${data.avatar_url}>
        <p> Nome: ${data.name} </p>
        <p> Username: ${data.login}</p>
        <p> Seguidores: ${data.followers}</p>
        <p> Repositórios: ${data.public_repos}</p>
        <p> Local: ${data.location}</p>`
    })
 .catch(()=>{
        alert('Erro ao fazer essa solicitação')
    })
}