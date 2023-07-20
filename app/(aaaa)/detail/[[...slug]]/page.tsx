export default function SlugPage({params}:{params:{slug:string}}){
    return <h1> 一个路由里不能同时包含[...slug](Catch-all Segments)和[[...slug]](optional Catch-all Segments) Detail Slug Page @@@ {params.slug}</h1>
}