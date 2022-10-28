# Friends recommendation API

This API allows you to add people, create friendship relationships between added people then recommend new friends based on users friend's relationships. 

Recommendations are also ordered by scores, the score is calculated based on how many friends of the user have friendship with that person.

# How to start the project

## Clone the project
```bash
git clone https://github.com/jademirf/friends_recommendation.git
```

## Install project dependencies
```bash
npm install
```

## Build and Start the project
```bash
npm run build
npm run start
```

## You can also start the project in development mode
```bash
npm run dev
```
# How to use the API
### To perform API calls you'll need to use a rest client like [postman](https://www.postman.com) or [insomnia](https://insomnia.rest/download)
### Alternatively, you can access the online version
### https://friends-recommendation.cyclic.app/


## API routes
| Route                 | Methods| Description |
|-----------------------|:------:|-------------|
| /clean                | DELETE | Erases all system's data (People and Relationships) |
| /person               | POST   | Creates a new person, expects `{name: string, cpf: number}` |
| /person               | GET    | Returns a list with everyone on the system |
| /person/:cpf          | GET    | Returns person's data from a given cpf |
| /relationship/        | POST   | Creates a new friendship between two informed persons. Expects: `{cpf1: number, cpf2: number}` |
| /relationship/:cpf    | GET    | Returns the friends list from the given cpf |
| /recommendations/:cpf | GET    | Returns friends suggestion ordered by score |
| /seed                 | GET    | Fills the memory with fake data to test features |