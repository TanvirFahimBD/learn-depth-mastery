type Data = {
    id: number,
    name: number,
    email: number,
}

const data = JSON.parse(`{
    "posts": 
        [
            {
                "id": 1,
                "name": "Tanvir",
                "email": "tanvir@example.com"
            },
            {
                "id": 2,
                "name": "Rahim",
                "email": "rahim@example.com"
            },
            {
                "id": 3,
                "name": "Karim",
                "email": "karim@example.com"
            }
        ]
    }`
) as Data;

// console.log(data.posts[0].name);
