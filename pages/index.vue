<template>
     <div>
    <button v-if="status === 'unauthenticated'" @click="signIn('auth-service')">
      Sign in with Custom OAuth
    </button>
    <div v-if="status === 'authenticated'">
      <p>Welcome, {{ data?.user?.name }}!</p>
      <button @click="signOut()">Sign out</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { status, data, signIn, signOut } = useAuth()
</script>
