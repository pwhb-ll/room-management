<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData
</script>

<svelte:head>
  <title>Rooms</title>
</svelte:head>

<h1>Rooms</h1>
<h4>User Or Admin Role</h4>
<p>{data.message}</p>