## The Bakery App

- This is my bakery service app made for a small local business. 
- This app is fully scalable and can easily be manipulated to support other small businesses.

Customers can:
- View cake gallery and order form.
- Create an account to place new orders and view past orders.
- Select a pick up date and time.
- Add cake to cart and securely pay at checkout.

Owner can:
- Upload pictures of their products using Firebase Cloud Storage.
- Manage orders and transactions via the [Stripe API.](https://stripe.com/docs/api)

## 3/16/2021 Progress Update: 

### Back end
- Configure DynamoDB + Write Schema*
- Configure User Authentication*
- Lambda Functions for: creating orders + processing payments
- Configure Payments + Transactions to Stripe API
####
- \* = Needs Minor Fixes

### Front end
- Home Page
- Gallery Page
- Order Form Page
- PickUp: Date + Time Page**
- Shopping Cart page
- Payment + Checkout Page
- View Order Status Page***
####
- \** = Needs Major Fixes
- \*** = Haven't Started

### To Do:
- Add date + time to ProcessOrderInput table
- Add TimePicker UI to PickUp page to complete page
- PickUp page needs a major bug fix. Page currently needs a refresh before Add to cart button works
-   -*Potential fix is to add item to cart in Order instead of PickUp page
-   -*Another potential fix is 
- Begin Order Status Page
- Grant public view access to order form, and all authorized users (not just Admins) can create products.
