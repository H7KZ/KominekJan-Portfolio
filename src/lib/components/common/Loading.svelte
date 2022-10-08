<script lang="ts">
  export let loading: boolean;
</script>
{#if !loading}
	<div class="flex font-ms text-grayWhite justify-center items-center	gap-2">
		<i class="fa-solid fa-spinner animate-spin fa-xl"></i>
		<h2 class="text-xl font-semibold">Loading...</h2>
	</div>
{/if}