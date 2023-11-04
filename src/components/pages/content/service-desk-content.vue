<script setup lang="ts">
import { reactive } from "vue"

/* Textdaten */
const content = reactive({
    title: "Service Desk",
    text: "Falls du technische Probleme hast oder eine Software installieren lassen möchtest, bitte dieses Formular ausfüllen."
})

const formdata = reactive({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    select: "",
    date: "",
    message: ""
})

/* Formular-Funktion */
function sendForm() {
    if(formdata.firstname == null || formdata.firstname == "") {
        alert("Bitte gib deinen Vornamen ein!")
    } else if (formdata.lastname == null || formdata.lastname == "") {
        alert("Bitte gib deinen Nachnamen ein!")
    } else if (formdata.username == null || formdata.username == "") {
        alert("Bitte gib deinen Benutzernamen ein!")
    } else if (formdata.email == null || formdata.email == "") {
        alert("Bitte gib deine E-Mail ein!")
    } else if (formdata.select == null || formdata.select == "") {
        alert("Bitte wähle dein Anliegen aus!")
    } else if (formdata.date == null || formdata.date == "") {
        alert("Bitte wähle das Enddatum aus!")
    } else if (formdata.message == null || formdata.message == "") {
        alert("Bitte gib deine Informationen zu deinem Problem ein!")
    } else {
        alert("Vorname: " + formdata.firstname + "\n" + "Nachname: " + formdata.lastname + "\n" + "Benutzername: " + formdata.username + "\n" + "E-Mail: " + formdata.email + "\n" + "Anliegen: " + formdata.select + "\n" + "Enddatum: " + formdata.date + "\n" + "Nachricht: " + formdata.message)
    }
}
</script>

<template>
<div class="container-md">
    <div class="pages">
        <h2>{{ content.title }}</h2>
        <p>{{ content.text }}</p>
    </div>
    <form class="row g-3" @submit.prevent="sendForm">
        <div class="col-12">
            <input type="text" class="form-control mb-3" maxlength="30" name="Vorname" placeholder="Vorname*" v-model="formdata.firstname" required>
            <input type="text" class="form-control mb-3" maxlength="30" name="Nachname" placeholder="Nachname*" v-model="formdata.lastname" required>
            <div class="input-group mb-3">
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" maxlength="20" name="Benutzername" placeholder="Benutzername*" v-model="formdata.username" required>
            </div>
            <input type="email" class="form-control mb-3" maxlength="40" name="E-Mail" placeholder="E-Mail*" v-model="formdata.email" required>
            <select name="select" class="form-select mb-3" v-model="formdata.select" required>
                <option value="">Anliegen*</option>
                <option value="installation-software">Installation Software</option>
                <option value="it-problem">IT Problem</option>
            </select>
            <label for="exampleFormControlInput1" class="form-label">Enddatum*</label>
            <input type="date" id="exampleFormControlInput1" name="Enddatum" class="form-control mb-3" v-model="formdata.date" min="2023-01-01" max="2033-12-31" required>
            <textarea class="form-control mb-3" maxlength="60" name="Nachname" placeholder="Nachricht*" v-model="formdata.message" required></textarea>
            <button type="submit" class="btn btn-secondary" @click="sendForm()">Nachricht senden</button>
        </div>
    </form>
</div>
</template>