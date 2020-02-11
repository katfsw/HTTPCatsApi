
Rebuilt the HTTP Cat's Api to be a bit of a cleaner API, and for practice

# HTTPCatsApi

Based off of the [HTTPCat](https://http.cat/) API. I re-built it to make it feel a bit Cleaner. Each "Status Cat" will be provided an ID, a Status_Code, a Code_Name, a Code_Desc and a ImageURL.

| Key        | Value           |
| ------------- |:-------------:|
| ID | ID in Current DataBase|
| Status_Code |HTTP Status Code|
| Code_Name |HTTP Code Name|
| Code_Desc |HTTP Code Description|
| ImageURL |HTTP Code Status Cat Image|

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Install Dependencies
```
npm i
```
Start Server
```
npm run server
```

### EndPoints

GET[/]: All of the HTTPCats

```
https://httpcatsapi.herokuapp.com/api/httpcats/
```

GET[/:id]: A Specific HTTPCat by their ID

```
https://httpcatsapi.herokuapp.com/api/httpcats/:id
```
Example:
```
https://httpcatsapi.herokuapp.com/api/httpcats/1
```
Which will return:
```
{
"id": 1,
"status_code": "100",
"code_name": "Continue",
"code_desc": "The server has received the request headers and the client should proceed to send the request body.",
"imageurl": "https://http.cat/100"
}
```

## Deployment

Server is live [here](https://httpcatsapi.herokuapp.com/), the API is live [here](https://httpcatsapi.herokuapp.com/api/httpcats/).
