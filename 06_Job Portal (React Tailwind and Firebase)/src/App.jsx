import { useEffect, useState } from "react";
import Header from "./components/Header";
import JobCard from "./components/JobCard";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import jobData from "./JobDummyData";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase.config";

function App() {
const [jobs, setJobs] = useState([])

const fetchJobs = async() => {
  const tempJobs = []
  const q = query(collection(db, "jobs"))
  const querySnapshot = await getDocs(q);
querySnapshot.forEach((job) => {
  // console.log(doc.id, " => ", doc.data());
  tempJobs.push({
    ...job.data(),
    id: job.id,
    postedOn: job.data().postedOn.toDate() 
  })
});
setJobs(tempJobs)
}

useEffect(() => {
  fetchJobs()
},[])


  return (
    <div>
      <Nav />
      <Header />
      <SearchBar />
      {jobs.map((job) => {
        return(
          <JobCard key={job.id} {...job} />
        ) 
        
      })}
    </div>
  );
}

export default App;

//how to center div in tailwindcss?