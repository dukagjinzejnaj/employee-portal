<script setup lang="ts">
import { reactive } from "vue"

/* Textdaten */
const content = reactive({
    title: "Abwesenheit beantragen",
    text: "Falls du krank, Urlaub oder aus einem anderen Grund eine Abwesenheit beantragen möchtest, bitte dieses Formular ausfüllen."
})

const formdata = reactive({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    select: "",
    startdate: "",
    enddate: "",
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
        alert("Bitte wähle dein Grund aus!")
    } else if (formdata.startdate == null || formdata.startdate == "") {
        alert("Bitte wähle das Startdatum aus!")
    } else if (formdata.enddate == null || formdata.enddate == "") {
        alert("Bitte wähle das Enddatum aus!")
    } else if (formdata.message == null || formdata.message == "") {
        alert("Bitte gib deine Informationen zu deiner Abwesenheit ein!")
    } else {
        alert("Vorname: " + formdata.firstname + "\n" + "Nachname: " + formdata.lastname + "\n" + "Benutzername: " + formdata.username + "\n" + "E-Mail: " + formdata.email + "\n" + "Anliegen: " + formdata.select + "\n" + "Enddatum: " + formdata.startdate + "\n" + "Enddatum: " + formdata.enddate + "\n" + "Nachricht: " + formdata.message)
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
                <option value="">Grund*</option>
                <option value="krank">Krank</option>
                <option value="urlaub">Urlaub</option>
                <option value="anderes">Anderes</option>
            </select>
            <label for="exampleFormControlInput1" class="form-label mb-3">Startdatum*</label>
            <input type="date" id="exampleFormControlInput1" name="Startdatum" class="form-control mb-3" min="2023-01-01" max="2033-12-31" v-model="formdata.startdate" required>
            <label for="exampleFormControlInput1" class="form-label">Enddatum*</label>
            <input type="date" id="exampleFormControlInput1" name="Enddatum" class="form-control mb-3" min="2023-01-01" max="2033-12-31" v-model="formdata.enddate" required>
            <textarea class="form-control mb-3" maxlength="60" name="Nachricht" placeholder="Nachricht*" v-model="formdata.message" required></textarea>
            <button type="submit" class="btn btn-secondary" @click="sendForm()">Antrag senden</button>
        </div>
    </form>
  </div>
</template>