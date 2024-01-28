<script>
    import PopularMovies from "../components/popularMovies.svelte";
    export let data; 
    


</script>
    
<section>
    
    <PopularMovies movies={data.popular}/>
    
</section>
