## The Bakery App

- This is my bakery app for a small local business owner. 
- The database can be manipulated for the app to support other small businesses.

Customers can:
- View product gallery. (Gallery Page)
- Create an account to place new orders. (Order Page)
- Select a pick up date and time. (Pick Up Page)
- Add products to cart and securely pay at checkout. (Checkout Page)

Owner can:
- Upload pictures of their products to Firebase Cloud Storage. (Gallery Page)
- Manage orders and transactions via the [Stripe API](https://stripe.com/docs/api).

## 4/7/2021 Progress Update: 

- The base functionality is complete.

### Back End Tools & Services
- AWS Amplify
- User Pool Authentication + Permissions
- DynamoDB
- Amazon Cognito User Pools
- Lambda Functions: Creating orders + Processing payments
- Transactions via Stripe API

### Front End Features
Responsive pages:
- Home: carousel
- Gallery: instagram style display, animated popups ([Firebase Gallery](https://www.youtube.com/watch?v=vUe91uOx7R0))
- Order: iOS style toggleswitch, accordion, carousels, responsive table
- PickUp: Material UI date + time pickers
- Cart: responsive table
- Checkout: input form

### Extra Features
- Order status page for customers to view past and current orders
- Alternative payment options: pay with cash or with Zelle

### To Do:
- Front end work for order confirmation + account registration pages
- Confirmation email
- Launch app
- Begin extra features
