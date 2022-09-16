export async function postContactUs(data) {
  const payload = { data };
  let jsonData = null;

  try {
    const resp = await fetch("http://localhost:1337/api/contactuses", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // Authentication: `Bearer ${authToken}`,
      },
      body: JSON.stringify(payload), // body data type must match "Content-Type" header
    });

    jsonData = await resp.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error);
    throw { code: "Something Went Wrong !!" };
  }

  //Check for Errors
  if (jsonData && !jsonData.data) {
    const errorList = [];
    for (const { message } of jsonData.error.details.errors) {
      errorList.push(message);
    }
    throw { errorList };
  }

  if (!jsonData) {
    throw { code: "Something Went Wrong !!" };
  }
}

// {
//     "data": {
//         "id": 5,
//         "attributes": {
//             "name": "Dinesh Malony",
//             "email": "dineshmalony@yahos.com",
//             "subject": "Test Sub2",
//             "message": "Nice Blog site",
//             "createdAt": "2022-09-16T22:01:55.517Z",
//             "updatedAt": "2022-09-16T22:01:55.517Z",
//             "publishedAt": "2022-09-16T22:01:55.515Z"
//         }
//     },
//     "meta": {}
// }

// {
//     "data": null,
//     "error": {
//         "status": 400,
//         "name": "ValidationError",
//         "message": "name must be defined.",
//         "details": {
//             "errors": [
//                 {
//                     "path": [
//                         "name"
//                     ],
//                     "message": "name must be defined.",
//                     "name": "ValidationError"
//                 }
//             ]
//         }
//     }
// }
