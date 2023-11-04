<script setup lang="ts">
import { reactive } from "vue"
import type Jobs from "../../interfaces/jobs"

/* Textdaten */
const content = reactive({
    title: "Jobs",
    text: "Folgende Stellen sind hier ausgeschrieben:"
})

const jobs = reactive<Jobs[]>([
  { department: "Marketing", name: "Marketing Manager", information: "Bewirb dich jetzt als Marketing Manager." },
  { department: "IT", name: "Software Developer", information: "Bewirb dich jetzt als Software Developer." },
  { department: "HR", name: "HR Specialist", information: "Bewirb dich jetzt als HR Specialist." }
])
</script>

<template>
  <div class="container-md">
    <div class="pages">
        <h2>{{ content.title }}</h2>
        <p>{{ content.text }}</p>
    </div>
    <div class="row">
      <div class="col-lg-4" v-for="job in jobs">
        <div class="card mb-3">
          <div class="card-header">
            <h4>{{ job.department }}</h4>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ job.name }}</h5>
            <p class="card-text">{{ job.information }}</p>
            <a href="https://www.google.com" target="_blank" class="btn btn-outline-secondary btn-sm">Mehr erfahren</a>
            <a href="mailto:hallo@beispiel.ch" class="btn btn-outline-secondary btn-sm">Bewerben</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>