# HR BUDDY

A full stack React.js employee management web application for businesses that want to automate repetitive administrative functions.

## Technologies Used

- React.js
- Node
- Express
- PostgreSQL
- Multer
- HTML5
- CSS3
- PM2
- AWS S3

## Live Demo

Try the application live at [https://hr-buddy.andrewkpark.com/](https://hr-buddy.andrewkpark.com/)

## Features

- User can login to ADMIN or EMPLOYEE interface
- ADMIN can view main menu to navigate the app
- ADMIN can add new employee or admin account with a photo
- ADMIN can view individual employee accounts
- ADMIN can delete individual employee accounts
- ADMIN can view department head-counts within each department
- ADMIN can view total hours worked wages earned for all employees
- ADMIN can view hours worked and wages earned for each department
- ADMIN can view hours worked and wages earned for each employee
- EMPLOYEE can clock-in
- EMPLOYEE can clock-out
- User can log-out of the app



## Preview

![Screen Shot 2020-10-13 at 3 51 46 PM](https://user-images.githubusercontent.com/62856013/95924272-25fe8b80-0d6c-11eb-978b-884f7ba84632.png)
![Screen Shot 2020-10-13 at 3 52 10 PM](https://user-images.githubusercontent.com/62856013/95924275-26972200-0d6c-11eb-8d89-17f50daf2afe.png)
![Screen Shot 2020-10-13 at 3 52 42 PM](https://user-images.githubusercontent.com/62856013/95924277-272fb880-0d6c-11eb-9bf0-d6d4c3954617.png)

## Development

#### System Requirements

- npm 6 or higher
- Postgresql 10 or higher

#### Getting Started

1. This application requires the use of AWS S3, 
   
   Please have an AWS Access ID, Access Key, and a Bucket name.

2. Clone the repository.

    ```shell
    https://github.com/mil-amirian/hr-buddy.git
    cd hr-buddy
    ```

3. Install all dependencies with NPM.

    ```shell
    npm install
    ```

4. Create environment variables.

    1. Clone the `env.example.config` file
    1. Name the cloned file to `.env`
    1. Edit the `.env` to provide your credentials

5. Import the example database to PostgreSQL located in `database/dump.sql`.


6. Run the custom express server.

    ```shell
    npm run dev
    ```

7. Once started you can view the application by opening http://localhost:3000 in your browser.

## Links & socials

Portfolio: https://andrewkpark.com

LinkedIn: https://www.linkedin.com/in/andrew-kyungwon-park
