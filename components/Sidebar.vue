<template>
  <aside
    :class="[
      'bg-gray-700',
      'text-white',
      'w-64',
      'p-4',
      'fixed',
      'top-0',
      'left-0',
      'h-full',
      'z-20',
      'transform',
      'transition-transform',
      'duration-300',
      {
        'translate-x-0': isOpen,
        '-translate-x-full': !isOpen,
      },
    ]"
    style="padding-top: 64px;"
  >
    <nav>
      <ul>
        <li>
 <NuxtLink to="/profile" class="py-2 flex items-center gap-2">
         <span class="icon-[ix--user-profile]"></span>
            Profile
          </NuxtLink>
        </li>
        <li>
       <NuxtLink to="/settings" class="py-2 flex items-center gap-2">
     <span class="icon-[uil--setting]"></span>
            Settings
     </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});
</script>