<script setup lang="ts">
import { reactive } from "vue"
import type Employee from "../interfaces/employee"
import image from "@/assets/images/employee.jpg"

/* Textdaten */
const marketingTeam = reactive<Employee[]>([
  { name: "Dare Devil", beruf: "Head of Marketing", telefon: 1234567890 , email: "zejnaj.dukagjin@hotmail.com", image: image },
  { name: "Relative Performance", beruf: "Marketing Manager", telefon: 1234567890 , email: "zejnaj.dukagjin@hotmail.com", image: image },
  { name: "Wrecking Ball", beruf: "Content Manager", telefon: 1234567890 , email: "zejnaj.dukagjin@hotmail.com", image: image },
  { name: "Crazy Turtle", beruf: "Graphic Designer", telefon: 1234567890 , email: "zejnaj.dukagjin@hotmail.com", image: image }
])
</script>

<template>
  <div class="tab-pane fade" id="pills-marketing" role="tabpanel" aria-labelledby="pills-marketing-tab" tabindex="0">
    <div class="row">
      <div class="col-lg-3" v-for="person in marketingTeam">
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
