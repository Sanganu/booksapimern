
export default{
    getReferenceVideo: async function(searchKey){
     let apiData = await fetch(`/api/videos/${searchKey}`)
     let searchData = await apiData.json() 
      return  await searchData
  
    },
    saveReferenceVideo: async function(video){
      await fetch
    }
}



