<script setup lang="ts">
import { reactive } from "vue"
import type Employee from "../interfaces/employee"
import image from "@/assets/images/employee.jpg"

/* Textdaten */
const hrTeam = reactive<Employee[]>([
  { name: "Unique Name", beruf: "Head of HR", telefon: 1234567890 , email: "zejnaj.dukagjin@hotmail.com", image: image },
  { name: "Day Dreamer", beruf: "HR Specialist", telefon: 1234567890 , email: "zejnaj.dukagjin@hotmail.com", image: image },
  { name: "Creepy Pasta", beruf: "HR Specialist", telefon: 1234567890 , email: "zejnaj.dukagjin@hotmail.com", image: image },
  { name: "Get Busy", beruf: "HR Specialist", telefon: 1234567890 , email: "zejnaj.dukagjin@hotmail.com", image: image }
])
</script>

<template>
  <div class="tab-pane fade" id="pills-hr" role="tabpanel" aria-labelledby="pills-hr-tab" tabindex="0">
    <div class="row">
      <div class="col-lg-3" v-for="person in hrTeam">
        <div class="card mb-3">
          <img :src="person.image"/>
          <div class="card-body">
            <h3 class="card-text">{{ person.name }}</h3>
            <p class="card-text">{{ person.beruf }}</p>
            <a class="btn btn-outline-secondary btn-sm" href="mailto:{{ person.email }}"><i class="bi bi-envelope-at-fill"></i></a>
            <a class="btn btn-outline-secondary btn-sm" href="tel:{{ person.telefon }}"><i class="bi bi-telephone"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>