async function listarAvaliacao(){
    const res = await fetch('http://localhost:8081/avaliacao');
    const avaliacoes = await res.json();
    const lista = document.getElementById("lista-avaliacao");
    lista.innerHTML = "";
    avaliacoes.forEach(a => {
        const li = document.createElement("li");
        li.textContent = `${a.id} - ${a.desc} `;
        lista.appendChild(li);
    });
    
}

async function adicionarAvaliacao() {
    const av = document.getElementById("avaliacao").value;
    await fetch('http://localhost:8081/avaliacao', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({av})

    });
    listarAvaliacao();
}