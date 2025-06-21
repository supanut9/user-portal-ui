<template>
 <header
    class="bg-gray-900 text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-30 h-16"
  >
    <button @click="$emit('toggle-sidebar')">
    <span class="icon-[pepicons-pop--menu]"></span>
    </button>
    <UButton v-if="status === 'unauthenticated'" @click="signIn('auth-service')">
      Sign In
    </UButton>
    <div v-if="status === 'authenticated'">
      <UButton @click="signOut()">
        Sign Out
      </UButton>
    </div>
  </header>
</template>

<script setup lang="ts">
defineEmits(['toggle-sidebar'])
const { status, signIn, signOut } = useAuth()
</script>