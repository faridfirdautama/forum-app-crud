# CRUD ForumApp
- A development backend app with MVC clean architecture
- Database: MongoDB + Mongoose
  
## How to use
- Clone this repo
- `pnpm install`
- Make sure you have an account/cluster in [Mongodb](https://www.mongodb.com/)
- Create .env file and fill it with ___Mongoose Driver___ link


## User
### Create
endpoint : POST /api/v1/users
```json
{
  "name": "Someone",
  "city": "Somewhere"
}
```
### Read
endpoint : GET /api/v1/users
```json
{
  "message": "List of Users",
  "data": [
    {
      "_id": "66ac889ffaf90a99a491ec02",
      "name": "Indro",
      "city": "Lamongan"
    },
    {
      "_id": "66ac88aefaf90a99a491ec04",
      "name": "Andri",
      "city": "Malang"
    }
  ]
}
```
### Update
endpoint : PATCH /api/v1/users/:id
```json
{
  "name": "Somone",
  "city": "Somewhere"
}
```
### Delete
endpoint : DELETE /api/v1/users/:id

