<h1>Store App</h1>

<p>A basic store application built using HTML, CSS, React, Node.js, and SQL. This project follows the CRUD principles, allowing users to create, read, update, and delete data in the portal.</p>

<h2>Tech Stack</h2>
<ul>
  <li><strong>Frontend:</strong> React, HTML, CSS, React Router</li>
  <li><strong>Backend:</strong> Node.js, Express</li>
  <li><strong>Database:</strong> SQL (using MySQL Workbench)</li>
</ul>

<h2>Features</h2>
<ul>
  <li>Create new store items</li>
  <li>Read and display existing items</li>
  <li>Update item details</li>
  <li>Delete items from the store</li>
</ul>

<h2>How to Run</h2>
<ol>
  <li>Clone the repository: <code>git clone [git@github.com:jenasuraj/CRUD-StoreApp.git]</code></li>
  <li>Install dependencies in both frontend and backend directories: <code>npm install</code></li>
  <li>Set up your MySQL database using SQL Workbench and configure the database connection in the backend code.</li>
  <li>Run the backend server: <code>node index.js</code> (or <code>nodemon</code> if installed)</li>
  <li>Run the React frontend: <code>npm start</code></li>
  <li>Open <code>http://localhost:3000</code> in your browser to view the app.</li>
</ol>

<h2>Routes</h2>
<ul>
  <li><strong>/</strong>: Home page</li>
  <li><strong>/add</strong>: Add new item</li>
  <li><strong>/edit/:id</strong>: Edit item details</li>
  <li><strong>/items</strong>: Delete items</li>
</ul>

<h2>Database Configuration</h2>
<p>Make sure to set up a MySQL database in SQL Workbench. Update the database credentials (host, user, password, database name) in your backend configuration file.</p>

<h2>Known Issues</h2>
<ul>
  <li>Ensure the backend server is running before accessing the frontend.</li>
  <li>Check for CORS issues and add middleware if needed.</li>
</ul>

<h2>Future Improvements</h2>
<ul>
  <li>Add authentication for secure item management.</li>
  <li>Implement better error handling and validation.</li>
  <li>Enhance UI with more interactive components.</li>
</ul>


