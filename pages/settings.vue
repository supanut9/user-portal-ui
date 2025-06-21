<template>
  <UCard>
    <template #header>
      <h1 class="text-2xl font-bold">
        Settings
      </h1>
    </template>

    <div v-if="status === 'authenticated'">
      <p>Welcome, Setting</p>
    </div>
    <div v-else>
      <p>Please sign in to view your profile.</p>
    </div>
  </UCard>
</template>

<script setup lang="ts">
const { status, data } = useAuth()
</script>