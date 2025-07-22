<template>
    <Navbar @toggle-sidebar="toggleSidebar" />
    <div class="relative">
      <Sidebar :is-open="isSidebarOpen" />
      <main     class="mt-16 p-12 transition-all duration-300 ease-in-out"
        :class="{ 'lg:ml-64': isSidebarOpen }">
        <NuxtPage class="overflow-hidden" />
      </main>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isSidebarOpen = ref(false);

const handleResize = () => {
  if (window.innerWidth < 1024) {
    isSidebarOpen.value = false;
  } else {
    isSidebarOpen.value = true;
  }
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>