# Simple-website-deployed-on-linux-VM-
I hosted my website on linux Virtual Machine using Apache webserver
## STEPS:
1-First of All after opening our virtual machine i run an update: 
### Command: sudo apt-get update
2-Then we install the webserver for hosting:
### Command: sudo apt install apache2
3-To start the apache HTTP server:
### Command: service apache2 start Copy
4-Get status:
### Command:sudo systemctl status apache2
![alt text](https://github.com/Achref-dot-afk/Simple-website-deployed-on-linux-VM-/blob/main/screenshot1.png)
### It Works!
![alt text](https://github.com/Achref-dot-afk/Simple-website-deployed-on-linux-VM-/blob/main/screenshot2.png)
5-Inside /var/www we will find the html folder that contains the code of the default apache website
6-We just need now to change the content of that folder and add the css and js scripts provided whith the right path for images etc....
7- Here is the result :
![alt text](https://github.com/Achref-dot-afk/Simple-website-deployed-on-linux-VM-/blob/main/screenshot4.png)
## Note :
To modify on files you can use :
### Command:sudo nano filename


