<script setup lang="ts">
import { reactive } from "vue"
import type Employee from "../interfaces/employee"
import image from "@/assets/images/employee.jpg"

/* Textdaten */
const employees = reactive<Employee[]>([
  { name: "Atlas Ventures", beruf: "Chief Executive Officer", telefon: 1234567890 , email: "zejnaj.dukagjin@hotmail.com", image: image },
  { name: "Dog Creative", beruf: "Chief Marketing Officer", telefon: 1234567890 , email: "zejnaj.dukagjin@hotmail.com", image: image },
  { name: "Fidelity Investments", beruf: "Chief Human Resources Officer", telefon: 1234567890 , email: "zejnaj.dukagjin@hotmail.com", image: image },
  { name: "Small Giants", beruf: "Chief Technology Officer", telefon: 1234567890 , email: "zejnaj.dukagjin@hotmail.com", image: image }
])
</script>

<template>
  <div class="tab-pane fade show active" id="pills-leaders" role="tabpanel" aria-labelledby="pills-leaders-tab" tabindex="0">
    <div class="row">
      <div class="col-lg-3" v-for="person in employees">
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