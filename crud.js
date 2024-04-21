
let contacts = [];

function add_contato(event) {
    event.preventDefault();


    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;

    const contact = {
        id: Date.now(),
        nome,
        telefone,
        email
    };

    contacts.push(contact);


    document.getElementById("form_contato").reset();

    renderizar_contato();
}

function renderizar_contato() {
    const lista_contato = document.getElementById("lista_contato");


    lista_contato.innerHTML = "";

    contacts.forEach(contact => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${contact.nome}</strong>
            <br>
            Telefone: ${contact.telefone}
            <br>
            E-mail: ${contact.email}
            <button onclick="editar_contato(${contact.id})">Editar</button>
            <button onclick="deletar_contato(${contact.id})">Excluir</button>
        `;
        lista_contato.appendChild(li);
    });
}


function editar_contato(id) {
    const contact = contacts.find(contact => contact.id === id);

    if (contact) {
        const nome = prompt("Novo nome:", contact.nome);
        const telefone = prompt("Novo telefone:", contact.telefone);
        const email = prompt("Novo e-mail:", contact.email);

        if (nome && telefone && email) {
            contact.nome = nome;
            contact.telefone = telefone;
            contact.email = email;

            renderizar_contato();
        }
    }
}


function deletar_contato(id) {
    contacts = contacts.filter(contact => contact.id !== id);
    renderizar_contato();
}

document.getElementById("form_contato").addEventListener("submit", add_contato);

renderizar_contato();
