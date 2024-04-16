Task Requirements

1. **User Registration/Login: Users should be able to sign up for a new account or log in securely.**
2. **Income and Expense Tracking:**

Users can effortlessly add, edit, or remove income and expenses using a form, which includes a select field among other inputs to categorize each transaction by type (e.g., salary, groceries).

1. **Simple Analytics:( in Dashboard home )**

3.1 Provide basic insights like total income, total expenses, and net income over time.

3.2 Enable filtering for the insights by date, and by sectors  (e.g., salary, groceries).

3.3 Display visual summaries such as charts or graphs for better understanding.

1. **User-Friendly Interface:**

4.1 Design an intuitive interface for smooth navigation and interaction.

4.2 Ensure compatibility with different devices and screen sizes. ( optional )

### Personal Requirement

1. export Invoice as PDF

# API Design

### User APIs

1. Create User: `/baseurl/api/v1/user/create-user` (POST)

   ```tsx
   {
     email: string;
     password: string;
     displayName: string;
     photoURL: string;
   }
   ```

   ```tsx
   {
   success: true
   data: user,
   message: "User Created Successfully",
   token: eieudjehfkjesyioue
   }
   ```

   ```tsx
   {
   success: false
   message: error.message,
   }
   ```

2. User Login: `/baseurl/api/v1/user/login` (POST)

   ```tsx
   {
     email: string;
     password: string;
   }
   ```

   ```tsx
   {
   success: true
   data: user,
   message: "User Loggedin",
   token: eieudjehfkjesyioue
   }
   ```

   ```tsx
   {
     success: false;
     message: error.message;
   }
   ```

3. Authenticate User: `/baseurl/api/v1/user/:id` (POST)

   ```tsx
   headers: {
   authorization: Bearer token
   }
   ```

   ```tsx
   {
   success: true
   data: user,
   token: eieudjehfkjesyioue
   }
   ```

   ```tsx
   {
   success: false
   message: error.message,
   }
   ```

4. Update User: `/baseurl/api/v1/user/update/:id` (PATCH)

   ```tsx
   email?: string
   password?: string
   displayName?: string
   photoURL?: string
   ```

   ```tsx
   {
   success: true
   data: user,
   message: "User Updated",
   }
   ```

   ```tsx
   {
   success: false;
   message: error.message
   ```

### Service APIs

1. Create Service: `/baseurl/api/v1/service/create` (POST)

   ```tsx
   {
     name: string;
     creatorId: string;
     category: string;
     description: string;
     type: income | expense;
     amount: number;
   }
   ```

   ```tsx
   {
     success: true;
     data: data;
     message: "Service Created Successfully";
   }
   ```

   ```tsx
   {
     success: false;
     message: error.message;
   }
   ```

2. Get Income Services: `/baseurl/api/v1/service/services/:id?type=income` (GET)

   ```tsx
   {
     success: true;
     data: data;
     message: "service retrieved successfully";
   }
   ```

   ```tsx
   {
     success: false;
     message: error.message;
   }
   ```

3. Get Expenses Services: `/baseurl/api/v1/service/services/:id?type=expenses` (GET)

   ```tsx
   {
     success: true;
     data: data;
     message: "service retrieved successfully";
   }
   ```

   ```tsx
   {
     success: false;
     message: error.message;
   }
   ```

4. Update Services: `/baseurl/api/v1/service/:id` (PATCH)

   ```tsx
   {
     success: true;
     data: data;
     message: "service updated successfully";
   }
   ```

   ```tsx
   {
     success: false;
     message: error.message;
   }
   ```

5. Delete Services: `/baseurl/api/v1/service/:id` (DELETE)

   ```tsx
   {
     success: true;
     message: "service deleted successfully";
   }
   ```

   ```tsx
   {
     success: false;
     message: error.message;
   }
   ```

6. Get Total Income: `/baseurl/api/v1/service/:id/total-income?time=7` (GET)
7. Get Total Expenses: `/baseurl/api/v1/service/:id/total-expense?time=7` (GET)
8. Get Category Wise Data : `/baseurl/api/v1/service/:id/?type={}&category={}`

```tsx
{
  query: type, category;
}
```

```tsx
{
  success: true;
  data,
  message: "service deleted successfully";
}
```

```tsx
{
  success: false;
  message: "No Data found";
}
```
