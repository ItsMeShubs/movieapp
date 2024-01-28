<script>
    export let movies; 
    import MovieCard from "./MovieCard.svelte";
</script>

<h3>Popular Movies</h3>
<div class="popular_movies">
    {#each movies as movie }
        <MovieCard {movie}/>

    {/each}
</div>

<style>
    h3{
        padding: 0rem;
    }
    .popular_movies{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
    }
</style>