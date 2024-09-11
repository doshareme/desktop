<script setup>
const supabase = useSupabaseClient()

supabase.auth.signOut().then(() => {
  navigateTo('/auth/login')
});
</script>

<template>
    Logging You Out

</template>