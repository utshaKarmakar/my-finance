# My-Finance
A smart application to effortlessly record expenses, track budgets, and achieve your financial goals.

<br/>

## Team members

<table>
	 <thead> 
		 <tr> 
			 <th>ID</th> 
			 <th>Name</th> 
			 <th>Email</th> 
			 <th>Role</th> 
		 </tr> 
	 </thead> 
	 <tbody> 
		 <tr> 
			 <td>20220104095</td> 
			 <td>Nimur Rahman Sharif (Tasrik)</td> 
			 <td>shariftasrik12@gmail.com</td> 
			 <td>Lead (Frontend+Backend)</td> 
		 </tr> 
		 <tr> 
			 <td>20220104089</td> 
			 <td>Afnan Zaman Ifty</td> 
			 <td>zamanafnan62@gmail.com</td> 
			 <td>Frontend</td>   
		 </tr> 
		 <tr> 
			 <td>20220104080</td> 
			 <td>Utsha Karmakar</td> 
			 <td>utshakarmakar04109@gmail.com</td> 
			 <td>Frontend</td>   
		 </tr> 
	 </tbody> 
 </table>

  
<br/>

## Target Audience

The target audience for "My-Finance" includes young professionals managing their budgets. Students can use it to track expenses and build financial discipline. Small business owners and freelancers can monitor income and cash flow. Families will benefit from organizing shared expenses and savings. It also helps budget-conscious individuals achieve financial goals easily.

  
<br/>  

## Tech Stack

<table>
	 <thead> 
		 <tr> 
			 <th>Teck Stack</th> 
			 <th>We Use</th> 
		 </tr> 
	 </thead> 
	 <tbody> 
		 <tr> 
			 <td>Backend</td> 
			 <td>NodeJS + ExpressJS</td> 
		 </tr> 
		 <tr> 
			 <td>Frontend</td> 
			 <td>ReactJS</td>   
		 </tr> 
		 <tr> 
			 <td>Database</td> 
			 <td>PostgreSQL</td>  
		 </tr> 
		 <tr> 
			 <td>Rendering Method</td> 
			 <td>CSR (Client-Side Rendering)</td> 
		 </tr> 
	 </tbody> 
 </table>

<br/>

## Project Features

### User Section
<ul>
  <li>Multi-User Authentication</li>
  <li>Dashboard for managing personal finances</li>
  <li>CRUD operations for income, expenses, and budgets</li>
  <li>Search and filter transactions by category and date</li>
  <li>Visualizations like charts and graphs for financial insights</li>
  <li>Goal-setting and progress tracking</li>
  <li>Notifications and reminders for bill payments or saving milestones</li>
</ul>

### Admin Section
<ul>
  <li>Multi-Admin Authentication</li>
  <li>Admin Panel for managing users</li>
  <li>Oversee and manage user accounts and transactions</li>
  <li>Generate reports on user activity and app performance</li>
</ul>
<br/>

## API Endpoints

### Authentication
- **POST** `/api/users/register` - User registration
- **POST** `/api/users/login` - User login
- **POST** `/api/users/logout` - User logout
- **POST** `/api/users/forgot-password` - Forgot password recovery
- **POST** `/api/users/reset-password` - Reset password with token

### Financial Management
- **GET** `/api/transactions` - Fetch all transactions for a user
- **POST** `/api/transactions` - Add a new transaction (income or expense)
- PUT `/api/transactions/:transactionId` - Edit transaction details
- DELETE `/api/transactions/:transactionId` - Delete a transaction

### Budget and Goals
- **GET** `/api/budgets` - View current budgets and goals
- **POST** `/api/budgets` - Create a new budget or goal
- **PUT** `/api/budgets/:budgetId` - Update budget or goal details
- **DELETE** `/api/budgets/:budgetId` - Remove a budget or goal

### Reporting and Analytics
- **GET** `/api/reports` - Generate financial reports
- **GET** `/api/charts` - Fetch data for visualization (e.g., spending trends, category-wise expenses)
<br/>
## Milestones
<table>
	 <thead> 
		 <tr> 
			 <th>Milestones</th> 
			 <th>We Cover</th> 
		 </tr> 
	 </thead> 
	 <tbody> 
		 <tr> 
			 <td>Checkpoint 1</td> 
			 <td>
				 <ul>
					<li>Frontend, Backend, Database setup</li>
					<li>User registration and login pages</li>
					<li>CRUD operations for transactions</li>
					<li>Dashboard for financial insights with charts and graphs</li>
					<li>API integration for adding and managing budgets</li>
				</ul>
			</td>
		 </tr> 
		 <tr> 
			 <td>Checkpoint 3</td> 
			 <td><ul>
					 <li>Search and filter functionality for transactions</li>
					 <li>Goal-setting and tracking features</li>
					 <li>Admin panel for user and transaction management</li>
					 <li>Payment options by Stripe</li>
					 <li>Enhanced reporting and analytics features</li> <li>Notifications and reminders</li>
				 </ul>
				</td>  
		 </tr> 
	 </tbody> 
 </table>



