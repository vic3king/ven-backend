# Ven

Is an api built for an ecommerce application

This project is built on [AdonisJs](http://adonisjs.com/) AdonisJs is a Node.js web framework with a breath of fresh air and drizzle of elegant syntax on top of it. We prefer developer joy and stability over anything else..


## Setup

```bash
- git clone https://github.com/vic3king/ven.git
- cd ven10-backend && npn install
- create a .env file usiong details provided in the .env.example 
- after that run npm run db:refresh to run migrate and npm run seed 
- npm run start:dev to launch development server and access endpoints to e.g [localhost:3333/v1](http://127.0.0.1:3333)
```

Hosted api can be found [here](https://ven-10.herokuapp.com/v1)


## API Endpoints
<table>
  <tr>
      <th>Request</th>
      <th>End Point</th>
      <th>Action</th>
  </tr>
    <tr>
      <td>GET</td>
      <td>/</td>
      <td>Welcome screen</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/v1/products/product</td>
    <td>Create a product</td>
  </tr>
   <tr>
    <td>GET</td>
    <td>/v1/products/</td>
    <td>Get all products</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/v1/products/:productId</td>
    <td>Get a single product</td>
  </tr>
</table>

## Authors

* **Akaniru victory** - *Initial work* - [Vic3king](http://www.vic3king.io)
