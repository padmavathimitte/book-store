# Title
ReactJs Full Stack Assignment-Interactive Bookstore Application

## Objective

* The application should allow users to browse and search for books, view book details, add books to a shopping cart, and place an order.

> Demo

### Usage

```
git clone https://github.com/padmavathimitte/book-store.git  //to clone the github repository
npm install                                                        //to install all the dependencies required to run application
npm start                                                          //to start the application

```
**Note:** Node should be greater than or equal to **14.0** to run the application.


### Development


## Tech Stack

* Use ReactJS, React Router, Redux or React Context API, CSS or CSS frameworks, Git, and GitHub for hosting the repository.

## Completion Instructions

### Functionality

#### Must Have

  * Build a ReactJs application with multiple pages/components, including Home, Book Listing, Book Details, Shopping Cart, and Checkout pages.
  *  Implement features such as book search, book filtering, add to cart, remove from cart, and order placement.
### Pages:
    * Page : Home
        * Page Details :
            Header - links for pages Home, Book List, Cart
            Banner - Heading, description, and "Explore Books" Button
        * Navigation :


    * Page : Book List
        * Page Details :
            Header - links for pages Home, Book List, Cart 
            Book Items(title,subtitle,image,price), Search(by title, author), Filter(by price)
            
        * Navigation : 
            "Book List" link in Header,
            "Explore Books" Button,
            "Back" Button in Book Details Page


    * Page : Book Details
        * Page Details: Book detailed Info(title,subtitle,image,description,price), "Add to cart" Button,"Back" button
        * Navigation : 
            Each book in the book list page

    * Page : Cart
        * Page Details: Cart Items(title,subtitle,image,price), "Remove" Button, Checkout Info, Order Summary,
        * Navigation :
            "Cart" link in Header,
            "Back" Button in Checkout Page

    * Page: Checkout
        * Page Details: Back button, Order Form(Personal Details, summary), "Place Order" Button
        * Navigation :
            Checkout in Cart


#### Nice to Have

* implementing user authentication

### Guidelines to develop a project

#### Must Have
* Use Github
    * Commit your code regularly and include clear commit messages.

    * Include a README file explaining the project setup, usage instructions, and any additional information.

    * Ensure the repository is well-organized and easy to navigate.

    * The code clean, modular, and well-structured.

* The application should be visually appealing and user-friendly.
* The application sholud handle all the errors gracefully.

#### Nice to Have

* Implement unit tests
### Submission Instructions

#### Must Have

* Github Repository

#### Nice to Have

* Deploy the application on a hosting platform.


## Technical Details

### Routes

| Page          | Route         | Path          |
| ------------- | ------------- | ------------- |
| Home          | Home          | /             |
| Book List     | Book List     | /books        |
| Book Details  | Book Details  | /bookd/:id    |
| Cart          | Cart          | /cart         |
| Checkout      | Checkout      | /checkout     |
| Not Found     | Not Found     | /not-found    |

### Routes & Components

**Home**
| Component | Details                                      | State                     | API (IT Bookstore) |
| --------- | -------------------------------------------- | ------------------------- | ------------------ |
| Home      | Heading,Description,and "ExploreBooks"button |  _                        |  _                 |
| Header    | Links for pages Home, Book List, Cart        | (Context Consumer)        |  _                 |

**Book List**
| Component    | Details                                      | State                               | API (IT Bookstore) |
| -----------  | -------------------------------------------- | ----------------------------------- | ------------------ |
| BookList     |                                              | apiStatus,booksData,priceRangeValue | /new               |
| Header       |  Links for pages Home, Book List, Cart       | (Context Consumer)                  | _                  |
| SearchInput  |  Search (by title,auhtor), "Search" button   | SearchInputValue                    | /search/{query}    |
| PriceRange   |  Filter (by price), "Apply Filter" button    | _                                   | _                  |
| BookItem     |  Book Items (title, subtitle, image, price)  | _                                   | _                  |
| Loader       |                                              | _                                   | _                  |
| ErrorMessage |                                              | _                                   | _                  |



**Book Detalis**
| Component    | Details                                                                                                         | State                               | API (IT Bookstore) |
| -----------  | --------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------ |
| BookDetails  | Book detailed Information -- image,title, subtitile,price,description,etc.,"Add to cart" button & "Back" button |  apiStatus,bookDetailsData          | /books/{isbn}      |
| Header       | Links for pages Home, Book List, Cart                                                                           |  (Context Consumer)                 | _                  |
| Loader       | _                                                                                                               | _                                   | _                  |
| ErrorMessage | _                                                                                                               | _                                   | _                  |

**Cart**
| Component    | Details                                                        | State                               | API (IT Bookstore) |
| -----------  | -------------------------------------------------------------- | ----------------------------------- | ------------------ |
| Cart         | Cart Items, "Remove" button, Order Summary, "Checkout" Button  | (Context Consumer)                  |                    |            
| Header       | Links for pages Home, Book List, Cart                          | (Context Consumer)                  |                    |
| CartItem     | Book detailed Info(image,title, subtitile,price,description)   | (Context Consumer)                  |                    |

**Checkout**

| Component         | Details                                                                                                 | State                                               | API (IT Bookstore) |
| -----------       | --------------------------------------------------------------------------------------------------------| --------------------------------------------------- | ------------------ |
| Checkout          | "Back" button                                                                                           | (Context Consumer),isOrderPlaced                    | _                  |
| UserDetailsForm   | Order Form - Personal Details-First Name, Last Name,Email,Mobile No., Place Order Button, Order Summary | name,address,phone,email,showValidationErrorMessage | _                  |

**Not Found**

| Component         | Details                                      | State                   | API (IT Bookstore) |
| -----------       | -------------------------------------------- | ------------------------| ------------------ |
| NotFound          | _                                            | _                       | _                  | 
| Header            | Links for pages Home, Book List, Cart        | (Context Consumer)      | _                  | 

**App**

| Component   | Details     | State                                                                                        | API (IT Bookstore) |
| ----------- | ----------- | -------------------------------------------------------------------------------------------- | ------------------ |
| App         | _           | cartList (Context Provider), Context: cartList, addToCart(), deleteFormCart(), resetCart()   | _                  |

### Guidelines

    * Followed Github Guidelines
        * Made the commits often and made sure the commit messages are concise and specific.
        * Included a README file explaining the project setup,usage instructions,and any additional     information
    * Followed Clean Code Guidelines
    * The repo is well-organized and easy to navigate
        * Followed the create-react-app folder structure
    * The application handled all the errors.


## Resources

### Design files
Home, Book List, Book Details, Shopping Cart, Checkout
Reference: https://www.crossword.in

### APIs

    Books,Book Details, Search
    API reference: https://api.itbook.store

### Third-party packages
    
    * Routes Router (react-router-dom v5.2.0)
    * Icons (react-icons)
    * Loader (react-loader-spinner)
    * Range slider(rc-slider)

### Future Improvements

    * Implement User Authentication