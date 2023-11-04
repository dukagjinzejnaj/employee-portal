<script setup lang="ts">
import { reactive } from "vue"
import { RouterLink } from "vue-router"

/* Textdaten */
const content = reactive({
    title: "Willkommen!",
    portal: "Mitarbeiterportal",
    text: "Das ist ein kleiner Mitarbeiterportal. In diesem Portal hast du eine Übersicht auf alle Mitarbeiter, News, Regeln, Jobs und kannst sowohl Abwesenheiten beantragen als auch technische Probleme melden."
})
</script>

<template>
  <div class="intro-banner">
      <h1>{{ content.title }}</h1>
  </div>
  <div class="container-md">
    <div class="pages">
      <h2>{{ content.portal }}</h2>
      <p>{{ content.text }}</p>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <div class="card mb-3">
          <div class="card-body">
            <RouterLink class="card-link" to="/employee-portal/rules/"><i class="bi bi-card-checklist"></i> Mitarbeiterregeln</RouterLink>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card mb-3">
          <div class="card-body">
            <RouterLink class="card-link" to="/employee-portal/team/"><i class="bi bi-people-fill"></i> Team</RouterLink>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card mb-3">
          <div class="card-body">
            <RouterLink class="card-link" to="/employee-portal/jobs/"><i class="bi bi-search"></i> Jobs</RouterLink>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card mb-3">
          <div class="card-body">
            <RouterLink class="card-link" to="/employee-portal/news/"><i class="bi bi-newspaper"></i> News</RouterLink>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card mb-3">
          <div class="card-body">
            <RouterLink class="card-link" to="/employee-portal/absence/"><i class="bi bi-clock-fill"></i> Abwesenheit beantragen</RouterLink>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card mb-3">
          <div class="card-body">
            <RouterLink class="card-link" to="/employee-portal/service-desk/"><i class="bi bi-headset"></i> Service Desk</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>