<script setup lang="ts">
import { RouterLink } from 'vue-router'

/* Funktion Portal verlassen */
function leavePortal() {
  if(confirm("Möchtest du uns verlassen?")) {
    alert("Ok, Tschüss! Warte auf google.com ...")
    window.location.href = "https://www.google.com"
  }
}
</script>

<template>
  <div class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <RouterLink class="nav-link active" to="/employee-portal/"><i class="bi bi-house-fill"> Home</i></RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/employee-portal/team/"><i class="bi bi-people-fill"> Team</i></RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/employee-portal/rules/"><i class="bi bi-card-checklist"> Regeln</i></RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/employee-portal/jobs/"><i class="bi bi-search"> Jobs</i></RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/employee-portal/news/"><i class="bi bi-newspaper"> News</i></RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/employee-portal/absence/"><i class="bi bi-clock-fill"> Abwesenheit</i></RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/employee-portal/service-desk/"><i class="bi bi-headset"> Service-Desk</i></RouterLink>
          </li>
        </ul>
        <button type="button" class="logout" @click="leavePortal()">Portal verlassen</button>
      </div>
    </div>
  </div>
</template>