const res = await fetch("http://localhost:1337/api/topics", {
  method: "GET",
  withCredentials: true,
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjYyNTAwMTM1LCJleHAiOjE2NjUwOTIxMzV9.qxABambj4nsSh2W87Ax0BVaUq3i1QkfQ9PQSUfgIyzI",
  },
});

// const data = res.json();
console.log(res.json());
