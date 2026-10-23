## Employee-App-Backend-Integration ##

:writing_hand: In this application, the Frontend code of Employee App is provided as dist/build file. The contents of the build file must not be edited or changed. The requirement is to complete the backend code of the application in the provided app.js file.

The requirements are as follows:
* Get api must be used to retrieve all the employee information and one single employee information from the database.
* Post api must be used to add new employee to database.
* Put api must be used to update information of the employee.
* Delete api must be used to delete a single employee from database.
* The basic node modules are to be installed and initialised.
* Connect to the MongoDB Atlas database.


Things to Note:
* Write all the code in provided app.js file.
* Do not change the already given code of app.js file or dist file at any cost.
* Please download the provided zip file and open the contents in VSCode.


:clipboard:  **RESULTS**

:arrow_right: **GET**  http:localhost:3000/api/employeelist

Read the list of all employees

![GET viewall](https://user-images.githubusercontent.com/120376714/224470277-54e861c1-da73-4bbd-8b32-76e3f61204c5.png)


:arrow_right:  **GET**  http:localhost:3000/api/employeelist/:id

Read a single employee detail

![GET by ID](https://user-images.githubusercontent.com/120376714/224470409-d2b8c7ad-901f-487b-885e-6fce4b81a907.png)


:arrow_right:  **POST**  http:localhost:3000/api/employeelist

Add a new employee detail

![POST request](https://user-images.githubusercontent.com/120376714/224470443-4828de78-8641-4e83-b2e3-13284eba86ad.png)

:arrow_right: **DELETE**  http:localhost:3000/api/employeelist/:id
 
 ***Before DELETE request is sent***
 
 ![Before DELETE request](https://user-images.githubusercontent.com/120376714/224470491-5a50080f-e55a-4089-a19b-435c16a63011.png)


***After DELETE request is sent***

![DELETE request](https://user-images.githubusercontent.com/120376714/224470514-32ef9bd4-7cf1-458a-b0b2-8d452e6b0249.png)

:arrow_right: **PUT**   http:localhost:3000/api/employeelist/:id

***Before PUT request is sent***

![Before PUT request](https://user-images.githubusercontent.com/120376714/224470583-f437d6cc-6ff5-497a-9119-c901e6cc0dee.png)

***After PUT request is sent***

![After PUT request](https://user-images.githubusercontent.com/120376714/224470625-310bf2be-b491-43d6-abd5-f4742786a4f5.png)

## Conclusion ##

Successfully done the backend integration using Node JS, Express and MongoDB


 
