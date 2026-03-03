import useFetch from "./useFetch"


export default function Github() {
    
const {data, loading, error} = useFetch('https://api.github.com/users/Mohan-77')
  

    if (loading) return <div>Loading...</div>
  return (
    <div>
       <h2>{data.name}</h2>
         <h3>{data.bio}</h3>
            <img src={data.avatar_url} alt={data.name} width="200px"/>
        
    </div>
  )
}
