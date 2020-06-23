# PotHoleDetector

Reason for selecting problem statement 

Bad roads infrastructure can lead to reduced road safety. One of the major problems we see on Indian roads is potholes. Increased traffic, blocked lanes, injuries, and even deaths; all of these issues are linked to potholes and bad roads in a major way.Especially accident deaths happened last year are more than 30% due to lack of proper roads.

As per empirical study shows that there could be more than to 100,000 potholes in need of repair on the island of the city of Bangalore. The perpetual repairs cost the city an estimated huge investment annually. 


our team  firmly believe in the philosophy, that all of the biggest problems in our world can be solved using technology and innovation. We intend to do just that by putting the power to change our roads in everyone's hands!

The main motive and objective of the project is to save lives of people by trying to minimize accidents on the road Potholes are serious concern issue in our country. People find it difficult to avoid potholes while driving. We are addressing this problem by building a pothole detector system and helping the drivers know about the road conditions by alerting them through maps.

To detect potholes present in Roads via a camera mounted to public/private vehicles and intimate the corresponding authorities for necessary act.The System updates the Geo-Location of every potholes detected to a centralized data center with the image and severity.

The data in the data center is used to analyze Road conditions for immediate and prioritized actions.The Analyzed Report Lists the potholes in the most commuted roads and helps the authorities to decide the quickness of the action.

Data Set Images

Due to space constraint in github we uploaded on google drive.

The below link provides the data set images folder .The output obatined in the Results folder are with accuracy and efficiency https://drive.google.com/file/d/1pUcpNrRm3fZrwmGfH0aGm_WEA5Pl9sZ5/view?usp=sharing


*******Results folder images are extracted by using opencv******


Technology stack used for Project*

PotHole Detection : Azure Function

MachineLearning Model to detect PotHoles : Azure Custom vision API - Predictions

Data Annotation & Training of Modal : Azure Custom vision API - Training

API Host : Azure deployment

Database : Azure SQL Server

Primary Host : Azure Virtual Machine

Data visualization : Azure Power BI

Object recognition : Python - OpenCV

React Js

Submission Video hosted on youtube details as follows:

https://www.youtube.com/watch?v=A1sGngPQ7Ts&feature=youtu.be

Implementation

Project implementation made by using recorder video clip will be converted into image frames using open CV and will be shared to the Azure Custom vision Api to detect the Potholes. The Images with potholes prediction percentage of 50 or more will be considered and the corresponding geo-location of the image will be send to the Azure functions api. The azure function api will take care of persisting the received information into the azure sql server database. The admin can extract the data and a visualize the data with Azure Power BI reports for analytics and can group the data by Date, Location, severity, etc.

Contributors:
kiran kumar , Vaibhav Jain , Chanchal Bansal
![](https://raw.githubusercontent.com/Apollo9999/PotHoleDetector/master/images/Screenshot%20(107).png)
![](https://raw.githubusercontent.com/Apollo9999/PotHoleDetector/master/images/Screenshot%20(108).png)
![](https://raw.githubusercontent.com/Apollo9999/PotHoleDetector/master/images/Screenshot%20(109).png)
![](https://raw.githubusercontent.com/Apollo9999/PotHoleDetector/master/images/Screenshot%20(110).png)
![](https://raw.githubusercontent.com/Apollo9999/PotHoleDetector/master/images/Screenshot%20(111).png)
![](https://raw.githubusercontent.com/Apollo9999/PotHoleDetector/master/images/Screenshot%20(112).png)
![](https://raw.githubusercontent.com/Apollo9999/PotHoleDetector/master/images/Screenshot%20(113).png)
![](https://raw.githubusercontent.com/Apollo9999/PotHoleDetector/master/images/Screenshot%20(114).png)
![](https://raw.githubusercontent.com/Apollo9999/PotHoleDetector/master/images/Screenshot%20(115).png)

