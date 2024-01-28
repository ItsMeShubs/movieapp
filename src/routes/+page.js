export async function load({fetch}){

    const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=0112b83c8aa87f386228fd8b4c6d5db2'); 
    const data = await res.json(); 
    if(res.ok){
        return { popular: data.results };
        
    }

}