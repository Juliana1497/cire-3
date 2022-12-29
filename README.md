Approaches to the Folder structure and the code architecture for its functionality:

The following is the general structure of the Folders contained in the main CIRE folder from which the folders and files that are installed by default when initializing React are displayed:

![1](https://user-images.githubusercontent.com/112361979/209754888-3b2c8652-a3ca-429b-bf84-82c78f21356d.png)

The 'node_modules' folder will keep all the files it has by default.

The public folder will only keep the files 'index.html' and 'manifest.json' since they are necessary for the operation of the web page, their content will not be edited, only the name of the web page will be changed.

![2](https://user-images.githubusercontent.com/112361979/209755085-c4dd6f41-9799-4dba-b4d8-7c099511027f.png)

The src folder is distributed as follows:

It contains another folder called 'components' where the components are contained within the 'buttons', 'layouts' and 'peyes' folders as .jsx files necessary for the operation of the web page, with their respective .css files to apply the corresponding styles. The list of components will be described later.

It contains another folder called 'data' where the DataProvider.jsx will be stored for the operation of the data, this will be the parent of all the other components

It contains another folder called 'img' where the images that will be used for the development of the web page will be contained, such as the logo, the image selected for each service and the 6 images of the home page, among others.

It contains another folder 'routes' where the page routes will be stored.

The data.js file will be inside the src folder since a require is used to import the images, so it needs to be at the same level as the folder where the images are.

In addition, it contains the files that already come by default when initializing React.

The first one is App.js where the .jsx parent components will be called, which I will describe later.

The second is App.css where the general styles of the web page will be applied.

The third is index.js where the App element is called to render it and link it to index.html located in the public folder, which will finally be what will be displayed on the page, in this case nothing will be modified.

The fourth is index.css where the styles of the index.html are shown, the general styles of the project will be placed there.

The files App.test.js, reportWebVitals.js, setupTest.js are files which contribute to the operation of the web page, therefore they will not be modified and left.

![3](https://user-images.githubusercontent.com/112361979/209755433-f4de92c7-4b03-49e7-9e1a-cf851ba21c7c.png)

Components

It is divided into three folders:

buttons:

ButtonHome.jsx will take care of saving the navigation menu button for the home screen. It will be a child of the layout Navbar.jsx

ButtonServices.jsx will take care of saving the navigation menu button for the services screen. It will be a child of the layout Navbar.jsx

ButtonCart.jsx will take care of saving the navigation menu button for the Cart screen. It will be a child of the layout Navbar.jsx

Layout:

CardCategories.jsx: In this the information of each card of each service will be programmed. This will be a child of the ServicesAll.jsx, ServicesSchool.jsx and ServicesTherapies.jsx components.

-Footer.jsx and Footer.css: This will contain the information of the footer together with the CIRÉ social networks. This component will be a child of Layout.js. Footer.css contains the styles from Footer.jsx.

-Header.jsx and Header.css: This will contain the information of the navigation page in the desktop view together with the logo and the name of CIRÉ. This component will be a child of Layout.js. Header.css contains the styles from Header.jsx.

-Layout.js: This component will contain the components that are displayed in all views of the web page.

-Navbar.jsx and Navbar.css: This component will contain the navigation bar in mobile and tablet view. This component will be a child of Layout.js. Navbar.css contains the styles from Navbar.jsx, ButtonHome.jsx, ButtonServices.jsx, ButtonCart.jsx.

-NavServices.jsx : This component will contain the navigation bar in desktop view. This component will be a child of Header.jsx

-Whatsapp.jsx: This will program the order that will be displayed in WhatsApp when the pay option is clicked. Will be a child of Summary.jsx

Peyes:
-Main view. Home.css contains the styles from Home.jsx.: Home.jsx and Home.css
-View where all services are shown. ServicesAll.css contains the styles from CardCategories.jsx, ServicesAll.jsx, ServicesSchool.jsx, ServicesTherapies.jsx and NavServices.css: ServicesAll.jsx and ServicesAll.css
-View where school services are displayed: ServicesSchool.jsx
-View where the therapy services are shown: ServicesTherapies.jsx
-View where the shopping cart is displayed. Cart.css contains the styles from Cart.jsx.: Cart.jsx and Cart.css
-View where the summary of the purchase is shown. Summary.css contains the styles from Summary.jsx and Whatsapp.jsx: Summary.jsx and Summary.css

![4](https://user-images.githubusercontent.com/112361979/209755567-4698b794-7c28-41ee-912c-e2e936546a42.png)

In addition, the .gitignore files that configure the publication will be left in the repository, and the package.json that contain the necessary instructions for React to run correctly, since they are necessary for its operation, in addition to README.md since it is there. It will document all the code.

![5](https://user-images.githubusercontent.com/112361979/209758201-c518ab16-f6ef-4400-ae67-46c1a0b124c1.png)

Necessary dependencies to install:

icons: npm i react-icons     
routes: npm install react-router-dom
description alert: npm install sweetalert2
